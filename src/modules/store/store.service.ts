import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { StoreSystem } from './entities/store.entity';

@Injectable()
export class StoreService {
  constructor(
    @InjectRepository(StoreSystem) private readonly storeSystemRepository: Repository<StoreSystem>,
  ) { }

  findOne(msNo: string): Promise<StoreSystem> {
    return this.storeSystemRepository.findOne({
      where: { msNo }
    })
  }

}
