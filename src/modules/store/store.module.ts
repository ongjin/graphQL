import { Module } from '@nestjs/common';
import { StoreServiceImpl } from './store.service';
import { StoreResolver } from './store.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StoreSystem } from './entities/store.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([StoreSystem])
    ],
    providers: [
        StoreResolver,
        { provide: 'StoreService', useClass: StoreServiceImpl }
    ]
})
export class StoreModule { }
