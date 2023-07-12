import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';

import { Auth, Role } from 'src/shared';
import { SalesHD } from './entities/sales.entity';
import { Inject } from '@nestjs/common';
import { SalesService } from './interface/sales.service.interface';

@Resolver()
export class SalesResolver {
    constructor(
        @Inject('SalesService') private readonly salesService: SalesService
    ) { }

    @Query()
    @Auth(...[Role.User, Role.Admin])
    getSales(): Promise<SalesHD[]> {
        return this.salesService.getSales();
    }

    @Query()
    @Auth(...[Role.User, Role.Admin])
    getSalesPage(@Args('current') current: number, @Args('limit') limit: number): Promise<SalesHD[]> {
        return this.salesService.getSalesPage(current, limit);
    }
}
