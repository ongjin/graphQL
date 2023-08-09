import { Column, Entity, Index, PrimaryColumn, JoinColumn, ManyToOne, OneToOne } from "typeorm";
import { Empinftb } from "./empinftb.entity";
import { Gwgroptb } from "./gwgroptb.entity";
import { Gwsimatb } from "./gwsimatb.entity";
import { Prolmstb } from "./prolmstb.entity";
import { Prommstb } from "./prommstb.entity";
import { Prosmstb } from "./prosmstb.entity";

@Index("GWDLWKX0", ["workDate", "empNo", "seq"], { unique: true })
@Entity("GWDLWKTB")
export class Gwdlwktb {
    @Column("varchar2", { name: "WORK_TYPE", nullable: true, length: 1 })
    workType: string | null;

    @PrimaryColumn("char", { name: "WORK_DATE", length: 8 })
    workDate: string;

    @Column("varchar2", { name: "WORK_CONTENT", nullable: true, length: 1000 })
    workContent: string | null;

    @PrimaryColumn("char", { name: "SEQ", length: 2 })
    seq: string;

    @Column("varchar2", { name: "REQ_NM", length: 30 })
    reqNm: string;

    @Column("varchar2", { name: "REQ_CONTENT", length: 1000 })
    reqContent: string;

    @Column("number", {
        name: "PROC_RATE",
        precision: 4,
        scale: 1,
        default: () => "0",
    })
    procRate: number;

    @Column("char", { name: "PROC_FG", length: 1 })
    procFg: string;

    @Column("varchar2", { name: "PLAN_CONTENT", nullable: true, length: 400 })
    planContent: string | null;

    @Column("varchar2", { name: "M_SUPPORT", nullable: true, length: 1 })
    mSupport: string | null;

    @Column("char", { name: "MENU_GN_1", nullable: true, length: 1 })
    menuGn_1: string | null;

    @Column("char", { name: "MENU_GN", nullable: true, length: 1 })
    menuGn: string | null;

    @Column("number", {
        name: "MAN_DAY",
        precision: 4,
        scale: 3,
        default: () => "0",
    })
    manDay: number;

    @Column("varchar2", { name: "LAST_ID", length: 20 })
    lastId: string;

    @Column("char", { name: "LAST_DTIME", length: 14 })
    lastDtime: string;

    @Column("char", { name: "HPS_CD", nullable: true, length: 4 })
    hpsCd: string | null;

    @Column("char", { name: "HPM_CD", nullable: true, length: 4 })
    hpmCd: string | null;

    @Column("char", { name: "HPL_CD", nullable: true, length: 4 })
    hplCd: string | null;

    @PrimaryColumn("char", { name: "EMP_NO", length: 4 })
    empNo: string;

    @Column("varchar2", { name: "D_SEQ", nullable: true, length: 7 })
    dSeq: string | null;

    @Column("number", {
        name: "CTRT_MD",
        nullable: true,
        precision: 4,
        scale: 3,
        default: () => "0",
    })
    ctrtMd: number | null;

    @Column("varchar2", { name: "CREATE_ID", length: 20 })
    createId: string;

    @Column("char", { name: "CREATE_DTIME", length: 14 })
    createDtime: string;

    @Column("number", {
        name: "CONFIRM_MD",
        precision: 4,
        scale: 3,
        default: () => "0",
    })
    confirmMd: number;

    @Column("char", { name: "CONFIRM_FG", length: 1, default: () => "'0'" })
    confirmFg: string;

    @Column("varchar2", { name: "B_SEQ", nullable: true, length: 7 })
    bSeq: string | null;

    @Column("char", { name: "AS_GROP_CD", length: 4 })
    asGropCd: string;

    @OneToOne(() => Empinftb)
    @JoinColumn(
        { name: "EMP_NO", referencedColumnName: "empNo" }
    )
    empinftb: Promise<Empinftb>

    @OneToOne(() => Gwgroptb)
    @JoinColumn(
        { name: 'AS_GROP_CD', referencedColumnName: "asGropCd" }
    )
    gwgroptb: Promise<Gwgroptb>

    @OneToOne(() => Prolmstb)
    @JoinColumn(
        { name: "HPL_CD", referencedColumnName: "hplCd" }
    )
    prolmstb: Promise<Prolmstb>

    @OneToOne(() => Prommstb)
    @JoinColumn([
        { name: "HPL_CD", referencedColumnName: "hplCd" },
        { name: "HPM_CD", referencedColumnName: "hpmCd" }
    ])
    prommstb: Promise<Prommstb>

    @OneToOne(() => Prosmstb)
    @JoinColumn([
        { name: "HPL_CD", referencedColumnName: "hplCd" },
        { name: "HPM_CD", referencedColumnName: "hpmCd" },
        { name: "HPS_CD", referencedColumnName: "hpsCd" }
    ])
    prosmstb: Promise<Prosmstb>

    @OneToOne(() => Gwsimatb)
    @JoinColumn(
        { name: "D_SEQ", referencedColumnName: "dSeq" }
    )
    gwsimatb: Promise<Gwsimatb>

}
