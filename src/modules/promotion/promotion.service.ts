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

  findAll() {
    return `This action returns all promotion`;
  }

  findOne(msNo: string) {
    return this.promotionHDRepository.find({
      where: { msNo, webKioskUseYn: 'Y' },
    })
  }

}
