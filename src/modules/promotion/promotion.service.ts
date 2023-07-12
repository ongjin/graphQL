import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PromotionDetail, PromotionHeader } from './entities/promotion.entity';

@Injectable()
export class PromotionService {
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
