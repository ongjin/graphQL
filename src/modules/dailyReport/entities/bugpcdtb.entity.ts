import { Column, Entity, Index, PrimaryColumn, JoinColumn, ManyToOne } from "typeorm";

@Index("BUGPCDX0", ["bugSeq", "slipNo", "transEmpNo"], { unique: true })
@Entity("BUGPCDTB")
export class Bugpcdtb {
    @Column("number", { name: "TRANS_JOB_RATE", precision: 3, scale: 0 })
    transJobRate: number;

    @Column("char", { name: "TRANS_FG", length: 1 })
    transFg: string;

    @PrimaryColumn("char", { name: "TRANS_EMP_NO", length: 4 })
    transEmpNo: string;

    @PrimaryColumn("char", { name: "SLIP_NO", length: 2 })
    slipNo: string;

    @Column("varchar2", { name: "RESULT", length: 2000 })
    result: string;

    @Column("varchar2", { name: "REMARK", nullable: true, length: 1000 })
    remark: string | null;

    @Column("char", { name: "MOVE_EMP_NO", nullable: true, length: 4 })
    moveEmpNo: string | null;

    @Column("varchar2", { name: "LAST_ID", nullable: true, length: 8 })
    lastId: string | null;

    @Column("char", { name: "LAST_DATE", nullable: true, length: 8 })
    lastDate: string | null;

    @Column("char", { name: "END_DATE", nullable: true, length: 8 })
    endDate: string | null;

    @Column("char", { name: "CREATE_EMP_NO", length: 4 })
    createEmpNo: string;

    @Column("char", { name: "CREATE_DATE", length: 8 })
    createDate: string;

    @PrimaryColumn("char", { name: "BUG_SEQ", length: 6 })
    bugSeq: string;

    @Column("char", { name: "APPR_FG", length: 1 })
    apprFg: string;
}



