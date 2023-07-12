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


    @Query('goods')
    @Auth(...[Role.User, Role.Admin])
    findAll(): Promise<GoodsHeader[]> {
        return this.goodsService.findAll();
    }

    @Query('good')
    @Auth(...[Role.User, Role.Admin])
    findOne(@Args('msNo') msNo: string): Promise<GoodsHeader[]> {
        return this.goodsService.findOne(msNo);
    }

}
