import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GoodsDetail, GoodsHeader } from './entities/good.entity';
import { GoodsService } from './interface/goods.service.interface';


@Injectable()
export class GoodsServiceImpl implements GoodsService {
    constructor(
        @InjectRepository(GoodsHeader) private readonly goodsHDRepository: Repository<GoodsHeader>,
        @InjectRepository(GoodsDetail) private readonly goodsDTRepository: Repository<GoodsDetail>,
    ) { }

    goods(): Promise<GoodsHeader[]> {
        return this.goodsHDRepository.find()
    }

    goodsOne(msNo: string): Promise<GoodsHeader[]> {
        const result = this.goodsHDRepository.find({
            where: { msNo }
        })

        return result
    }

}

