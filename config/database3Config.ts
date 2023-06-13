// database1Config.ts

import { TypeOrmModuleAsyncOptions } from "@nestjs/typeorm";

import {
    POSTGRES_DB_DATABASE,
    POSTGRES_DB_HOST,
    POSTGRES_DB_NAME,
    POSTGRES_DB_PASSWORD,
    POSTGRES_DB_PORT,
    POSTGRES_DB_TYPE,
    POSTGRES_DB_USERNAME,
} from "src/shared/environments";

// `${DB_TYPE}://${WEBKIOSK_DB_USERNAME}:${WEBKIOSK_DB_PASSWORD}@${WEBKIOSK_DB_HOST}:${WEBKIOSK_DB_PORT}/${WEBKIOSK_DB_SID}`

// console.log('WEBKIOSK_DB_HOST', WEBKIOSK_DB_HOST);

export default {
    type: POSTGRES_DB_TYPE,
    name: POSTGRES_DB_NAME,
    host: POSTGRES_DB_HOST,
    port: POSTGRES_DB_PORT,
    // sid: WEBKIOSK_DB_SID,
    // connectString: `${WEBKIOSK_DB_HOST}/${WEBKIOSK_DB_SID}`,
    username: POSTGRES_DB_USERNAME,
    password: POSTGRES_DB_PASSWORD,
    database: POSTGRES_DB_DATABASE,

    autoLoadEntities: true,
    dropSchema: false,
    synchronize: false,
    keepConnectionAlive: true,
    logging: true,
} as TypeOrmModuleAsyncOptions;
