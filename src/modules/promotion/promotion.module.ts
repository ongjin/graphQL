import { Module } from '@nestjs/common';
import { PromotionService } from './promotion.service';
import { PromotionResolver } from './promotion.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PromotionDetail, PromotionHeader } from './entities/promotion.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([PromotionHeader, PromotionDetail])
  ],
  providers: [PromotionResolver, PromotionService]
})
export class PromotionModule { }
