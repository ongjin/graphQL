import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersResolver } from './user.resolver';

import { UsersTemp } from './entities/user.entity';
import { UserServiceImpl } from './user.service';
import { AccountModule } from '../account';
import { TokenTemp } from './entities/token.entity';

@Module({
    imports: [
        // TypeOrmModule.forFeature([UsersTemp], 'default'),
        // TypeOrmModule.forFeature([UsersTemp], 'webkiosk'), 
        TypeOrmModule.forFeature([UsersTemp, TokenTemp]),
        // TypeOrmModule.forFeature([Account], 'postgre'),
        AccountModule,
    ],
    providers: [
        { provide: UsersResolver, useClass: UsersResolver },
        { provide: 'UserService', useClass: UserServiceImpl },
    ],
})
export class UsersTempsModule { }
