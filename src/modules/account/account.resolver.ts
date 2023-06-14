import { Resolver, Query, Mutation, Args, Context, GqlExecutionContext } from '@nestjs/graphql';
import { Account } from './account.entity';

import { AccountService } from './account.service';
import { Auth, CustomRequest, Header, Pagination, Role } from 'src/shared';

@Resolver()
export class AccountResolver {

    constructor(
        private readonly accountService: AccountService
    ) { }

    @Query(() => [Account])
    @Auth(...[Role.User, Role.Admin])
    async getAccounts(@Header('authorization') authorization: string, @CustomRequest('user') user: object): Promise<Account[]> {
        console.log('authorization', authorization, user);
        // {
        //     msNo: '1lx6XWm0',
        //     chainNo: '2yx8UA==',
        //     roles: ['user', 'admin'],
        //     uuid: '4c7f3690-73a3-4a4a-89d3-20e39a511aa1',
        //     junction: 'shinsun',
        //     iat: 1686553212,
        //     exp: 1686556812
        // }
        return this.accountService.getAccounts();
    }



}

