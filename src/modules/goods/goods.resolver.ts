import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Auth, bypassAuth, Role } from 'src/shared';
import { GoodsHeader } from './entities/good.entity';
import { Inject } from '@nestjs/common';
import { GoodsService } from './interface/goods.service.interface';

@Resolver('Good')
export class GoodsResolver {
    constructor(
        @Inject('GoodsService') private readonly goodsService: GoodsService
    ) { }


    @Query(() => [GoodsHeader], { name: 'goods' })
    @Auth(...[Role.User, Role.Admin])
    goods(): Promise<GoodsHeader[]> {
        return this.goodsService.goods();
    }

    // @Query('goods')
    @Query(() => [GoodsHeader], { name: 'goods' })
    @Auth(...[Role.User, Role.Admin])
    goodsOne(@Args('msNo') msNo: string): Promise<GoodsHeader[]> {
        return this.goodsService.goodsOne(msNo);
    }

}
