import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Account } from './entities/account.entity';
import { AccountResolver } from './account.resolver';

import { AccountServiceImpl } from './account.service';

@Module({
    imports: [TypeOrmModule.forFeature([Account], 'postgre')],
    providers: [
        AccountResolver,
        { provide: 'AccountService', useClass: AccountServiceImpl }
    ],
})
export class AccountModule { }

