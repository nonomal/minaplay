import { ApiQueryDto } from '../../utils/api.query.dto';
import { Series } from './series.entity';
import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsOptional, IsString } from 'class-validator';
import { Transform } from 'class-transformer';

export class SeriesQueryDto extends ApiQueryDto<Series> {
  @ApiProperty({
    description: '查询关键字',
    required: false,
  })
  @IsOptional()
  @IsString()
  keyword?: string;

  @ApiProperty({
    description: '剧集id',
    required: false,
  })
  @Transform(({ value }) => Number(value))
  @IsOptional()
  @IsInt()
  id?: number;

  @ApiProperty({
    description: '剧集名称',
    required: false,
  })
  @IsOptional()
  @IsString()
  name?: string;
}
