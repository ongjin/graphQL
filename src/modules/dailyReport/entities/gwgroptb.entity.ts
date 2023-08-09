import { Column, Entity, Index, PrimaryColumn, JoinColumn, ManyToOne } from "typeorm";

@Index("GWGROPX0", ["asGropCd"], { unique: true })
@Entity("GWGROPTB")
export class Gwgroptb {
    @Column("number", {
        name: "SMS_PRC",
        nullable: true,
        precision: 5,
        scale: 0,
        default: () => "0",
    })
    smsPrc: number | null;

    @Column("number", {
        name: "SMS_FREE_CNT",
        nullable: true,
        precision: 5,
        scale: 0,
        default: () => "0",
    })
    smsFreeCnt: number | null;
    

    @Column("varchar2", { name: "SI_APPLY_DATE", nullable: true, length: 8 })
    siApplyDate: string | null;

    @Column("varchar2", { name: "REMARK", nullable: true, length: 100 })
    remark: string | null;

    @Column("char", { name: "MA_FG", nullable: true, length: 4 })
    maFg: string | null;

    @Column("varchar2", { name: "LAST_ID", nullable: true, length: 20 })
    lastId: string | null;

    @Column("char", { name: "LAST_DATE", nullable: true, length: 14 })
    lastDate: string | null;

    @Column("varchar2", { name: "GROP_ORDER", nullable: true, length: 2 })
    gropOrder: string | null;

    @Column("char", {
        name: "DL_YN",
        nullable: true,
        length: 1,
        default: () => "'N'",
    })
    dlYn: string | null;

    @Column("varchar2", { name: "DL_DATE", nullable: true, length: 8 })
    dlDate: string | null;

    @Column("varchar2", { name: "CREATE_ID", nullable: true, length: 20 })
    createId: string | null;

    @Column("char", { name: "CREATE_DATE", nullable: true, length: 14 })
    createDate: string | null;

    @Column("char", { name: "AS_SHOW_FG", length: 1, default: () => "'Y'" })
    asShowFg: string;

    @Column("char", { name: "AS_ORD_YN", length: 1, default: () => "'A'" })
    asOrdYn: string;

    @Column("varchar2", { name: "AS_GROP_NM", length: 30 })
    asGropNm: string;

    @Column("varchar2", { name: "AS_GROP_ID", nullable: true, length: 8 })
    asGropId: string | null;

    @PrimaryColumn("char", { name: "AS_GROP_CD", length: 4 })
    asGropCd: string;
}

