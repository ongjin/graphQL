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

  findAll() {
    return `This action returns all goods`;
  }

  async findOne(msNo: string) {
    const result = await this.goodsHDRepository.find({
      where: { msNo }
    })
    console.log('result', result.length);
    
    return result
  }

}
