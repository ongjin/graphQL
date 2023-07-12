import { Module } from '@nestjs/common';
import { CategoryServiceImpl } from './category.service';
import { CategoryResolver } from './category.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from './entities/category.entity';


@Module({
    imports: [
        TypeOrmModule.forFeature([Category])
    ],
    providers: [
        CategoryResolver,
        { provide: 'CategoryService', useClass: CategoryServiceImpl }
    ]
})
export class CategoryModule { }
