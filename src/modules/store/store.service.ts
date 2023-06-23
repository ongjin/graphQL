import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { StoreSystem } from './entities/store.entity';

@Injectable()
export class StoreService {
  constructor(
    @InjectRepository(StoreSystem) private readonly storeSystemRepository: Repository<StoreSystem>,
  ) { }

  findAll() {
    return `This action returns all store`;
  }

  findOne(msNo: string) {
    return this.storeSystemRepository.findOne({
      where: { msNo }
    })
  }

}
