import { Inject } from '@nestjs/common';
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Auth, bypassAuth, Role } from 'src/shared';
import { Mmbumstb, Msubmntb, SubMenu } from './entities/sub-menu.entity';
import { SubMenuService } from './interface/sub-menu.service.interface';

@Resolver()
export class SubMenuResolver {
    constructor(
        @Inject('SubMenuService') private readonly subMenuService: SubMenuService
    ) { }

    @Query(() => [SubMenu], { name: 'subMenu' })
    @Auth(...[Role.User, Role.Admin])
    subMenu(@Args('msNo') msNo: string): Promise<SubMenu[]> {
        return this.subMenuService.subMenu(msNo);
    }

    @Query(() => [Mmbumstb], { name: 'subMenu2' })
    @bypassAuth(true)
    mmbumstb(@Args('msNo') msNo: string): Promise<Mmbumstb[]> {
        return this.subMenuService.mmbumstb(msNo);
    }

    @Query(() => [Msubmntb], { name: 'subMenuDetail' })
    @Auth(...[Role.User, Role.Admin])
    subMenuDetail(@Args('msNo') msNo: string): Promise<Msubmntb[]> {
        return this.subMenuService.subMenuDetail(msNo);
    }

    @Query(() => [Mmbumstb], { name: 'subMenuHeader' })
    @Auth(...[Role.User, Role.Admin])
    subMenuHeader(@Args('msNo') msNo: string): Promise<Mmbumstb[]> {
        return this.subMenuService.subMenuHeader(msNo);
    }

}
