import { Mmbumstb, Msubmntb, SubMenu } from '../entities/sub-menu.entity';

export interface SubMenuService {
    subMenu(msNo: string): Promise<SubMenu[]>
    mmbumstb(msNo: string): Promise<Mmbumstb[]>
    subMenuDetail(msNo: string): Promise<Msubmntb[]>
    subMenuHeader(msNo: string): Promise<Mmbumstb[]>
}

