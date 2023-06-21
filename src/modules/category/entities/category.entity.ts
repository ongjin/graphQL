import { Column, Entity, Index, PrimaryColumn } from "typeorm";

@Index("MCLSGGX0", ["msNo", "gpluCd", "chainNo"], { unique: true })
@Entity("MCLSGGTB", { orderBy: { gpluCd: 'ASC' } })
export class Category {
    @PrimaryColumn("varchar2", { name: "MS_NO", length: 6 })
    msNo: string;

    @PrimaryColumn("varchar2", { name: "CHAIN_NO", length: 4 })
    chainNo: string;

    @PrimaryColumn("varchar2", { name: "GPLU_CD", length: 2 })
    gpluCd: string;

    @Column("varchar2", { name: "GPLU_NM", length: 20 })
    gpluNm: string;

    @Column("varchar2", { name: "CREATE_DTIME", length: 14 })
    createDtime: string;

    @Column("varchar2", { name: "CREATE_ID", length: 20 })
    createId: string;

    @Column("varchar2", { name: "LAST_DTIME", length: 14 })
    lastDtime: string;

    @Column("varchar2", { name: "LAST_ID", length: 20 })
    lastId: string;
}

