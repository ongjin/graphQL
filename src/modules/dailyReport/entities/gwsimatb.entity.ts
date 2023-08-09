import { Column, Entity, Index, PrimaryColumn, JoinColumn, ManyToOne } from "typeorm";

@Index("GWSIMAX0", ["seq"], { unique: true })
@Entity("GWSIMATB")
export class Gwsimatb {
    @Column("varchar2", { name: "TAKE_CONTENT", nullable: true, length: 4000 })
    takeContent: string | null;

    @Column("varchar2", { name: "SYMPTOM_CONTENT", nullable: true, length: 4000 })
    symptomContent: string | null;

    @Column("varchar2", {
        name: "SI_VIEW_YN",
        nullable: true,
        length: 1,
        default: () => "'Y'",
    })
    siViewYn: string | null;

    @PrimaryColumn("number", { name: "SEQ", precision: 10, scale: 0 })
    seq: number;

    @Column("char", { name: "RECEIVE_NM", length: 10 })
    receiveNm: string;

    @Column("char", { name: "RECEIVE_DATE", length: 8 })
    receiveDate: string;

    @Column("char", { name: "PROC_FG", length: 1 })
    procFg: string;

    @Column("char", { name: "PAY_FG", length: 1 })
    payFg: string;

    @Column("varchar2", {
        name: "M_TENANCE_YN",
        nullable: true,
        length: 1,
        default: () => "'Y'",
    })
    mTenanceYn: string | null;

    @Column("varchar2", {
        name: "M_SR_YN",
        nullable: true,
        length: 1,
        default: () => "'N'",
    })
    mSrYn: string | null;

    @Column("varchar2", { name: "MODIFY_CONTENT", nullable: true, length: 4000 })
    modifyContent: string | null;

    @Column("varchar2", { name: "MA_YN", nullable: true, length: 1 })
    maYn: string | null;

    @Column("char", { name: "MANDAY", length: 3 })
    // @Column("number", {
    //     name: "MAN_DAY",
    //     precision: 4,
    //     scale: 3,
    //     default: () => "0",
    // })
    manDay: number;

    @Column("varchar2", { name: "LAST_ID", length: 20 })
    lastId: string;

    @Column("char", { name: "LAST_DATE", length: 14 })
    lastDate: string;

    @Column("char", { name: "HPS_CD", nullable: true, length: 4 })
    hpsCd: string | null;

    @Column("char", { name: "HPM_CD", nullable: true, length: 4 })
    hpmCd: string | null;

    @Column("char", { name: "HPL_CD", nullable: true, length: 4 })
    hplCd: string | null;

    @Column("char", { name: "HANDLING_NM3", nullable: true, length: 10 })
    handlingNm3: string | null;

    @Column("char", { name: "HANDLING_NM2", nullable: true, length: 10 })
    handlingNm2: string | null;

    @Column("char", { name: "HANDLING_NM", length: 10 })
    handlingNm: string;

    @Column("varchar2", { name: "HANDLING_EMP_NO", nullable: true, length: 4 })
    handlingEmpNo: string | null;

    @Column("char", { name: "HANDLING_DATE", length: 8 })
    handlingDate: string;

    @Column("varchar2", {
        name: "HANDLING_CONTENT",
        nullable: true,
        length: 2000,
    })
    handlingContent: string | null;

    @Column("varchar2", { name: "D_SEQ", nullable: true, length: 7 })
    dSeq: string | null;

    @Column("number", {
        name: "DEV_COST",
        nullable: true,
        precision: 11,
        scale: 2,
    })
    devCost: number | null;

    @Column("varchar2", { name: "CREATE_ID", length: 20 })
    createId: string;

    @Column("char", { name: "CREATE_DATE", length: 14 })
    createDate: string;

    @Column("varchar2", { name: "CLIENT_TEL", nullable: true, length: 20 })
    clientTel: string | null;

    @Column("varchar2", { name: "CLIENT_NM", length: 100 })
    clientNm: string;

    @Column("varchar2", { name: "CLIENT_CONTENT", length: 1000 })
    clientContent: string;

    @Column("varchar2", { name: "CAUSE_CONTENT", nullable: true, length: 4000 })
    causeContent: string | null;

    @Column("varchar2", { name: "BUSINESS_FG", nullable: true, length: 2 })
    businessFg: string | null;

    @Column("char", { name: "AS_GROP_CD", length: 4 })
    asGropCd: string;
}
