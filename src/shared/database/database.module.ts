import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import asp1Config from 'config/asp1Config';

import database1Config from 'config/database1Config';
import database2Config from 'config/database2Config';
import database3Config from 'config/database3Config';

/**
 * @description DB연동 모듈
 */
@Module({
    imports: [
        TypeOrmModule.forRoot(database1Config),
        TypeOrmModule.forRoot(asp1Config),
        TypeOrmModule.forRoot(database2Config),
        TypeOrmModule.forRoot(database3Config),
        // TypeOrmModule.forRoot({
        //     conn
        // })
        // TypeOrmModule.forFeature([])
        // TypeOrmModule.forRoot({
        //     type: 'oracle',
        //     host: '140.238.21.87',
        //     port: 9070,
        //     username: 'neoib',
        //     password: 'neoib0',
        //     sid: "xe",
        //     autoLoadEntities: true,
        //     // entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        //     synchronize: false,
        //     logging: true,
        // }as TypeOrmModuleAsyncOptions),
        // TypeOrmModule.forRootAsync({
        //     name: 'default',
        //     useFactory: async () => {
        //         return database2Config
        //         // return {
        //         //     type: 'oracle',
        //         //     host: '140.238.21.87',
        //         //     port: 9070,
        //         //     sid: "xe",
        //         //     username: 'neoib',
        //         //     password: 'neoib0',
        //         //     // entities: ["dist/**/*.entity{.ts,.js}"],
        //         //     autoLoadEntities: true,
        //         //     dropSchema: false,
        //         //     synchronize: false,
        //         //     keepConnectionAlive: true,
        //         //     logging: true,
        //         //     // entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        //         // } as TypeOrmModuleAsyncOptions;
        //     }
        // }),
    ],
})
export class DatabaseModule { }