import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { StoreSystem } from './entities/store.entity';
import { StoreService } from './interface/store.service.interface';

@Injectable()
export class StoreServiceImpl implements StoreService {
    constructor(
        @InjectRepository(StoreSystem) private readonly storeSystemRepository: Repository<StoreSystem>,
    ) { }

    findAll(): Promise<StoreSystem[]> {
        return this.storeSystemRepository.find()
    }

    findOne(msNo: string): Promise<StoreSystem> {
        return this.storeSystemRepository.findOne({
            where: { msNo }
        })
    }

}
