import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { InjectRepository, InjectDataSource } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Injectable, Inject, Catch, UseFilters, HttpException, HttpStatus, Headers, Body } from '@nestjs/common';

import { Users_Temp, UserService } from 'src/modules/users';
import { CreateUserInput, UpdateUserInput } from './dto';

import { Header, CommonService, Auth, Log, CacheResult, MeasureTime } from 'src/shared';



@Resolver()
// @UseFilters(CatchException)
export class Users_TempResolver {
    constructor(
        private readonly userService: UserService,
    ) { }


    @Query(() => [Users_Temp])
    // @CacheResult()
    async getUsers(@Args('dbName') dbName: string, @Header('authorization') authorization: string): Promise<Users_Temp[]> {
        console.log('authorization', authorization);

        return this.userService.getUsers(dbName);
    }

    @Query(() => Users_Temp)
    // @Auth('admin')
    // @CacheResult()
    // @Log()
    async getUser(@Args('userNo') userNo: number, @Header('authorization') authorization: string): Promise<Users_Temp> {
        console.log('authorization', authorization);
        
        const result = this.userService.getUser(userNo)
        return result
    }

    @Mutation(() => Users_Temp)
    @Auth('user')
    async createUser(@Args('input') input: CreateUserInput): Promise<Users_Temp> {
        return this.userService.createUser(input)
    }

    @Mutation(() => Users_Temp)
    async updateUser(@Args('input') input: UpdateUserInput): Promise<Users_Temp> {
        return this.userService.updateUser(input);
    }

    @Mutation(() => Boolean)
    async deleteUser(@Args('USER_NO') USER_NO: number): Promise<boolean> {
        return this.userService.deleteUser(USER_NO);
    }

}
