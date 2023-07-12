import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Mmbumstb, Msubmntb, SubMenu } from './entities/sub-menu.entity';
import { Repository } from 'typeorm';
import { SubMenuService } from './interface/sub-menu.service.interface';

@Injectable()
export class SubMenuServiceImpl implements SubMenuService {
    constructor(
        @InjectRepository(SubMenu) private readonly subMenuRepository: Repository<SubMenu>,
        @InjectRepository(Mmbumstb) private readonly mmbumstbRepository: Repository<Mmbumstb>,
        @InjectRepository(Msubmntb) private readonly msubmntbRepository: Repository<Msubmntb>,
    ) { }

    findAll(): Promise<SubMenu[]> {
        return this.subMenuRepository.find()
    }

    findOne(msNo: string): Promise<SubMenu[]> {
        return this.subMenuRepository.find({ where: { msNo } })
    }

    findAl(msNo: string): Promise<SubMenu[]> {
        const queryBuilder = this.subMenuRepository
            .createQueryBuilder()
            // .select('D.GPLU_CD, D.PLU_CD, D.GOODS_CD, D.SEQ, D.SUB_GROUP_CD, D.SUB_GROUP_NM, D.SUB_FG, D.SUB_GROUP_QTY, D.SUB_GROUP_GUIDE')
            .select('D.GPLU_CD as "gpluCd", D.PLU_CD as "pluCd", D.GOODS_CD as "goodsCd", D.SEQ as "seq", D.SUB_GROUP_CD as "subGroupCd",' +
                ' D.SUB_GROUP_NM as "subGroupNm", D.SUB_FG as "subFg", D.SUB_GROUP_QTY as "subGroupQty", D.SUB_GROUP_GUIDE as "subGroupGuide"')
            .from(SubMenu, 'D')
            .leftJoin(Mmbumstb, 'A', 'A.MS_NO = D.MS_NO AND A.SUB_GROUP_CD = D.SUB_GROUP_CD')
            .leftJoin(Msubmntb, 'M', 'M.MS_NO = D.MS_NO AND M.SUB_GROUP_CD = D.SUB_GROUP_CD')
            .where('D.MS_NO = :msNo', { msNo })
            .andWhere('M.SUB_MENU_CD IS NOT NULL')
            .orderBy('D.SUB_GROUP_CD, D.GPLU_CD, D.PLU_CD, D.SEQ')
            .groupBy('D.GPLU_CD, D.PLU_CD, D.GOODS_CD, D.SEQ, D.SUB_GROUP_CD, D.SUB_GROUP_NM, D.SUB_FG, D.SUB_GROUP_QTY, D.SUB_GROUP_GUIDE')
        // .getRawMany()
        // .execute()

        return queryBuilder.getRawMany()
        // return this.mmbumstbRepository.find({
        //   relations: ['msubmntbs'],

        // })
        // return this.mmbumstbRepository.find()
    }


    findOn(msNo: string): Promise<Mmbumstb[]> {
        return this.mmbumstbRepository.find({ where: { msNo } })
    }

    async subMenuDetailFind(msNo: string): Promise<Msubmntb[]> {
        const result = await this.msubmntbRepository.find({
            where: { msNo }
        })

        result.map(res => {
            res['DC_UPRICE'] = '0'
            res['DC_DETAIL'] = '0'
            res['DC_FLAG'] = 'N'
        })

        return result
    }

    subMenuHeaderFind(msNo: string): Promise<Mmbumstb[]> {
        const result = this.mmbumstbRepository.find({
            where: { msNo }
        })

        return result
    }
}
