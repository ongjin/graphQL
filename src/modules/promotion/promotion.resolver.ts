import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { bypassAuth } from 'src/shared';
import { PromotionService } from './promotion.service';

@Resolver('Promotion')
export class PromotionResolver {
  constructor(private readonly promotionService: PromotionService) { }


  @Query('promotion')
  findAll() {
    return this.promotionService.findAll();
  }

  @Query('promotion')
  @bypassAuth(true)
  findOne(@Args('msNo') msNo: string) {
    return this.promotionService.findOne(msNo);
  }
}

