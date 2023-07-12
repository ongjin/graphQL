import { Injectable } from '@nestjs/common';
import { SalesHD, SalesDT } from './entities/sales.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { SalesService } from './interface/sales.service.interface';

@Injectable()
export class SalesServiceImpl implements SalesService {
    constructor(
        @InjectRepository(SalesHD) private readonly salesHDRepository: Repository<SalesHD>,
    ) { }

    /** 두가지 방법 있음 */
    getSales(): Promise<SalesHD[]> {
        // const sales = this.salesHDRepository.createQueryBuilder('salesHD')
        //     .leftJoinAndSelect('salesHD.salesDTs', 'salesDTs')
        //     .leftJoinAndSelect('salesHD.mgoodstbs', 'mgoodstbs')
        //     .getMany()

        const sales = this.salesHDRepository.find({
            // where: {
            //     SALE_DATE: '20230531'
            // }
            relations: ['salesDTs'],
        });

        // console.log('길이', sales.length);
        return sales
    }
    

    getSalesPage(current: number = 1, limit: number = 100): Promise<SalesHD[]> {
        const offset = (current - 1) * limit;

        const sales = this.salesHDRepository.find({
            skip: offset,
            take: limit,
            relations: ['salesDTs'],
        });
        return sales
    }

}
