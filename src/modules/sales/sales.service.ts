import { Injectable } from '@nestjs/common';
import { SalesHD, SalesDT } from './sales.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class SalesService {
    constructor(
        @InjectRepository(SalesHD)
        private readonly salesHDRepository: Repository<SalesHD>,
        @InjectRepository(SalesDT)
        private readonly salesDTRepository: Repository<SalesDT>,
    ) { }

    /** 두가지 방법 있음 */
    async getSales(): Promise<SalesHD[]> {
        // const sales = this.salesHDRepository.createQueryBuilder('salesHD')
        //     .leftJoinAndSelect('salesHD.salesDTs', 'salesDTs')
        //     .where('salesHD.SALE_DATE = :saleDate', { saleDate: '20230531' })
        //     .getMany()

        const sales = await this.salesHDRepository.find({
            // where: {
            //     SALE_DATE: '20230531'
            // }
            relations: ['salesDTs'],
        });

        // console.log('길이', sales.length);
        return sales
    }

    async getSalesPage(current: number = 1, limit: number = 100): Promise<SalesHD[]> {
        const offset = (current - 1) * limit;

        const sales = await this.salesHDRepository.find({
            skip: offset,
            take: limit,
            relations: ['salesDTs'],
        });
        console.log('길이', sales.length);
        return sales
    }

}
