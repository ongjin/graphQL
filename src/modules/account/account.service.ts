import { Inject, Injectable } from '@nestjs/common';
import { Account } from './entities/account.entity';
import { Repository, createConnection, Connection } from 'typeorm';
import { InjectRepository, TypeOrmModule } from '@nestjs/typeorm';
import { AccountService } from './interface/account.service.interface';

@Injectable()
export class AccountServiceImpl implements AccountService {

    constructor(
        @InjectRepository(Account, 'postgre') private readonly accountRepository: Repository<Account>,
    ) { }

    getAccounts(): Promise<Account[]> {
        return this.accountRepository.find()
    }


}
