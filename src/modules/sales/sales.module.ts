import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Mgoodstb, SalesDT, SalesHD } from './entities/sales.entity';
import { SalesResolver } from './sales.resolver';

import { SalesServiceImpl } from './sales.service';

@Module({
    imports: [TypeOrmModule.forFeature([SalesHD, SalesDT, Mgoodstb])],
    providers: [
        SalesResolver,
        { provide: 'SalesService', useClass: SalesServiceImpl }
    ],
})
export class SalesModule { }
