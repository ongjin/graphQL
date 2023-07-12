import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from './entities/category.entity';
import { Repository, In } from 'typeorm';
import { CategoryService } from './interface/category.service.interface';


@Injectable()
export class CategoryServiceImpl implements CategoryService {
    constructor(
        @InjectRepository(Category) private readonly categoryRepository: Repository<Category>,
    ) { }

    findAll(): Promise<Category[]> {
        return this.categoryRepository.find()
    }

    findWhereAll(msNo: Array<String>): Promise<Category[]> {
        return this.categoryRepository.find({
            where: {
                msNo: In(msNo)
            }
        })

        // const result = this.usersTempRepository.findOne({ where: { USER_NO } })
        // return result

        // return this.usersTempRepository.findOneBy({ USER_NO })
    }

}