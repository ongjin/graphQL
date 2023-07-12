import { Mmbumstb, Msubmntb, SubMenu } from '../entities/sub-menu.entity';

export interface SubMenuService {
    findAll(): Promise<SubMenu[]>
    findOne(msNo: string): Promise<SubMenu[]>
    findAl(msNo: string): Promise<SubMenu[]>
    findOn(msNo: string): Promise<Mmbumstb[]>
    subMenuDetailFind(msNo: string): Promise<Msubmntb[]>
    subMenuHeaderFind(msNo: string): Promise<Mmbumstb[]>
}

