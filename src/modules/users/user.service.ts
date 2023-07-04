import { Injectable, UseFilters, UseGuards } from '@nestjs/common';
import { UsersTemp } from './entities/user.entity';
import { Repository, Between, DataSource, EntityManager, Connection } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdateUserInput } from './dto/update-user.input';
import { CreateUserInput } from './dto/create-user.input';
import { Account } from '../account';
import { Result } from 'src/shared';


@Injectable()
// @UseFilters(CatchException)
export class UserService {
    constructor(
        // private readonly commonService: CommonService,
        // @InjectRepository(UsersTemp, 'webkiosk') private readonly usersTempRepository: Repository<UsersTemp>,
        @InjectRepository(UsersTemp) private readonly usersTempRepository: Repository<UsersTemp>,
        @InjectRepository(Account, 'postgre') private readonly accountRepository: Repository<Account>,
    ) { }

    async getUsers(dbName: string): Promise<UsersTemp[]> {
        // this.usersTempRepository.find({where : {USER_NO: Between(1, 22)}, order: {USER_NO: 'desc'}})
        // return this.usersTempRepository.find()

        // return (await this.commonService.getRepository('default', UsersTemp)).find()

        const test = this.repoTest(dbName)

        return test.find({
            relations: ['tokenTemp']
        })
        // return this.commonService.getRepository<UsersTemp>(UsersTemp, dbName);
    }

    async getU(dbName: string, current: number = 1, limit: number = 100): Promise<UsersTemp[]> {
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
            return this.usersTempRepository
        }
    }

    getUser(userNo: number): Promise<UsersTemp> {
        const result = this.usersTempRepository.findOne({ where: { userNo } })
        return result

        // return this.usersTempRepository.findOneBy({ USER_NO })
    }


    async createUser(input: CreateUserInput): Promise<Result> {
        const userNo = await this.usersTempRepository.createQueryBuilder()
            .select("SEQ_USER_NO.NEXTVAL")
            .from('DUAL', 'DUAL')
            // .where('USER_NO = (select MAX(USER_NO) FROM USERS_TEMP)')
            .getRawOne();
        // const userNo = await this.usersTempRepository.query('SELECT SEQ_USER_NO.NEXTVAL FROM DUAL')

        const newUser: CreateUserInput = {
            // ...input
            userNo: userNo.NEXTVAL,
            userEmail: input.userEmail,
            userId: input.userId,
            // userJadate: input.userJadate,
            userName: input.userName,
            userPhone: input.userPhone,
            userPw: input.userPw
        };
        
        try {
            await this.usersTempRepository.save(newUser)
            return { success: true, message: '성공' }
        } catch (error) {
            console.log(error);
            
            return { success: false, message: '실패' }
        }
    }

    async updateUser(input: UpdateUserInput): Promise<Result> {
        const userNo = input.userNo
        const user = await this.usersTempRepository.findOneBy({ userNo });
        if (!user) {
            throw new Error('User not found');
        }

        if (input.userId) {
            user.userId = input.userId;
        }
        if (input.userPw) {
            user.userPw = input.userPw;
        }
        if (input.userEmail) {
            user.userEmail = input.userEmail;
        }
        if (input.userPhone) {
            user.userPhone = input.userPhone;
        }
        // if (input.userJadate) {
        //     user.userJadate = input.userJadate;
        // }
        if (input.userName) {
            user.userName = input.userName;
        }

        try {
            // await this.usersTempRepository.update(userNo, user);
            await this.usersTempRepository.save(user);

            return { success: true, message: '업데이트 성공' }
        } catch (error) {
            return { success: false, message: '업데이트 실패' }
        }
    }

    async deleteUser(userNo: number): Promise<boolean> {
        const user = await this.usersTempRepository.findOneBy({ userNo });
        if (!user) {
            throw new Error('User not found');
        }

        await this.usersTempRepository.remove(user);
        return true;
    }


    async multiPleDBInsert(accountId: number): Promise<UsersTemp> {
        const account = await this.accountRepository.findOneBy({ id: accountId })
        if (!account) {
            throw new Error(`조회 대상 테이블에 accountId: "${accountId}"가 존재하지 않습니다.`);
        }

        const user = await this.usersTempRepository.findOneBy({ userNo: accountId })

        if (user) {
            throw new Error('이미 존재하는 아이디입니다.');
        }

        const result = this.usersTempRepository.save({
            userEmail: account.internal_group,
            userId: account.code,
            userJadate: account.create_date,
            userName: account.name,
            userNo: account.id,
            userPhone: account.code,
            userPw: account.account_type
        })

        return result
    }


}
