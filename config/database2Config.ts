// database1Config.ts

import { TypeOrmModuleAsyncOptions } from "@nestjs/typeorm";
import { ConfigService } from '@nestjs/config';

import {
    DB_TYPE,
    WEBKIOSK_DB_HOST,
    WEBKIOSK_DB_NAME,
    WEBKIOSK_DB_PASSWORD,
    WEBKIOSK_DB_PORT,
    WEBKIOSK_DB_SID,
    WEBKIOSK_DB_USERNAME
} from "src/shared/environments";


export default {
    type: DB_TYPE,
    name: WEBKIOSK_DB_NAME,
    host: WEBKIOSK_DB_HOST,
    port: WEBKIOSK_DB_PORT,
    sid: WEBKIOSK_DB_SID,
    username: WEBKIOSK_DB_USERNAME,
    password: WEBKIOSK_DB_PASSWORD,
    autoLoadEntities: true,
    dropSchema: false,
    synchronize: false,
    keepConnectionAlive: true,
    logging: true,
} as TypeOrmModuleAsyncOptions;
