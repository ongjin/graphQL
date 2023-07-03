import { Inject, Injectable } from '@nestjs/common';
import { Account } from './entities/account.entity';
import { Repository, createConnection, Connection } from 'typeorm';
import { InjectRepository, TypeOrmModule } from '@nestjs/typeorm';

@Injectable()
export class AccountService {

    constructor(
        @InjectRepository(Account, 'postgre') private readonly accountRepository: Repository<Account>,
    ) { }

    async getAccounts(): Promise<Account[]> {
        return await this.accountRepository.find()
    }
    

}
