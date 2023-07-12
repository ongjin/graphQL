import { Resolver, Query, Mutation, Args, Context, GqlExecutionContext } from '@nestjs/graphql';
import { Member } from './entities/member.entity';
import { ExecutionContext, Inject } from '@nestjs/common';

import { Auth, CustomRequest, Header, Role } from 'src/shared';
import { MemberService } from './interface/member.service.interface';

@Resolver()
export class MemberResolver {

    constructor(
        @Inject('MemberService') private readonly memberService: MemberService
    ) { }

    @Query(() => [Member])
    @Auth(...[Role.User, Role.Admin])
    getMembers(@Header('authorization') authorization: string, @CustomRequest('user') user: object): Promise<Member[]> {
        // console.log('authorization', authorization, user);
        const dbName = user['junction']
        // {
        //     msNo: '1lx6XWm0',
        //     chainNo: '2yx8UA==',
        //     roles: ['user', 'admin'],
        //     uuid: '4c7f3690-73a3-4a4a-89d3-20e39a511aa1',
        //     junction: 'shinsun',
        //     iat: 1686553212,
        //     exp: 1686556812
        // }
        return this.memberService.getMembers(dbName)
    }


    @Query(() => [Member])
    @Auth(...[Role.User, Role.Admin])
    getMembersPage(@Args('current') current: number, @Args('limit') limit: number, @CustomRequest('user') user: object): Promise<Member[]> {
        console.log(user);

        const dbName = user['junction']

        return this.memberService.getMembersPage(dbName, current, limit);
    }

    @Query(() => Member)
    @Auth(...[Role.User, Role.Admin])
    getMember(@CustomRequest('user') user: object): Promise<Member> {
        const dbName = user['junction']
        const msNo = user['msNo']
        const chainNo = user['chainNo']

        return this.memberService.getMember(dbName, msNo, chainNo)
    }

}

