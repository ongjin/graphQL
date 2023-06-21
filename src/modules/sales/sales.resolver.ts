import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { SalesHD, SalesDT } from './sales.entity';
import { InjectRepository, InjectDataSource } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Injectable, Inject } from '@nestjs/common';

import { SalesService } from './sales.service';
import { Auth, Role } from 'src/shared';

@Resolver()
export class SalesResolver {
    constructor(
        private readonly salesService: SalesService
    ) { }

    @Query(() => [SalesHD])
    @Auth(...[Role.User, Role.Admin])
    async getSales(): Promise<SalesHD[]> {
        return this.salesService.getSales();
    }

    @Query()
    @Auth(...[Role.User, Role.Admin])
    getSalesPage(@Args('current') current: number, @Args('limit') limit: number) {
        return this.salesService.getSalesPage(current, limit);
    }
}
