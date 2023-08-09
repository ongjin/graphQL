import { Column, Entity, Index, PrimaryColumn, JoinColumn, ManyToOne } from "typeorm";

@Index("BUGPCHX0", ["bugSeq"], { unique: true })
@Entity("BUGPCHTB")
export class Bugpchtb {
    @Column("char", { name: "WEB_FG", length: 1, default: () => "'0'" })
    webFg: string;

    @Column("char", { name: "TRANS_FG", length: 1, default: () => "'0'" })
    transFg: string;

    @Column("char", { name: "SVR_FG", length: 1, default: () => "'0'" })
    svrFg: string;

    @Column("varchar2", { name: "REMARK", nullable: true, length: 1000 })
    remark: string | null;

    @Column("char", { name: "POS_FG", length: 1, default: () => "'0'" })
    posFg: string;

    @Column("char", { name: "NOTE_FG", length: 1, default: () => "'N'" })
    noteFg: string;

    @Column("char", { name: "MS_GROUP", length: 4 })
    msGroup: string;

    @Column("char", { name: "LIMIT_DATE", nullable: true, length: 8 })
    limitDate: string | null;

    @Column("char", { name: "DISCOVERY_DATE", nullable: true, length: 8 })
    discoveryDate: string | null;

    @Column("char", { name: "CREATE_TIME", length: 6 })
    createTime: string;

    @Column("char", { name: "CREATE_EMP_NO", length: 4 })
    createEmpNo: string;

    @Column("char", { name: "CREATE_DATE", length: 8 })
    createDate: string;

    @Column("char", { name: "COMPLETE_DATE", nullable: true, length: 8 })
    completeDate: string | null;

    @Column("varchar2", { name: "B_SEQ", nullable: true, length: 7 })
    bSeq: string | null;

    @PrimaryColumn("char", { name: "BUG_SEQ", length: 6 })
    bugSeq: string;

    @Column("varchar2", { name: "BUG_NAME", length: 1000 })
    bugName: string;

    @Column("varchar2", { name: "BUG_DETAIL", length: 4000 })
    bugDetail: string;

    @Column("char", { name: "APPR_FG", length: 1, default: () => "'0'" })
    apprFg: string;
}