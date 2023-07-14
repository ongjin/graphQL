import { Inject } from '@nestjs/common';
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Auth, Role } from 'src/shared';
import { StoreSystem } from './entities/store.entity';
import { StoreService } from './interface/store.service.interface';

@Resolver('Store')
export class StoreResolver {
    constructor(
        @Inject('StoreService') private readonly storeService: StoreService
    ) { }

    @Query(() => [StoreSystem], { name: 'stores' })
    @Auth(...[Role.User, Role.Admin])
    stores(): Promise<StoreSystem[]> {
        return this.storeService.stores()
    }

    @Query(() => StoreSystem, { name: 'store' })
    @Auth(...[Role.User, Role.Admin])
    store(@Args('msNo') msNo: string): Promise<StoreSystem> {
        return this.storeService.store(msNo);
    }

}


