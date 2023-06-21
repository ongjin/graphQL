import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Mmbumstb, Msubmntb, SubMenu } from './entities/sub-menu.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SubMenuService {
    constructor(
        @InjectRepository(SubMenu) private readonly subMenuRepository: Repository<SubMenu>,
        @InjectRepository(Mmbumstb) private readonly mmbumstbRepository: Repository<Mmbumstb>,
        @InjectRepository(Msubmntb) private readonly msubmntbRepository: Repository<Msubmntb>,
    ) { }

    findAll() {
        return this.subMenuRepository.find()
    }

    findOne(msNo: string) {
        return this.subMenuRepository.find({ where: { msNo } })
    }

    async findAl(msNo: string) {
        const queryBuilder = this.subMenuRepository
            .createQueryBuilder()
            .select('D.GPLU_CD, D.PLU_CD, D.GOODS_CD, D.SEQ, D.SUB_GROUP_CD, D.SUB_GROUP_NM, D.SUB_FG, D.SUB_GROUP_QTY, D.SUB_GROUP_GUIDE')
            .from(SubMenu, 'D')
            .leftJoin(Mmbumstb, 'A', 'A.MS_NO = D.MS_NO AND A.SUB_GROUP_CD = D.SUB_GROUP_CD')
            .leftJoin(Msubmntb, 'M', 'M.MS_NO = D.MS_NO AND M.SUB_GROUP_CD = D.SUB_GROUP_CD')
            .where('D.MS_NO = :msNo', { msNo })
            .andWhere('M.SUB_MENU_CD IS NOT NULL')
            .orderBy('D.SUB_GROUP_CD, D.GPLU_CD, D.PLU_CD, D.SEQ')
            .groupBy('D.GPLU_CD, D.PLU_CD, D.GOODS_CD, D.SEQ, D.SUB_GROUP_CD, D.SUB_GROUP_NM, D.SUB_FG, D.SUB_GROUP_QTY, D.SUB_GROUP_GUIDE')
        // .getRawMany()
        // .execute()

        return await queryBuilder.getRawMany()
        // return this.mmbumstbRepository.find({
        //   relations: ['msubmntbs'],

        // })
        // return this.mmbumstbRepository.find()
    }


    findOn(msNo: string) {
        return this.mmbumstbRepository.find({ where: { msNo } })
    }
}
 