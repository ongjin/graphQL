import { Inject } from '@nestjs/common';
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Auth, bypassAuth, Role } from 'src/shared';
import { Mmbumstb, Msubmntb, SubMenu } from './entities/sub-menu.entity';
import { SubMenuService } from './interface/sub-menu.service.interface';

@Resolver('SubMenu')
export class SubMenuResolver {
    constructor(
        @Inject('SubMenuService') private readonly subMenuService: SubMenuService
    ) { }

    @Query('subMenu1')
    @bypassAuth(true)
    findAll(): Promise<SubMenu[]> {
        return this.subMenuService.findAll();
    }

    @Query('subMenu1')
    @bypassAuth(true)
    findOne(@Args('msNo') msNo: string): Promise<SubMenu[]> {
        return this.subMenuService.findOne(msNo);
    }

    @Query('subMenu')
    @Auth(...[Role.User, Role.Admin])
    findAl(@Args('msNo') msNo: string): Promise<SubMenu[]> {
        return this.subMenuService.findAl(msNo);
    }

    @Query('subMenu2')
    @bypassAuth(true)
    findOn(@Args('msNo') msNo: string): Promise<Mmbumstb[]> {
        return this.subMenuService.findOn(msNo);
    }

    @Query('subMenuDetail')
    @Auth(...[Role.User, Role.Admin])
    subMenuDetailFind(@Args('msNo') msNo: string): Promise<Msubmntb[]> {
        return this.subMenuService.subMenuDetailFind(msNo);
    }

    @Query('subMenuHeader')
    @Auth(...[Role.User, Role.Admin])
    subMenuHeaderFind(@Args('msNo') msNo: string): Promise<Mmbumstb[]> {
        return this.subMenuService.subMenuHeaderFind(msNo);
    }

}
