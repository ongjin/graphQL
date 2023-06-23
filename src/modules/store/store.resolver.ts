import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Auth, Role } from 'src/shared';
import { StoreService } from './store.service';

@Resolver('Store')
export class StoreResolver {
  constructor(private readonly storeService: StoreService) { }

  @Query('store')
  @Auth(...[Role.User, Role.Admin])
  findAll() {
    return this.storeService.findAll();
  }

  @Query('store')
  @Auth(...[Role.User, Role.Admin])
  findOne(@Args('msNo') msNo: string) {
    return this.storeService.findOne(msNo);
  }

}
