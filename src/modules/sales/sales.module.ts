import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SalesDT, SalesHD } from './sales.entity';
import { SalesResolver } from './sales.resolver';

import { SalesService } from './sales.service';

@Module({
    imports: [TypeOrmModule.forFeature([SalesHD, SalesDT])],
    providers: [SalesResolver, SalesService],
})
export class SalesModule { }
