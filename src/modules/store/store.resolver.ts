import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Auth, Role } from 'src/shared';
import { StoreService } from './store.service';
import { StoreSystem } from './entities/store.entity';

@Resolver('Store')
export class StoreResolver {
  constructor(private readonly storeService: StoreService) { }
  
  @Query('store')
  @Auth(...[Role.User, Role.Admin])

  @Query('store')
  @Auth(...[Role.User, Role.Admin])
  findOne(@Args('msNo') msNo: string): Promise<StoreSystem> {
    return this.storeService.findOne(msNo);
  }

}
