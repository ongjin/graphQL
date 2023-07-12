import { Module } from '@nestjs/common';
import { PromotionServiceImpl } from './promotion.service';
import { PromotionResolver } from './promotion.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PromotionDetail, PromotionHeader } from './entities/promotion.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([PromotionHeader, PromotionDetail])
    ],
    providers: [
        PromotionResolver,
        { provide: 'PromotionService', useClass: PromotionServiceImpl }
    ]
})
export class PromotionModule { }
