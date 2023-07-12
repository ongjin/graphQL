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

    @Query('stores')
    @Auth(...[Role.User, Role.Admin])
    findAll(): Promise<StoreSystem[]> {
        return this.storeService.findAll()
    }

    @Query('store')
    @Auth(...[Role.User, Role.Admin])
    findOne(@Args('msNo') msNo: string): Promise<StoreSystem> {
        return this.storeService.findOne(msNo);
    }

}


