import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Account } from './entities/account.entity';

import { Auth, CustomRequest, Header, Role } from 'src/shared';
import { Inject } from '@nestjs/common';
import { AccountService } from './interface/account.service.interface';


@Resolver()
export class AccountResolver {

    constructor(
        @Inject('AccountService') private readonly accountService: AccountService
    ) { }

    @Query(() => [Account], { name: 'getAccounts' })
    @Auth(...[Role.User, Role.Admin])
    getAccounts(@Header('authorization') authorization: string, @CustomRequest('user') user: object): Promise<Account[]> {
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
        return this.accountService.getAccounts()
    }

    @Query(() => [Account], { name: 'getAccount' })
    @Auth(...[Role.User, Role.Admin])
    getAccount(@Args('id') id: number, @Header('authorization') authorization: string, @CustomRequest('user') user: object): Promise<Account> {
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
        return this.accountService.getAccount(id)
    }

    @Query(() => [Account], { name: 'findOneBy' })
    @Auth(...[Role.User, Role.Admin])
    findOneBy(@Args('id') id: number, @Header('authorization') authorization: string, @CustomRequest('user') user: object): Promise<Account> {
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
        return this.accountService.findOneBy(id)
    }



}

