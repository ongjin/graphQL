import { Inject, Injectable, UseFilters, UseGuards } from '@nestjs/common';
import { UsersTemp } from './entities/user.entity';
import { Repository, Between, DataSource, EntityManager, Connection } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdateUserInput } from './dto/update-user.input';
import { CreateUserInput } from './dto/create-user.input';
import { Account } from '../account';
import { Result } from 'src/shared';
import { UserService } from './interface/user.serveice.interface'
import { AccountService } from '../account/interface/account.service.interface';

@Injectable()
// @UseFilters(CatchException)
export class UserServiceImpl implements UserService {
    constructor(
        // private readonly commonService: CommonService,
        @InjectRepository(UsersTemp) private readonly usersTempRepository: Repository<UsersTemp>,
        // @InjectRepository(Account, 'postgre') private readonly accountRepository: Repository<Account>,
        // private readonly accountService: AccountService
        @Inject('AccountService') private readonly accountService: AccountService
    ) { }

    getUsers(): Promise<UsersTemp[]> {
        // return (await this.commonService.getRepository('default', UsersTemp)).find()
        return this.usersTempRepository.find({
            relations: ['tokenTemp']
        })
    }

    getUsersPage(current: number = 1, take: number = 100): Promise<UsersTemp[]> {
        // 페이지네이션
        const offset = (current - 1) * take;
        const object: Object = {
            skip: offset,
            take
        }

        // 쿼리 실행
        const users = this.usersTempRepository.find(object);
        // const users = this.usersTempRepository.find({
        //     skip: offset,
        //     take,
        //     // order: {USER_NO: 'ASC'}
        // });
        return users;
    }

    getUser(userNo: number): Promise<UsersTemp> {
        return this.usersTempRepository.findOne({
            comment: "asdasdasd",
            where: { userNo },
            relations: ['tokenTemp'],
            relationLoadStrategy: 'query',
        })
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
            // userNo: userNo.NEXTVAL,
            userEmail: input.userEmail,
            userId: input.userId,
            // userJadate: input.userJadate,
            userName: input.userName,
            userPhone: input.userPhone,
            userPw: input.userPw
        };

        try {
            await this.usersTempRepository.save({ userNo: userNo.NEXTVAL, ...newUser })
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
            const result = await this.usersTempRepository.save(user);

            return { success: true, message: '업데이트 성공', data: result }
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
        // const account = await this.accountRepository.findOneBy({ id: accountId })
        const account = await this.accountService.findOneBy(accountId)
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
