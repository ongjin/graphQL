import { Column, Entity, Index, PrimaryColumn, OneToOne, JoinColumn, OneToMany } from "typeorm";
import { Prommstb } from "./prommstb.entity";

@Index("PROLMSX0", ["hplCd"], { unique: true })
@Entity("PROLMSTB", { orderBy: { hplCd: "ASC" } })
export class Prolmstb {
    @Column("char", { name: "SORT_NO", length: 4, default: () => "'01'" })
    sortNo: string;

    @Column("varchar2", { name: "LAST_ID", length: 20 })
    lastId: string;

    @Column("char", { name: "LAST_DATE", length: 14 })
    lastDate: string;

    @Column("varchar2", { name: "HPL_NM", length: 100 })
    hplNm: string;

    @PrimaryColumn("char", { name: "HPL_CD", length: 4 })
    hplCd: string;

    @Column("varchar2", { name: "CREATE_ID", length: 20 })
    createId: string;

    @Column("char", { name: "CREATE_DATE", length: 14 })
    createDate: string;

    @OneToMany(() => Prommstb, v => v.prolmstb)
    prommstbs: Prommstb[]
}
