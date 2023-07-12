import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Auth, bypassAuth, Role } from 'src/shared';
import { GoodsService } from './goods.service';
import { GoodsHeader } from './entities/good.entity';

@Resolver('Good')
export class GoodsResolver {
  constructor(private readonly goodsService: GoodsService) { }


  @Query('goods')
  findAll(): Promise<GoodsHeader[]> {
    return this.goodsService.findAll();
  }

  @Query('good')
  @Auth(...[Role.User, Role.Admin])
  findOne(@Args('msNo') msNo: string): Promise<GoodsHeader[]> {
    return this.goodsService.findOne(msNo);
  }

}
