import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { InjectRepository, InjectDataSource } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Injectable, Inject, Catch, UseFilters, HttpException, HttpStatus, Headers, Body, UseInterceptors, Req, UseGuards } from '@nestjs/common';

// import { UsersTemp, UserService } from 'src/modules/users';
import { UsersTemp } from './entities/user.entity';
import { CreateUserInput, UpdateUserInput } from './dto';
import { Header, Auth, Log, MeasureTime, Role, Result, bypassAuth, Cacheable, CustomRequest, RolesGuard } from 'src/shared';
import { Observable, of } from 'rxjs';
import { UserService } from './interface/user.serveice.interface'
import { Request } from 'express';

@Resolver()
@Auth(...[Role.User, Role.Admin])
// @UseFilters(CatchException)
export class UsersResolver {
    constructor(
        // private readonly userService: UserService,
        @Inject('UserService') private readonly userService: UserService,
    ) { }

    @Query(() => [UsersTemp], { name: 'getUsers' })
    // @Auth(...[Role.User, Role.Admin])
    getUsers(@Header('authorization') authorization: string): Observable<Promise<UsersTemp[]>> {
        return of(this.userService.getUsers())
    }

    @Query(() => [UsersTemp], { name: 'getUsers' })
    @Auth(...[Role.User, Role.Admin])
    getUsersPage(@Args('current') current: number, @Args('take') take: number): Promise<UsersTemp[]> {
        return this.userService.getUsersPage(current, take);
    }

    @Query(() => UsersTemp, { name: 'getUser' })
    @Auth(Role.User)
    // @UseGuards(RolesGuard)
    // @Log()
    @Cacheable({ ttl: 1000 * 3 })
    getUser(@Args('userNo') userNo: number, @CustomRequest('user') user: Request): Promise<UsersTemp> {
        console.log(user);
        
        const result = this.userService.getUser(userNo)
        return result
    }

    @Mutation(() => Result, { name: 'createUser' })
    @Auth(Role.User)
    createUser(@Args('input') input: CreateUserInput): Promise<Result> {
        return this.userService.createUser(input)
    }

    @Mutation(() => Result, { name: 'updateUser' })
    @Auth(...[Role.User, Role.Admin])
    updateUser(@Args('input') input: UpdateUserInput): Promise<Result> {
        return this.userService.updateUser(input);
    }

    @Mutation(() => Boolean, { name: 'deleteUser' })
    @Auth(...[Role.User, Role.Admin])
    deleteUser(@Args('userNo') userNo: number): Promise<boolean> {
        return this.userService.deleteUser(userNo);
    }

    @Mutation(() => UsersTemp, { name: 'multiPleDBInsert' })
    @Auth(...[Role.User, Role.Admin])
    multiPleDBInsert(@Args('accountId') accountId: number): Promise<UsersTemp> {
        return this.userService.multiPleDBInsert(accountId)
    }

}
