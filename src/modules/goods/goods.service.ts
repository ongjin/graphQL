import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GoodsDetail, GoodsHeader } from './entities/good.entity';


@Injectable()
export class GoodsService {
  constructor(
    @InjectRepository(GoodsHeader) private readonly goodsHDRepository: Repository<GoodsHeader>,
    @InjectRepository(GoodsDetail) private readonly goodsDTRepository: Repository<GoodsDetail>,
  ) { }

  findAll(): Promise<GoodsHeader[]> {
    return this.goodsHDRepository.find()
  }

  findOne(msNo: string): Promise<GoodsHeader[]> {
    const result = this.goodsHDRepository.find({
      where: { msNo }
    })

    return result
  }

}
