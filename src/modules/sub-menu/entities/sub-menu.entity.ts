import { Entity, Index, Column, PrimaryGeneratedColumn, PrimaryColumn, Unique, ManyToOne, OneToMany, JoinColumn, OneToOne } from 'typeorm';

@Index("MCLSGSX0", ["msNo", "gpluCd", "pluCd", "goodsCd", "seq", "chainNo"], {
    unique: true,
})
@Entity("MCLSGSTB", { orderBy: { subGroupCd: "ASC", gpluCd: "ASC", pluCd: "ASC", seq: "ASC" } })
export class SubMenu {
    @PrimaryColumn("varchar2", { name: "MS_NO", length: 6 })
    msNo: string;

    @PrimaryColumn("varchar2", { name: "CHAIN_NO", length: 4 })
    chainNo: string;

    @Column("varchar2", { name: "GPLU_CD", length: 2 })
    gpluCd: string;

    @Column("varchar2", { name: "PLU_CD", length: 2 })
    pluCd: string;

    @Column("varchar2", { name: "GOODS_CD", length: 20 })
    goodsCd: string;

    @Column("varchar2", { name: "SEQ", length: 2 })
    seq: string;

    @Column("varchar2", { name: "SUB_GROUP_CD", length: 2 })
    subGroupCd: string;

    @Column("varchar2", { name: "SUB_GROUP_NM", length: 20 })
    subGroupNm: string;

    @Column("varchar2", { name: "SUB_FG", length: 1 })
    subFg: string;

    @Column("number", {
        name: "SUB_GROUP_QTY",
        precision: 2,
        scale: 0,
        default: () => "0",
    })
    subGroupQty: number;

    @Column("varchar2", { name: "SUB_GROUP_GUIDE", nullable: true, length: 100 })
    subGroupGuide: string | null;

    @Column("varchar2", { name: "CREATE_DTIME", length: 14 })
    createDtime: string;

    @Column("varchar2", { name: "CREATE_ID", length: 20 })
    createId: string;

    @Column("varchar2", { name: "LAST_DTIME", length: 14 })
    lastDtime: string;

    @Column("varchar2", { name: "LAST_ID", length: 20 })
    lastId: string;

    @OneToOne(() => Mmbumstb)
    @JoinColumn([
        { name: 'MS_NO', referencedColumnName: 'msNo' },
        { name: 'SUB_GROUP_CD', referencedColumnName: 'subGroupCd' }
    ])
    mmbumstbs: Promise<Mmbumstb>

    @OneToOne(() => Msubmntb)
    @JoinColumn([
        { name: 'MS_NO', referencedColumnName: 'msNo' },
        { name: 'SUB_GROUP_CD', referencedColumnName: 'subGroupCd' }
    ])
    msubmntbs: Promise<Msubmntb>

    // @OneToMany(() => Mmbumstb, res => res.subMenu)
    // mmbumstbs: Promise<Mmbumstb>[]
    // @OneToMany(() => Msubmntb, res => res.subMenu)
    // msubmntbs: Promise<Msubmntb>[]
}




@Index("MMBUMSX0", ["msNo", "subGroupCd"], { unique: true })
@Entity("MMBUMSTB")
export class Mmbumstb {
    @PrimaryColumn("varchar2", { name: "MS_NO", length: 6 })
    msNo: string;

    @PrimaryColumn("varchar2", { name: "SUB_GROUP_CD", length: 2 })
    subGroupCd: string;

    @Column("varchar2", { name: "SUB_GROUP_NM", length: 20 })
    subGroupNm: string;

    @Column("varchar2", { name: "CREATE_FG", length: 1 })
    createFg: string;

    @Column("varchar2", { name: "CREATE_DTIME", length: 14 })
    createDtime: string;

    @Column("varchar2", { name: "CREATE_ID", length: 20 })
    createId: string;

    @Column("varchar2", { name: "LAST_DTIME", length: 14 })
    lastDtime: string;

    @Column("varchar2", { name: "LAST_ID", length: 20 })
    lastId: string;

    // @ManyToOne(() => SubMenu, res => res.mmbumstbs)
    // @JoinColumn([
    //     { name: 'MS_NO', referencedColumnName: 'msNo' },
    //     { name: 'SUB_GROUP_CD', referencedColumnName: 'subGroupCd' }
    // ])
    // subMenu: Promise<SubMenu>

}

@Index("MSUBMNX0", ["msNo", "subGroupCd", "subMenuCd"], { unique: true })
@Entity("MSUBMNTB")
export class Msubmntb {
    @PrimaryColumn("varchar2", { name: "MS_NO", length: 6 })
    msNo: string;

    @PrimaryColumn("varchar2", { name: "SUB_GROUP_CD", length: 2 })
    subGroupCd: string;

    @PrimaryColumn("varchar2", { name: "SUB_MENU_CD", length: 2 })
    subMenuCd: string;

    @Column("varchar2", { name: "SUB_MENU_NM", length: 20 })
    subMenuNm: string;

    @Column("varchar2", { name: "DISPLAY_ORDER", length: 2 })
    displayOrder: string;

    @Column("varchar2", { name: "STOCK_FG", length: 1, default: () => "'0'" })
    stockFg: string;

    @Column("varchar2", { name: "GOODS_CD", nullable: true, length: 20 })
    goodsCd: string | null;

    @Column("number", {
        name: "UPCHARGE_UPRICE",
        precision: 11,
        scale: 2,
        default: () => "0",
    })
    upchargeUprice: number;

    @Column("varchar2", { name: "CREATE_FG", length: 1, default: () => "'0'" })
    createFg: string;

    @Column("varchar2", { name: "CREATE_DTIME", length: 14 })
    createDtime: string;

    @Column("varchar2", { name: "CREATE_ID", length: 20 })
    createId: string;

    @Column("varchar2", { name: "LAST_DTIME", length: 14 })
    lastDtime: string;

    @Column("varchar2", { name: "LAST_ID", length: 20 })
    lastId: string;

    // @OneToOne(() => SubMenu, res => res.msubmntbs)
    // @JoinColumn([
    //     { name: 'MS_NO', referencedColumnName: 'msNo' },
    //     { name: 'SUB_GROUP_CD', referencedColumnName: 'subGroupCd' }
    // ])
    // subMenu: Promise<SubMenu>

    // @ManyToOne(() => SubMenu, res => res.msubmntbs)
    // @JoinColumn([
    //     { name: 'MS_NO', referencedColumnName: 'msNo' },
    //     { name: 'SUB_GROUP_CD', referencedColumnName: 'subGroupCd' }
    // ])
    // subMenu: Promise<SubMenu>

}

