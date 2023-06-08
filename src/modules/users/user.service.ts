import { Injectable, UseFilters } from '@nestjs/common';
import { Users_Temp } from './user.entity';
import { Repository, Between, DataSource, EntityManager, Connection } from 'typeorm';
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
        @InjectRepository(Users_Temp, 'webkiosk')
        private readonly usersTempRepository: Repository<Users_Temp>,
        @InjectRepository(Users_Temp)
        private readonly usersTempRepository2: Repository<Users_Temp>,

        private dataSource: DataSource,
        private moduleRef: ModuleRef,
        private connection: Connection
    ) { }

    private async loadEntityManager(systemId: string): Promise<EntityManager> {
        return this.moduleRef.get(getEntityManagerToken(systemId), {
            strict: false
        });
    }

    async getUsers(dbName: string): Promise<Users_Temp[]> {
        // this.usersTempRepository.find({where : {USER_NO: Between(1, 22)}, order: {USER_NO: 'desc'}})
        // return this.usersTempRepository.find()

        return (await this.commonService.getRepository('webkiosk', Users_Temp)).find()

        const test = this.repoTest(dbName)
        return test.find()
        // return this.commonService.getRepository<Users_Temp>(Users_Temp, dbName);
    }
    
    async getU(dbName: string, current: number = 1, limit: number = 100): Promise<Users_Temp[]> {
        // 페이지네이션 로직 구현
        const offset = (current - 1) * limit;
        // 데이터베이스 쿼리 실행
        const users = await this.usersTempRepository.find({
            skip: offset,
            take: limit,
            // order: {USER_NO: 'ASC'}
        });
        return users;
        // 페이지네이션1
        // const offset = (current - 1) * limit;
        // const query = this.usersTempRepository.createQueryBuilder('user');

        // query.skip(offset).take(limit).orderBy('USER_NO', 'ASC');

        // return query.getMany();

    }

    private repoTest(dbName: string) {
        if (dbName === 'webkiosk') {
            return this.usersTempRepository
        } else {
            return this.usersTempRepository2
        }
    }

    async getUser(USER_NO: number): Promise<Users_Temp> {
        const result = this.usersTempRepository.findOne({ where: { USER_NO } })
        return result

        // return this.usersTempRepository.findOneBy({ USER_NO })
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

        return this.usersTempRepository.save(newUser)
    }

    async updateUser(input: UpdateUserInput): Promise<Users_Temp> {
        const user = await this.usersTempRepository.findOneBy({ USER_NO: input.USER_NO });
        if (!user) {
            throw new Error('User not found');
        }

        if (input.USER_ID) {
            user.USER_ID = input.USER_ID;
        }
        if (input.USER_PW) {
            user.USER_PW = input.USER_PW;
        }
        if (input.USER_EMAIL) {
            user.USER_EMAIL = input.USER_EMAIL;
        }
        if (input.USER_PHONE) {
            user.USER_PHONE = input.USER_PHONE;
        }
        if (input.USER_JADATE) {
            user.USER_JADATE = input.USER_JADATE;
        }
        if (input.USER_NAME) {
            user.USER_NAME = input.USER_NAME;
        }

        return this.usersTempRepository.save(user);
    }

    async deleteUser(USER_NO: number): Promise<boolean> {
        const user = await this.usersTempRepository.findOneBy({ USER_NO });
        if (!user) {
            throw new Error('User not found');
        }

        await this.usersTempRepository.remove(user);
        return true;
    }


}
