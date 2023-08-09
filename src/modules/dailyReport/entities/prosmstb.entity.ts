import { Column, Entity, Index, PrimaryColumn, JoinColumn, ManyToOne } from "typeorm";
import { Prolmstb } from "./prolmstb.entity";
import { Prommstb } from "./prommstb.entity";

@Index("PROSMSX0", ["hplCd", "hpmCd", "hpsCd"], { unique: true })
@Entity("PROSMSTB", { orderBy: { hplCd: "ASC", hpmCd: "ASC", hpsCd: "ASC" } })
export class Prosmstb {
    @Column("varchar2", { name: "SUNDAY_FG", length: 1, default: () => "'0'" })
    sundayFg: string;

    @Column("char", { name: "SORT_NO", length: 4, default: () => "'01'" })
    sortNo: string;

    @Column("varchar2", { name: "LAST_ID", length: 20 })
    lastId: string;

    @Column("char", { name: "LAST_DATE", length: 14 })
    lastDate: string;

    @Column("varchar2", { name: "HPS_NM", length: 100 })
    hpsNm: string;

    @PrimaryColumn("char", { name: "HPS_CD", length: 4 })
    hpsCd: string;

    @PrimaryColumn("char", { name: "HPM_CD", length: 4 })
    hpmCd: string;

    @PrimaryColumn("char", { name: "HPL_CD", length: 4 })
    hplCd: string;

    @Column("varchar2", { name: "CREATE_ID", length: 20 })
    createId: string;

    @Column("char", { name: "CREATE_DATE", length: 14 })
    createDate: string;

    @ManyToOne(() => Prommstb, prommstb => prommstb.prosmstbs)
    @JoinColumn([
        { name: 'HPL_CD', referencedColumnName: 'hplCd' },
        { name: 'HPM_CD', referencedColumnName: 'hpmCd' }
    ])
    prommstb: Prommstb
}

