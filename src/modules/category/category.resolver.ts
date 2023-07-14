import { Inject } from '@nestjs/common';
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Auth, Role } from 'src/shared';
import { Category } from './entities/category.entity';
import { CategoryService } from './interface/category.service.interface';

@Resolver('Category')
export class CategoryResolver {
    constructor(
        @Inject('CategoryService') private readonly categoryService: CategoryService
    ) { }

    @Query(() => [Category], { name: 'categorys' })
    @Auth(...[Role.User, Role.Admin])
    // @CacheResult()
    categorys(@Args('msNo') msNo: Array<String>): Promise<Category[]> {
        return this.categoryService.categorys(msNo);
    }

}
