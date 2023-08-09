import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';

import { Auth, Role } from 'src/shared';
import { Strnhdtb } from './entities/sales.entity';
import { Inject } from '@nestjs/common';
import { SalesService } from './interface/sales.service.interface';

@Resolver()
export class SalesResolver {
    constructor(
        @Inject('SalesService') private readonly salesService: SalesService
    ) { }

    @Query(() => [Strnhdtb], { name: 'getSales' })
    @Auth(...[Role.User, Role.Admin])
    getSales(): Promise<Strnhdtb[]> {
        return this.salesService.getSales();
    }

    @Query(() => [Strnhdtb], { name: 'getSales' })
    @Auth(...[Role.User, Role.Admin])
    getSalesPage(@Args('current') current: number, @Args('limit') limit: number): Promise<Strnhdtb[]> {
        return this.salesService.getSalesPage(current, limit);
    }
}

