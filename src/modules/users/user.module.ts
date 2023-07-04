import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersTempResolver } from './user.resolver';

import { UsersTemp } from './entities/user.entity';
import { UserService } from './user.service';
import { Account } from '../account';
import { TokenTemp } from './entities/token.entity';


@Module({
    imports: [
        // TypeOrmModule.forFeature([UsersTemp], 'default'),
        // TypeOrmModule.forFeature([UsersTemp], 'webkiosk'), 
        TypeOrmModule.forFeature([UsersTemp, TokenTemp]), 
        TypeOrmModule.forFeature([Account], 'postgre'),
    ],
    providers: [UsersTempResolver, UserService],
})
export class UsersTempsModule { }
