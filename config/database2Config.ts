// database1Config.ts

import { TypeOrmModuleAsyncOptions } from "@nestjs/typeorm";

import {
    DB_TYPE,
    WEBKIOSK_DB_HOST,
    WEBKIOSK_DB_NAME,
    WEBKIOSK_DB_PASSWORD,
    WEBKIOSK_DB_PORT,
    WEBKIOSK_DB_SID,
    WEBKIOSK_DB_USERNAME
} from "src/shared/environments";

// `${DB_TYPE}://${WEBKIOSK_DB_USERNAME}:${WEBKIOSK_DB_PASSWORD}@${WEBKIOSK_DB_HOST}:${WEBKIOSK_DB_PORT}/${WEBKIOSK_DB_SID}`

// console.log('WEBKIOSK_DB_HOST', WEBKIOSK_DB_HOST);

export default {
    type: DB_TYPE,
    name: WEBKIOSK_DB_NAME,
    // port: WEBKIOSK_DB_PORT,
    // host: WEBKIOSK_DB_HOST,
    // sid: WEBKIOSK_DB_SID,
    connectString: `${WEBKIOSK_DB_HOST}/${WEBKIOSK_DB_SID}`,
    username: WEBKIOSK_DB_USERNAME,
    password: WEBKIOSK_DB_PASSWORD,
    autoLoadEntities: true,
    dropSchema: false,
    synchronize: false,
    keepConnectionAlive: true,
    // logging: true,
} as TypeOrmModuleAsyncOptions;
