import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { SalesHD, SalesDT } from './sales.entity';
import { InjectRepository, InjectDataSource } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Injectable, Inject } from '@nestjs/common';

import { SalesService } from './sales.service';

@Resolver()
export class SalesResolver {
    constructor(
        private readonly salesService: SalesService
    ) { }

    @Query(() => [SalesHD])
    async getSales(): Promise<SalesHD[]> {
        return this.salesService.getSales();
    }

    @Query(() => [SalesHD])
    async getSalesPage(@Args('current') current: number, @Args('limit') limit: number): Promise<SalesHD[]> {
        return this.salesService.getSalesPage(current, limit);
    }
}
