import { Column, Entity, Index, PrimaryColumn, OneToOne, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import { Prolmstb } from "./prolmstb.entity";
import { Prosmstb } from "./prosmstb.entity";

@Index("PROMMSX0", ["hplCd", "hpmCd"], { unique: true })
@Entity("PROMMSTB", { orderBy: { hplCd: "ASC", hpmCd: "ASC" } })
export class Prommstb {
    @Column("char", { name: "SORT_NO", length: 4, default: () => "'01'" })
    sortNo: string;

    @Column("varchar2", { name: "LAST_ID", length: 20 })
    lastId: string;

    @Column("char", { name: "LAST_DATE", length: 14 })
    lastDate: string;

    @Column("varchar2", { name: "HPM_NM", length: 100 })
    hpmNm: string;

    @PrimaryColumn("char", { name: "HPM_CD", length: 4 })
    hpmCd: string;

    @PrimaryColumn("char", { name: "HPL_CD", length: 4 })
    hplCd: string;

    @Column("varchar2", { name: "CREATE_ID", length: 20 })
    createId: string;

    @Column("char", { name: "CREATE_DATE", length: 14 })
    createDate: string;


    @ManyToOne(() => Prolmstb, v => v.prommstbs)
    @JoinColumn([
        { name: 'HPL_CD', referencedColumnName: 'hplCd' },
    ])
    prolmstb: Prolmstb

    @OneToMany(() => Prosmstb, prosmstb => prosmstb.prommstb)
    prosmstbs: Promise<Prosmstb[]>
}
