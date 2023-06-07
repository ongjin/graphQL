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
    async getMembers(dbName: string): Promise<Member[]> {
        return this.memberService.getMembers(dbName);
    }

    @Query(() => Member)
    async getMember(@Args('MS_NO') msNo: string, @Args('CHAIN_NO') chainNo: string): Promise<Member> {
        return this.memberService.getMember(msNo.trim().toUpperCase(), chainNo)
    }

}

