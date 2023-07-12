import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { bypassAuth } from 'src/shared';
import { PromotionService } from './promotion.service';
import { PromotionHeader } from './entities/promotion.entity';

@Resolver('Promotion')
export class PromotionResolver {
  constructor(private readonly promotionService: PromotionService) { }

  @Query('promotion')
  @bypassAuth(true)
  findOne(@Args('msNo') msNo: string): Promise<PromotionHeader[]> {
    return this.promotionService.findOne(msNo);
  }
}

