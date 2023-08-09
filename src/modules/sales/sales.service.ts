import { Injectable } from '@nestjs/common';
import { Strnhdtb } from './entities/sales.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { SalesService } from './interface/sales.service.interface';

@Injectable()
export class SalesServiceImpl implements SalesService {
    constructor(
        @InjectRepository(Strnhdtb) private readonly salesHDRepository: Repository<Strnhdtb>,
    ) { }

    /** 두가지 방법 있음 */
    getSales(): Promise<Strnhdtb[]> {
        // const sales = this.salesHDRepository.createQueryBuilder('salesHD')
        //     .leftJoinAndSelect('salesHD.salesDTs', 'salesDTs')
        //     .leftJoinAndSelect('salesHD.mgoodstbs', 'mgoodstbs')
        //     .getMany()

        const sales = this.salesHDRepository.find({
            // where: {
            //     SALE_DATE: '20230531'
            // }
            relations: ['strndttbs'],
        });

        // console.log('길이', sales.length);
        return sales
    }
    

    getSalesPage(current: number = 1, limit: number = 100): Promise<Strnhdtb[]> {
        const offset = (current - 1) * limit;

        const sales = this.salesHDRepository.find({
            skip: offset,
            take: limit,
            relations: ['strndttbs'],
        });
        return sales
    }

}
