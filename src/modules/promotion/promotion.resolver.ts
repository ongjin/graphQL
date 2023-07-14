import { Inject } from '@nestjs/common';
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { bypassAuth } from 'src/shared';
import { PromotionHeader } from './entities/promotion.entity';
import { PromotionService } from './interface/promotion.service.interface';

@Resolver('Promotion')
export class PromotionResolver {
    constructor(
        @Inject('PromotionService') private readonly promotionService: PromotionService
    ) { }

    @Query(() => [PromotionHeader], { name: 'promotions' })
    @bypassAuth(true)
    promotions(): Promise<PromotionHeader[]> {
        return this.promotionService.promotions();
    }

    @Query(() => [PromotionHeader], { name: 'promotions' })
    @bypassAuth(true)
    promotionsOne(@Args('msNo') msNo: string): Promise<PromotionHeader[]> {
        return this.promotionService.promotionsOne(msNo);
    }
}

