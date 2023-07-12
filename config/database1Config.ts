// // database1Config.ts

// import { TypeOrmModuleAsyncOptions } from "@nestjs/typeorm";
// import { ConfigService } from '@nestjs/config';

// export default {
//     type: 'oracle',
//     name: 'default',
//     host: '140.238.21.87',
//     port: 9090,
//     sid: "xe",
//     username: 'neoib',
//     password: 'neoib0',
//     database: 'db_01',
//     autoLoadEntities: true,
//     dropSchema: false,
//     synchronize: false,
//     keepConnectionAlive: true,
//     logging: true,
// } as TypeOrmModuleAsyncOptions;


// database1Config.ts

import { TypeOrmModuleAsyncOptions } from "@nestjs/typeorm";

import {
    DB_TYPE,
    SHINSUN_DB_HOST,
    SHINSUN_DB_NAME,
    SHINSUN_DB_PASSWORD,
    SHINSUN_DB_PORT,
    SHINSUN_DB_SID,
    SHINSUN_DB_USERNAME
} from "src/shared/environments";


export default {
    type: DB_TYPE,
    name: SHINSUN_DB_NAME,
    connectString: `${SHINSUN_DB_HOST}/${SHINSUN_DB_SID}`,
    username: SHINSUN_DB_USERNAME,
    password: SHINSUN_DB_PASSWORD,
    autoLoadEntities: true,
    dropSchema: false,
    synchronize: false,
    keepConnectionAlive: true,
    // logging: true,
} as TypeOrmModuleAsyncOptions;
