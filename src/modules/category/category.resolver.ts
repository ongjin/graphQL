import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Auth, Role } from 'src/shared';
import { CategoryService } from './category.service';
import { Category } from './entities/category.entity';

@Resolver('Category')
export class CategoryResolver {
    constructor(private readonly categoryService: CategoryService) { }


    @Query('category')
    @Auth(...[Role.User, Role.Admin])
    findAll() {
        return this.categoryService.findAll();
    }

    @Query('category')
    @Auth(...[Role.User, Role.Admin])
    findWhereAll(@Args('msNo') msNo: Array<String>) {
        return this.categoryService.findWhereAll(msNo);
    }

}
