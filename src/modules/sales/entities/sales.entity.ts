import { Index, Entity, Column, JoinTable, PrimaryColumn, Unique, ManyToOne, OneToMany, JoinColumn, OneToOne } from 'typeorm';

@Index("STRNHDX0", ["saleDate", "msNo", "posNo", "billNo"], { unique: true })
@Index("STRNHDX1", ["saleDate", "chainNo"], {})
@Index("STRNHDX3", ["saleDate", "chainNo", "msNo", "custNo"], {})
@Entity("STRNHDTB")
export class Strnhdtb {
    @Column("char", { name: "FORDER_EMPID", nullable: true, length: 4 })
    forderEmpid: string;

    @Column("number", {
        name: "CUST_DC_AMT",
        nullable: true,
        precision: 9,
        scale: 0,
        default: () => "0",
    })
    custDcAmt: number;

    @Column("number", {
        name: "COUPON_DC_AMT",
        nullable: true,
        precision: 9,
        scale: 0,
        default: () => "0",
    })
    couponDcAmt: number;

    @Column("number", {
        name: "CARD_DC_AMT",
        nullable: true,
        precision: 9,
        scale: 0,
        default: () => "0",
    })
    cardDcAmt: number;

    @Column("number", {
        name: "SERVICE_DC_AMT",
        nullable: true,
        precision: 9,
        scale: 0,
        default: () => "0",
    })
    serviceDcAmt: number;

    @Column("number", {
        name: "NORM_DC_AMT",
        nullable: true,
        precision: 9,
        scale: 0,
        default: () => "0",
    })
    normDcAmt: number;

    @Column("number", {
        name: "POINT_AMT",
        nullable: true,
        precision: 9,
        scale: 0,
        default: () => "0",
    })
    pointAmt: number;

    @Column("number", {
        name: "GIFT_AMT",
        nullable: true,
        precision: 9,
        scale: 0,
        default: () => "0",
    })
    giftAmt: number;

    @Column("number", {
        name: "VAT_AMT",
        nullable: true,
        precision: 9,
        scale: 0,
        default: () => "0",
    })
    vatAmt: number;

    @Column("number", {
        name: "FOREIGN",
        precision: 3,
        scale: 0,
        default: () => "0",
    })
    foreign: number;

    @Column("number", {
        name: "NATION",
        precision: 3,
        scale: 0,
        default: () => "0",
    })
    nation: number;

    @Column("char", { name: "EMP_ID", nullable: true, length: 4 })
    empId: string;

    @Column("char", { name: "TABLE_NO", length: 3, default: () => "'000'" })
    tableNo: string;

    @Column("char", { name: "GROUP_ID", length: 1, default: () => "'0'" })
    groupId: string;

    @Column("char", { name: "FIRST_FG", length: 1, default: () => "'0'" })
    firstFg: string;

    @Column("number", {
        name: "USE_POINT",
        nullable: true,
        precision: 7,
        scale: 0,
        default: () => "0",
    })
    usePoint: number;

    @Column("number", {
        name: "SALE_POINT",
        nullable: true,
        precision: 7,
        scale: 0,
        default: () => "0",
    })
    salePoint: number;

    @Column("char", { name: "POINT_CARD_NO", nullable: true, length: 16 })
    pointCardNo: string;

    @Column("char", { name: "CHAIN_MS_NO", nullable: true, length: 6 })
    chainMsNo: string;

    @Column("char", {
        name: "ORG_BILL_NO",
        nullable: true,
        length: 20,
        default: () => "'0'",
    })
    orgBillNo: string;

    @Column("char", { name: "CANCEL_YN", length: 1, default: () => "'N'" })
    cancelYn: string;

    @Column("char", { name: "DC_TYPE", length: 1, default: () => "'0'" })
    dcType: string;

    @PrimaryColumn("char", { name: "CUST_NO", nullable: false, length: 8 })
    custNo: string;

    @Column("number", {
        name: "SLIP_CNT",
        precision: 2,
        scale: 0,
        default: () => "0",
    })
    slipCnt: number;

    @Column("number", {
        name: "DETAIL_CNT",
        precision: 2,
        scale: 0,
        default: () => "0",
    })
    detailCnt: number;

    @Column("number", {
        name: "DC_AMT",
        precision: 9,
        scale: 0,
        default: () => "0",
    })
    dcAmt: number;

    @Column("number", {
        name: "ETC_AMT",
        precision: 9,
        scale: 0,
        default: () => "0",
    })
    etcAmt: number;

    @Column("number", {
        name: "CARD_AMT",
        precision: 9,
        scale: 0,
        default: () => "0",
    })
    cardAmt: number;

    @Column("number", {
        name: "CASH_AMT",
        precision: 9,
        scale: 0,
        default: () => "0",
    })
    cashAmt: number;

    @Column("number", {
        name: "SALE_AMT",
        precision: 9,
        scale: 0,
        default: () => "0",
    })
    saleAmt: number;

    @Column("number", {
        name: "SALE_TOT",
        precision: 9,
        scale: 0,
        default: () => "0",
    })
    saleTot: number;

    @Column("char", { name: "DATETIME", length: 14 })
    datetime: string;

    @Column("char", { name: "SALE_FG", length: 1, default: () => "'0'" })
    saleFg: string;

    @Column("char", { name: "CHAIN_AREA", length: 3 })
    chainArea: string;

    @Column("char", { name: "CHAIN_NO", length: 4 })
    chainNo: string;

    @PrimaryColumn("char", { name: "BILL_NO", length: 4 })
    billNo: string;

    @PrimaryColumn("char", { name: "POS_NO", length: 2 })
    posNo: string;

    @PrimaryColumn("char", { name: "MS_NO", length: 6 })
    msNo: string;

    @PrimaryColumn("char", { name: "SALE_DATE", length: 8 })
    saleDate: string;

    @Column("number", {
        name: "OKCASH_AMT",
        nullable: true,
        precision: 9,
        scale: 0,
    })
    okcashAmt: number;

    @Column("char", { name: "MYONE_FG", nullable: true, length: 1 })
    myoneFg: string;

    @Column("char", { name: "CUST_FG", nullable: true, length: 1 })
    custFg: string;

    @Column("number", {
        name: "E_CASH_AMT",
        nullable: true,
        precision: 9,
        scale: 0,
        default: () => "0",
    })
    eCashAmt: number;

    @Column("number", {
        name: "EXTRA_AMT",
        nullable: true,
        precision: 9,
        scale: 0,
        default: () => "0",
    })
    extraAmt: number;

    @Column("char", { name: "EXTRA_FG", nullable: true, length: 1 })
    extraFg: string;

    @Column("char", { name: "TEMP_CARD_NO", nullable: true, length: 16 })
    tempCardNo: string;

    @Column("char", { name: "TEMP_CARD_CORP_NO", nullable: true, length: 3 })
    tempCardCorpNo: string;

    @Column("number", {
        name: "GIFT_RE_AMT",
        nullable: true,
        precision: 9,
        scale: 0,
        default: () => "0",
    })
    giftReAmt: number;

    @Column("number", {
        name: "CASH_RE_AMT",
        nullable: true,
        precision: 9,
        scale: 0,
        default: () => "0",
    })
    cashReAmt: number;

    @Column("char", {
        name: "TMP_CARD_CO",
        nullable: true,
        length: 1,
        default: () => "'0'",
    })
    tmpCardCo: string;

    @Column("char", { name: "PREPAID_CARD_NO", nullable: true, length: 16 })
    prepaidCardNo: string;

    @Column("number", {
        name: "PREPAID_DEPOSIT",
        nullable: true,
        precision: 9,
        scale: 0,
        default: () => "0",
    })
    prepaidDeposit: number;

    @Column("number", { name: "TIP_AMT", nullable: true, precision: 9, scale: 0 })
    tipAmt: number;

    @Column("char", { name: "ORDER_TIME", nullable: true, length: 4 })
    orderTime: string;

    @Column("char", { name: "ORDER_DATE", nullable: true, length: 8 })
    orderDate: string;

    @Column("char", { name: "LORDER_EMPID", nullable: true, length: 4 })
    lorderEmpid: string;

    @OneToMany(() => Strndttb, strndttb => strndttb.strnhdtb)
    strndttbs: Strndttb[]
}




@Index("STRNDTX0", ["saleDate", "msNo", "posNo", "billNo", "lineNo"], {
    unique: true,
})
@Index("STRNDTX1", ["saleDate", "chainNo"], {})
@Entity("STRNDTTB")
export class Strndttb {
    @Column("char", { name: "UPGRADE_FG", nullable: true, length: 1 })
    upgradeFg: string;

    @Column("char", { name: "PROM_GOOD_FG", nullable: true, length: 1 })
    promGoodFg: string;

    @Column("char", {
        name: "TIP_FG",
        nullable: true,
        length: 1,
        default: () => "'0'",
    })
    tipFg: string;

    @Column("char", { name: "ORDER_EMPID", nullable: true, length: 4 })
    orderEmpid: string;

    @Column("char", { name: "SALE_TYPE", nullable: true, length: 1 })
    saleType: string;

    @Column("char", { name: "SUB_MENU_NM", nullable: true, length: 4 })
    subMenuNm: string;

    @Column("char", { name: "SUB_MEMU_CD", nullable: true, length: 4 })
    subMemuCd: string;

    @Column("char", { name: "PAR_GOODS_CD", nullable: true, length: 4 })
    parGoodsCd: string;

    @Column("number", {
        name: "CUST_DC_AMT",
        nullable: true,
        precision: 9,
        scale: 0,
        default: () => "0",
    })
    custDcAmt: number;

    @Column("number", {
        name: "COUPON_DC_AMT",
        nullable: true,
        precision: 9,
        scale: 0,
        default: () => "0",
    })
    couponDcAmt: number;

    @Column("number", {
        name: "CARD_DC_AMT",
        nullable: true,
        precision: 9,
        scale: 0,
        default: () => "0",
    })
    cardDcAmt: number;

    @Column("number", {
        name: "SERVICE_DC_AMT",
        nullable: true,
        precision: 9,
        scale: 0,
        default: () => "0",
    })
    serviceDcAmt: number;

    @Column("number", {
        name: "NORM_DC_AMT",
        nullable: true,
        precision: 9,
        scale: 0,
        default: () => "0",
    })
    normDcAmt: number;

    @Column("number", {
        name: "VAT_AMT",
        nullable: true,
        precision: 9,
        scale: 0,
        default: () => "0",
    })
    vatAmt: number;

    @Column("char", { name: "STOCK_FG", length: 1, default: () => "'0'" })
    stockFg: string;

    @Column("number", {
        name: "POINT",
        nullable: true,
        precision: 7,
        scale: 0,
        default: () => "0",
    })
    point: number;

    @Column("number", {
        name: "DC_AMT",
        precision: 9,
        scale: 0,
        default: () => "0",
    })
    dcAmt: number;

    @Column("number", {
        name: "SALE_AMT",
        precision: 9,
        scale: 0,
        default: () => "0",
    })
    saleAmt: number;

    @Column("number", {
        name: "SALE_TOT",
        precision: 9,
        scale: 0,
        default: () => "0",
    })
    saleTot: number;

    @Column("number", {
        name: "SALE_QTY",
        precision: 3,
        scale: 0,
        default: () => "0",
    })
    saleQty: number;

    @Column("number", {
        name: "UCOST",
        precision: 8,
        scale: 0,
        default: () => "0",
    })
    ucost: number;

    @Column("number", {
        name: "UPRICE",
        precision: 8,
        scale: 0,
        default: () => "0",
    })
    uprice: number;

    @Column("char", { name: "PACK_FG", length: 1, default: () => "'2'" })
    packFg: string;

    @Column("char", { name: "GOODS_CD", length: 4 })
    goodsCd: string;

    @Column("char", { name: "SALE_FG", length: 1, default: () => "'0'" })
    saleFg: string;

    @Column("char", { name: "CHAIN_AREA", length: 3 })
    chainArea: string;

    @PrimaryColumn("char", { name: "CHAIN_NO", length: 4 })
    chainNo: string;

    @PrimaryColumn("char", { name: "LINE_NO", length: 2 })
    lineNo: string;

    @PrimaryColumn("char", { name: "BILL_NO", length: 4 })
    billNo: string;

    @PrimaryColumn("char", { name: "POS_NO", length: 2 })
    posNo: string;

    @PrimaryColumn("char", { name: "MS_NO", length: 6 })
    msNo: string;

    @PrimaryColumn("char", { name: "SALE_DATE", length: 8 })
    saleDate: string;

    @ManyToOne(() => Strnhdtb, strnhdtb => strnhdtb.strndttbs)
    @JoinColumn([
        { name: 'SALE_DATE' },
        { name: 'MS_NO' },
        { name: 'POS_NO' },
        { name: 'BILL_NO' },
        { name: 'CHAIN_NO' },
        // { name: 'SALE_DATE', referencedColumnName: 'saleDate' },
        // { name: 'MS_NO', referencedColumnName: 'msNo' },
        // { name: 'POS_NO', referencedColumnName: 'posNo' },
        // { name: 'BILL_NO', referencedColumnName: 'billNo' },
        // { name: 'CHAIN_NO', referencedColumnName: 'chainNo' },
    ])
    strnhdtb: Strnhdtb
}





// @Entity({ name: 'STRNHDTB', orderBy: { SALE_DATE: 'DESC' } })
// @Unique(['SALE_DATE', 'MS_NO', 'POS_NO', 'BILL_NO'])
// export class SalesHD {
//     @PrimaryColumn()
//     SALE_DATE: string;
//     @PrimaryColumn()
//     MS_NO: string;
//     @PrimaryColumn()
//     POS_NO: string;
//     @PrimaryColumn()
//     BILL_NO: string;

//     @Column()
//     CHAIN_NO: string;
//     @Column()
//     CHAIN_AREA: string;
//     @Column()
//     SALE_FG: string;
//     @Column()
//     SALE_DTIME: string;
//     @Column()
//     SALE_TOT: number;
//     @Column()
//     SALE_AMT: number;
//     @Column()
//     CASH_AMT: number;
//     @Column()
//     CARD_AMT: number;
//     @Column()
//     ETC_AMT: number;
//     @Column()
//     DC_AMT: number;

//     @OneToMany(() => SalesDT, salesDT => salesDT.salesHD)
//     strndttbs: SalesDT[]
// }


// @Entity({ name: 'STRNDTTB' })
// @Unique(['SALE_DATE', 'MS_NO', 'POS_NO', 'BILL_NO', 'LINE_NO'])
// export class SalesDT {
//     @PrimaryColumn()
//     SALE_DATE: string;
//     @PrimaryColumn()
//     MS_NO: string;
//     @PrimaryColumn()
//     POS_NO: string;
//     @PrimaryColumn()
//     BILL_NO: string;
//     @PrimaryColumn()
//     LINE_NO: string;

//     @Column()
//     CHAIN_NO: string;
//     @Column()
//     CHAIN_AREA: string;
//     @Column()
//     SALE_FG: string;
//     @Column()
//     GOODS_CD: string;
//     @Column()
//     PACK_FG: string;

//     @Column()
//     UPRICE: number;
//     @Column()
//     UCOST: number;
//     @Column()
//     SALE_QTY: number;
//     @Column()
//     SALE_TOT: number;
//     @Column()
//     SALE_AMT: number;
//     @Column()
//     DC_AMT: number;


//     @ManyToOne(() => SalesHD, salesHD => salesHD.strndttbs)
//     @JoinColumn([
//         { name: 'SALE_DATE', referencedColumnName: 'SALE_DATE' },
//         { name: 'MS_NO', referencedColumnName: 'MS_NO' },
//         { name: 'POS_NO', referencedColumnName: 'POS_NO' },
//         { name: 'BILL_NO', referencedColumnName: 'BILL_NO' },
//     ])
//     salesHD: SalesHD

// }
