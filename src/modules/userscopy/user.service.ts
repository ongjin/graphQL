import { Injectable, UseFilters } from '@nestjs/common';
import { Users_Temp } from './user.entity';
import { Repository, Between, DataSource, EntityManager } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdateUserInput } from './dto/update-user.input';
import { CreateUserInput } from './dto/create-user.input';

import { GqlExecutionContext } from '@nestjs/graphql';
import { CommonService } from 'src/shared';

import { ModuleRef } from '@nestjs/core';
import { getEntityManagerToken } from '@nestjs/typeorm';



@Injectable()
// @UseFilters(CatchException)
export class UserService {
    constructor(
        private readonly commonService: CommonService,
        private moduleRef: ModuleRef,
    ) {

    }

    async getUsers(dbName: string): Promise<Users_Temp[]> {
        const adgagd = await this.commonService.getRepository(dbName, Users_Temp)
        const result = adgagd.find()
        return result
    }

    async getUser(USER_NO: number): Promise<Users_Temp> {
        return (await this.commonService.getRepository('webkiosk', Users_Temp)).findOne({ where: { USER_NO } })
    }

    async createUser(input: CreateUserInput): Promise<Users_Temp> {
        const newUser: Users_Temp = {
            ...input
            // USER_NO: input.USER_NO,
            // USER_EMAIL: input.USER_EMAIL,
            // USER_ID: input.USER_ID,
            // USER_JADATE: input.USER_JADATE,
            // USER_NAME: input.USER_NAME,
            // USER_PHONE: input.USER_PHONE,
            // USER_PW: input.USER_PW
        };

        return (await this.commonService.getRepository('webkiosk', Users_Temp)).save({ newUser })
    }

    async updateUser(input: UpdateUserInput): Promise<Users_Temp> {
        const user = (await this.commonService.getRepository('webkiosk', Users_Temp)).findOneBy({ USER_NO: input.USER_NO });
        if (!user) {
            throw new Error('User not found');
        }

        // if (input.USER_ID) {
        //     user.USER_ID = input.USER_ID;
        // }
        // if (input.USER_PW) {
        //     user.USER_PW = input.USER_PW;
        // }
        // if (input.USER_EMAIL) {
        //     user.USER_EMAIL = input.USER_EMAIL;
        // }
        // if (input.USER_PHONE) {
        //     user.USER_PHONE = input.USER_PHONE;
        // }
        // if (input.USER_JADATE) {
        //     user.USER_JADATE = input.USER_JADATE;
        // }
        // if (input.USER_NAME) {
        //     user.USER_NAME = input.USER_NAME;
        // }

        return (await this.commonService.getRepository('webkiosk', Users_Temp)).save(user);
    }

    async deleteUser(USER_NO: number): Promise<boolean> {
        const user = (await this.commonService.getRepository('webkiosk', Users_Temp)).findOneBy({ USER_NO });
        if (!user) {
            throw new Error('User not found');
        }

        (await this.commonService.getRepository('webkiosk', Users_Temp)).remove(user);
        return true;
    }


}
