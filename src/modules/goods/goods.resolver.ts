import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Auth, bypassAuth, Role } from 'src/shared';
import { GoodsService } from './goods.service';

@Resolver('Good')
export class GoodsResolver {
  constructor(private readonly goodsService: GoodsService) { }


  @Query('goods')
  findAll() {
    return this.goodsService.findAll();
  }

  @Query('good')
  @Auth(...[Role.User, Role.Admin])
  findOne(@Args('msNo') msNo: string) {
    return this.goodsService.findOne(msNo);
  }

}
