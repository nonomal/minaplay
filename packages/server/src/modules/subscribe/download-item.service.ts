import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DownloadItem } from './download-item.entity';
import { DeepPartial, FindManyOptions, FindOptionsWhere, Repository } from 'typeorm';
import { StatusEnum } from '../../enums/status.enum';
import { Aria2Service } from '../aria2/aria2.service';
import { Cron, CronExpression } from '@nestjs/schedule';
import { RuleFileDescriber, RuleFileDescriptor } from './rule.interface';
import { VALID_VIDEO_MIME } from '../../constants';
import { RuleErrorLogService } from './rule-error-log.service';
import { MediaService } from '../media/media.service';
import { EpisodeService } from '../series/episode.service';
import { MediaFileService } from '../media/media-file.service';
import { SeriesSubscribeService } from '../series/series-subscribe.service';
import { PluginService } from '../plugin/plugin.service';
import { FeedEntry } from '@extractus/feed-extractor';
import { Rule } from './rule.entity';
import { FetchLog } from './fetch-log.entity';
import { Source } from './source.entity';

@Injectable()
export class DownloadItemService implements OnModuleInit {
  constructor(
    @InjectRepository(DownloadItem) private downloadItemRepository: Repository<DownloadItem>,
    private aria2Service: Aria2Service,
    private ruleErrorLogService: RuleErrorLogService,
    private mediaService: MediaService,
    private episodeService: EpisodeService,
    private mediaFileService: MediaFileService,
    private seriesSubscribeService: SeriesSubscribeService,
    private pluginService: PluginService,
  ) {}

  async onModuleInit() {
    await this.downloadItemRepository.update(
      {
        status: StatusEnum.PENDING,
      },
      {
        status: StatusEnum.FAILED,
        error: 'Application restart',
      },
    );
  }

  @Cron(CronExpression.EVERY_12_HOURS)
  async handleAutoClean() {
    await this.aria2Service.purgeDownloadResult();
  }

  async addDownloadItemTask(url: string, props: DeepPartial<DownloadItem>) {
    const task = await this.aria2Service.addTask(url);
    const item = await this.save({
      ...props,
      gid: task.gid,
      status: StatusEnum.PENDING,
    });
    task.on('complete', async () => {
      await this.save({
        id: item.id,
        status: StatusEnum.SUCCESS,
      });
    });
    task.on('error', async (status) => {
      await this.save({
        id: item.id,
        status: StatusEnum.FAILED,
        error: status.errorMessage,
      });
    });

    return [task, item] as const;
  }

  async addAutoDownloadItemTask(
    entry: FeedEntry,
    describeFn: RuleFileDescriber,
    rule: Rule,
    source: Source,
    log: FetchLog,
  ) {
    const [task, item] = await this.addDownloadItemTask(entry.enclosure.url, {
      title: entry.title,
      url: entry.enclosure.url,
      source: { id: source.id },
      rule: { id: rule.id },
      log: { id: log.id },
      entry: JSON.stringify(entry),
    });
    task.on('complete', async (files) => {
      for (const file of files) {
        if (VALID_VIDEO_MIME.includes(file.mimetype)) {
          const copy = Object.freeze(Object.assign({}, file));

          let descriptor: RuleFileDescriptor;
          try {
            descriptor = (await describeFn?.(entry, copy)) ?? {};
          } catch (error) {
            await this.ruleErrorLogService.save({
              rule: { id: rule.id },
              error: error.toString(),
            });
            continue;
          }

          const { id } = await this.mediaService.save({
            name: descriptor.name ?? file.name,
            description: descriptor.description,
            download: { id: item.id },
            isPublic: descriptor.isPublic ?? true,
            file: { id: file.id },
          });
          const media = await this.mediaService.findOneBy({ id });
          await this.mediaFileService.generateMediaFiles(media);
          await this.pluginService.emitAllEnabled('onNewMedia', id);

          if (rule.series) {
            const { id } = await this.episodeService.save({
              title: descriptor.title ?? file.name,
              no: descriptor.no,
              pubAt: descriptor.pubAt ?? entry.published ?? new Date(),
              media: { id: media.id },
              series: { id: rule.series.id },
            });
            await this.pluginService.emitAllEnabled('onNewEpisode', id);
          }
        }
      }

      if (rule.series) {
        await this.seriesSubscribeService.notifyUpdate(rule.series);
      }
    });

    return [task, item] as const;
  }

  async save(item: DeepPartial<DownloadItem>) {
    return await this.downloadItemRepository.save(item);
  }

  async findOneBy(where: FindOptionsWhere<DownloadItem>) {
    const item = await this.downloadItemRepository.findOneBy(where);
    if (item?.gid) {
      try {
        item.info = await this.aria2Service.tellStatus(item.gid);
      } catch {}
    }
    return item;
  }

  async findAndCount(options?: FindManyOptions<DownloadItem>) {
    const [result, total] = await this.downloadItemRepository.findAndCount(options);
    for (const item of result) {
      if (item.gid) {
        try {
          item.info = await this.aria2Service.tellStatus(item.gid);
        } catch (error) {}
      }
    }
    return [result, total] as const;
  }

  async delete(where: FindOptionsWhere<DownloadItem>) {
    const items = await this.downloadItemRepository.find({ where });
    for (const item of items) {
      await this.downloadItemRepository.delete({ id: item.id });
      if (item.gid) {
        try {
          await this.aria2Service.removeBy(item.gid);
        } catch {}
      }
    }

    return items.length > 0;
  }
}
