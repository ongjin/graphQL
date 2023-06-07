// database1Config.ts

import { TypeOrmModuleAsyncOptions } from "@nestjs/typeorm";

export default {
    type: 'oracle',
    name: 'webkiosk',
    host: '140.238.21.87',
    port: 9070,
    sid: "xe",
    username: 'neoib',
    password: 'neoib0',
    autoLoadEntities: true,
    dropSchema: false,
    synchronize: false,
    keepConnectionAlive: true,
    logging: true,
} as TypeOrmModuleAsyncOptions;
