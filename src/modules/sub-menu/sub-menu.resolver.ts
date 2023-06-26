import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Auth, bypassAuth, Role } from 'src/shared';
import { Mmbumstb, SubMenu } from './entities/sub-menu.entity';
import { SubMenuService } from './sub-menu.service';

@Resolver('SubMenu')
export class SubMenuResolver {
    constructor(private readonly subMenuService: SubMenuService) { }

    @Query('subMenu1')
    @bypassAuth(true)
    findAll() {
        return this.subMenuService.findAll();
    }

    @Query('subMenu1')
    @bypassAuth(true)
    findOne(@Args('msNo') msNo: string) {
        return this.subMenuService.findOne(msNo);
    }

    @Query('subMenu')
    @Auth(...[Role.User, Role.Admin])
    findAl(@Args('msNo') msNo: string) {
        return this.subMenuService.findAl(msNo);
    }

    @Query('subMenu2')
    @bypassAuth(true)
    findOn(@Args('msNo') msNo: string) {
        return this.subMenuService.findOn(msNo);
    }

    @Query('subMenuDetail')
    @Auth(...[Role.User, Role.Admin])
    subMenuDetailFind(@Args('msNo') msNo: string) {
        return this.subMenuService.subMenuDetailFind(msNo);
    }

    @Query('subMenuHeader')
    @Auth(...[Role.User, Role.Admin])
    subMenuHeaderFind(@Args('msNo') msNo: string) {
        return this.subMenuService.subMenuHeaderFind(msNo);
    }

}
