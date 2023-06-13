import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Account } from './account.entity';
import { AccountResolver } from './account.resolver';

import { AccountService } from './account.service';

@Module({
    imports: [TypeOrmModule.forFeature([Account], 'postgre')],
    providers: [AccountResolver, AccountService],
})
export class AccountModule { }

