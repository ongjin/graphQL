import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Users_Temp } from './user.entity';
import { InjectRepository, InjectDataSource } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Injectable, Inject, Catch, UseFilters, HttpException, HttpStatus, Headers, UseGuards } from '@nestjs/common';

import { UserService } from './user.service';
import { UpdateUserInput } from './dto/update-user.input';
import { CreateUserInput } from './dto/create-user.input';

import { Header } from 'src/shared';
import { CommonService } from 'src/shared';
import { AuthGuard } from 'src/shared/guards/auth.guard';
import { RolesGuard } from 'src/shared/guards/roles.guard';
import { MeasureTime } from 'src/shared/decorators/measureTime.decorator';

@Resolver()
// @UseFilters(CatchException)
export class Users_TempResolver {
    constructor(
        private readonly userService: UserService
    ) { }

    @Query(() => [Users_Temp])
    @MeasureTime()
    async getUsers1(@Args('dbName') dbName: string, @Header('authorization') authorization: string): Promise<Users_Temp[]> {
        console.log('authorization', authorization);

        return this.userService.getUsers(dbName);
    }

    @Query(() => Users_Temp)
    async getUser1(@Args('USER_NO') USER_NO: number, @Header('authorization') authorization: string): Promise<Users_Temp> {
        console.log('authorization', authorization);

        const result = this.userService.getUser(USER_NO)
        return result
    }

    @Mutation(() => Users_Temp)
    async createUser1(@Args('input') input: CreateUserInput): Promise<Users_Temp> {
        return this.userService.createUser(input)
    }

    @Mutation(() => Users_Temp)
    async updateUser1(@Args('input') input: UpdateUserInput): Promise<Users_Temp> {
        return this.userService.updateUser(input);
    }

    @Mutation(() => Boolean)
    async deleteUser1(@Args('USER_NO') USER_NO: number): Promise<boolean> {
        return this.userService.deleteUser(USER_NO);
    }

}
