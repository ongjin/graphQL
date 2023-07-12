import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PromotionDetail, PromotionHeader } from './entities/promotion.entity';
import { PromotionService } from './interface/promotion.service.interface';

@Injectable()
export class PromotionServiceImpl implements PromotionService {
    constructor(
        @InjectRepository(PromotionHeader) private readonly promotionHDRepository: Repository<PromotionHeader>,
        @InjectRepository(PromotionDetail) private readonly promotionDTRepository: Repository<PromotionDetail>,
    ) { }

    findOne(msNo: string): Promise<PromotionHeader[]> {
        return this.promotionHDRepository.find({
            where: { msNo, webKioskUseYn: 'Y' },
        })
    }

}
