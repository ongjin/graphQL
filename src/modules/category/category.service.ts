import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from './entities/category.entity';
import { Repository, In } from 'typeorm';


@Injectable()
export class CategoryService {
    constructor(
        @InjectRepository(Category) private readonly categoryRepository: Repository<Category>,
    ) { }

    findAll() {
        return this.categoryRepository.find()
    }

    findWhereAll(msNo: Array<String>) {
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