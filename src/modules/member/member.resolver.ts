import { Resolver, Query, Mutation, Args, Context, GqlExecutionContext } from '@nestjs/graphql';
import { Member } from './entities/member.entity';
import { Injectable, Inject, ExecutionContext, Req } from '@nestjs/common';

import { MemberService } from './member.service';
import { Auth, CustomRequest, Header, Pagination, Role } from 'src/shared';

@Resolver()
export class MemberResolver {

    constructor(
        private readonly memberService: MemberService
    ) { }

    yourMethod(context: ExecutionContext) {
        const ctx = GqlExecutionContext.create(context);
        const request = ctx.getContext().req;
        const user = request.user;
        return user
        // request.user를 사용하여 사용자 정보에 접근
    }

    @Query(() => [Member])
    @Auth(...[Role.User, Role.Admin])
    async getMembers(@Header('authorization') authorization: string, @CustomRequest('user') user: object): Promise<Member[]> {
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
        return this.memberService.getMembers(dbName);
    }
    

    @Query(() => [Member])
    @Auth(...[Role.User, Role.Admin])
    async getMembersPage(@Args('current') current: number, @Args('limit') limit: number, @CustomRequest('user') user: object): Promise<Member[]> {
        const dbName = user['junction']

        return this.memberService.getMembersPage(dbName, current, limit);
    }

    @Query(() => Member)
    @Auth(...[Role.User, Role.Admin])
    async getMember(@CustomRequest('user') user: object): Promise<Member> {
        const dbName = user['junction']
        const msNo = user['msNo']
        const chainNo = user['chainNo']

        return this.memberService.getMember(dbName, msNo, chainNo)
    }

}

