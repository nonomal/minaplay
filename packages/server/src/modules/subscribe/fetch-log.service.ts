import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FetchLog } from './fetch-log.entity';
import { DeepPartial, FindManyOptions, FindOptionsWhere, Repository } from 'typeorm';

@Injectable()
export class FetchLogService {
  constructor(@InjectRepository(FetchLog) private fetchLogRepository: Repository<FetchLog>) {}

  async save(log: DeepPartial<FetchLog>) {
    return await this.fetchLogRepository.save(log);
  }

  async findOneBy(where: FindOptionsWhere<FetchLog>) {
    return await this.fetchLogRepository.findOneBy(where);
  }

  async findAndCount(options?: FindManyOptions<FetchLog>) {
    return await this.fetchLogRepository.findAndCount(options);
  }
}
