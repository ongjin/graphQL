
import { TypeOrmModuleAsyncOptions } from "@nestjs/typeorm";

import {
    DB_TYPE,
    ASP1_DB_PORT,
    ASP1_DB_NAME,
    ASP1_DB_HOST,
    ASP1_DB_SID,
    ASP1_DB_USERNAME,
    ASP1_DB_PASSWORD,
} from "src/shared/environments";


export default {
    type: DB_TYPE,
    name: ASP1_DB_NAME,
    connectString: `${ASP1_DB_HOST}/${ASP1_DB_SID}`,
    username: ASP1_DB_USERNAME,
    password: ASP1_DB_PASSWORD,
    autoLoadEntities: true,
    dropSchema: false,
    synchronize: false,
    keepConnectionAlive: true,
    // logging: true,
} as TypeOrmModuleAsyncOptions;
