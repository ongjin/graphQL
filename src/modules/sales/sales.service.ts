import { Injectable } from '@nestjs/common';
import { SalesHD, SalesDT } from './sales.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class SalesService {
    constructor(
        @InjectRepository(SalesHD, 'webkiosk')
        private readonly salesHDRepository: Repository<SalesHD>,
        @InjectRepository(SalesDT, 'webkiosk')
        private readonly salesDTRepository: Repository<SalesDT>,
    ) { }

    /** 두가지 방법 있음 */
    async getSales(): Promise<SalesHD[]> {
        const sales = this.salesHDRepository.createQueryBuilder('salesHD')
        .leftJoinAndSelect('salesHD.salesDTs', 'salesDTs')
        .where('salesHD.SALE_DATE = :saleDate', {saleDate: '20230531'})
        .getMany()

        // const sales = this.salesHDRepository.find({
        //     relations: ['salesDTs'],
        //     where: {
        //         SALE_DATE: '20230531'
        //     }
        // })
        return sales
    }

}
