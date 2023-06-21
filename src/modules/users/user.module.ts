import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users_TempResolver } from './user.resolver';

import { TokenTb, Users_Temp } from './user.entity';
import { UserService } from './user.service';
import { Account } from '../account';


@Module({
    imports: [
        // TypeOrmModule.forFeature([Users_Temp], 'default'),
        // TypeOrmModule.forFeature([Users_Temp], 'webkiosk'), 
        TypeOrmModule.forFeature([Users_Temp, TokenTb]), 
        TypeOrmModule.forFeature([Account], 'postgre'),
    ],
    providers: [Users_TempResolver, UserService],
})
export class Users_TempsModule { }