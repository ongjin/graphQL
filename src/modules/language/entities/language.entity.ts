import { Transform } from 'class-transformer';
import { Entity, Index, Column, PrimaryGeneratedColumn, PrimaryColumn, Unique, ManyToOne, OneToMany, JoinColumn, OneToOne } from 'typeorm';



@Index("LANGMSX0", ["langFg"], { unique: true })
@Entity("LANGMSTB")
export class Langmstb {
    @PrimaryColumn("varchar2", { name: "LANG_FG", length: 3 })
    langFg: string;

    @Column("varchar2", { name: "LANG_NM", length: 30 })
    langNm: string;

    @Column("varchar2", {
        name: "NF_IMG_PATH", nullable: true, length: 100,
        transformer: {
            to(value) {
                return `${value}`
            },
            from(value) {
                return value.replace('/html/httpd/html', '')
            }
        }
    })
    nfImgPath: string | null;

    @Column("varchar2", { name: "NF_IMG_FILE_NM", nullable: true, length: 50 })
    nfImgFileNm: string | null;

    @Column("varchar2", { name: "CREATE_DTIME", length: 14 })
    createDtime: string;

    @Column("varchar2", { name: "CREATE_ID", length: 20 })
    createId: string;

    @Column("varchar2", { name: "LAST_DTIME", length: 14 })
    lastDtime: string;

    @Column("varchar2", { name: "LAST_ID", length: 20 })
    lastId: string;

}

@Index("MLANUSX0", ["msNo", "langFg", "chainNo"], { unique: true })
@Entity("MLANUSTB")
export class Mlanustb {
    @PrimaryColumn("varchar2", { name: "MS_NO", length: 6 })
    msNo: string;

    @PrimaryColumn("varchar2", { name: "CHAIN_NO", length: 4 })
    chainNo: string;

    @PrimaryColumn("varchar2", { name: "LANG_FG", length: 3 })
    langFg: string;

    @Column("varchar2", { name: "CREATE_DTIME", length: 14 })
    createDtime: string;

    @Column("varchar2", { name: "CREATE_ID", length: 20 })
    createId: string;

    @Column("varchar2", { name: "LAST_DTIME", length: 14 })
    lastDtime: string;

    @Column("varchar2", { name: "LAST_ID", length: 20 })
    lastId: string;

    @Column("varchar2", { name: "USE_YN", nullable: true, length: 1 })
    useYn: string | null;

    @OneToOne(() => Langmstb)
    @JoinColumn([
        { name: 'LANG_FG', referencedColumnName: 'langFg' },
    ])
    langmstb: Langmstb

}


@Index("COLANGX0", ["langFg", "langCcd", "langCd"], { unique: true })
@Entity("COLANGTB")
export class Colangtb {
    @PrimaryColumn("varchar2", { name: "LANG_FG", length: 3 })
    langFg: string;

    @PrimaryColumn("varchar2", { name: "LANG_CCD", length: 20 })
    langCcd: string;

    @PrimaryColumn("varchar2", { name: "LANG_CD", length: 20 })
    langCd: string;

    @Column("varchar2", { name: "LANG_NM", length: 30 })
    langNm: string;

    @Column("varchar2", { name: "REMARK", nullable: true, length: 100 })
    remark: string | null;

    @Column("varchar2", { name: "CREATE_DTIME", length: 14 })
    createDtime: string;

    @Column("varchar2", { name: "CREATE_ID", length: 20 })
    createId: string;

    @Column("varchar2", { name: "LAST_DTIME", length: 14 })
    lastDtime: string;

    @Column("varchar2", { name: "LAST_ID", length: 20 })
    lastId: string;
}

@Index("MMLANGX0", ["msNo", "langFg", "langCcd", "langCd", "chainNo"], {
    unique: true,
})
@Entity("MMLANGTB")
export class Mmlangtb {
    @PrimaryColumn("varchar2", { name: "MS_NO", length: 6 })
    msNo: string;

    @PrimaryColumn("varchar2", { name: "CHAIN_NO", length: 4 })
    chainNo: string;

    @PrimaryColumn("varchar2", { name: "LANG_FG", length: 3 })
    langFg: string;

    @PrimaryColumn("varchar2", { name: "LANG_CCD", length: 20 })
    langCcd: string;

    @PrimaryColumn("varchar2", { name: "LANG_CD", length: 20 })
    langCd: string;

    @Column("varchar2", { name: "LANG_NM", length: 30 })
    langNm: string;

    @Column("varchar2", { name: "REMARK", nullable: true, length: 100 })
    remark: string | null;

    @Column("varchar2", { name: "CREATE_DTIME", length: 14 })
    createDtime: string;

    @Column("varchar2", { name: "CREATE_ID", length: 20 })
    createId: string;

    @Column("varchar2", { name: "LAST_DTIME", length: 14 })
    lastDtime: string;

    @Column("varchar2", { name: "LAST_ID", length: 20 })
    lastId: string;
}
