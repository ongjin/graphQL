import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Member } from './member.entity';
import { InjectRepository, InjectDataSource } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Injectable, Inject } from '@nestjs/common';

import { MemberService } from './member.service';

@Resolver()
export class MemberResolver {
    constructor(
        private readonly memberService: MemberService
    ) { }

    @Query(() => [Member])
    async getMembers(@Args('dbName') dbName: string): Promise<Member[]> {
        return this.memberService.getMembers(dbName);
    }

    @Query(() => [Member])
    async getMembersPage(@Args('dbName') dbName: string,  @Args('current') current: number, @Args('limit') limit: number): Promise<Member[]> {
        return this.memberService.getMembersPage(dbName, current, limit);
    }

    @Query(() => Member)
    async getMember(@Args('MS_NO') msNo: string, @Args('CHAIN_NO') chainNo: string): Promise<Member> {
        return this.memberService.getMember(msNo, chainNo)
    }

}

