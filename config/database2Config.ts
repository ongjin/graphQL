// database1Config.ts

import { TypeOrmModuleAsyncOptions } from "@nestjs/typeorm";
import { ConfigService } from '@nestjs/config';

import { WEBKIOSK_DB_PORT } from "src/environments";


export default {
    type: 'oracle',
    name: 'webkiosk',
    host: '140.238.21.87',
    port: WEBKIOSK_DB_PORT,
    sid: "xe",
    username: 'neoib',
    password: 'neoib0',
    autoLoadEntities: true,
    dropSchema: false,
    synchronize: false,
    keepConnectionAlive: true,
    logging: true,
} as TypeOrmModuleAsyncOptions;
