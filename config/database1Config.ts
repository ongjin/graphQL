// database1Config.ts

import { TypeOrmModuleAsyncOptions } from "@nestjs/typeorm";

export default {
    type: 'oracle',
    name: 'default',
    host: '140.238.21.87',
    port: 9090,
    sid: "xe",
    username: 'neoib',
    password: 'neoib0',
    database:'db_01',
    autoLoadEntities: true,
    dropSchema: false,
    synchronize: false,
    keepConnectionAlive: true,
    logging: true,
} as TypeOrmModuleAsyncOptions;
