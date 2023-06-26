import { Entity, Index, Column, PrimaryGeneratedColumn, PrimaryColumn, Unique, ManyToOne, OneToMany, JoinColumn, OneToOne } from 'typeorm';

@Index("MCLSGDX0", ["msNo", "gpluCd", "pluCd", "chainNo"], { unique: true })
@Entity("MCLSGDTB")
export class GoodsHeader {
    @Column("varchar2", { name: "GOODS_DETAIL", nullable: true, length: 500 })
    goodsDetail: string | null;

    @Column("varchar2", { name: "SOLD_OUT_YN", nullable: true, length: 1 })
    soldOutYn: string | null;

    @PrimaryColumn("varchar2", { name: "MS_NO", length: 6 })
    msNo: string;

    @PrimaryColumn("varchar2", { name: "CHAIN_NO", length: 4 })
    chainNo: string;

    @PrimaryColumn("varchar2", { name: "GPLU_CD", length: 2 })
    gpluCd: string;

    @PrimaryColumn("varchar2", { name: "PLU_CD", length: 2 })
    pluCd: string;

    @Column("varchar2", { name: "GOODS_CD", length: 20 })
    goodsCd: string;

    @Column("varchar2", { name: "IMG_PATH", nullable: true, length: 100 })
    imgPath: string | null;

    @Column("varchar2", { name: "IMG_FILE_NM", nullable: true, length: 50 })
    imgFileNm: string | null;

    @Column("varchar2", {
        name: "NEW_YN",
        nullable: true,
        length: 1,
        default: () => "'N'",
    })
    newYn: string | null;

    @Column("varchar2", {
        name: "HIT_YN",
        nullable: true,
        length: 1,
        default: () => "'N'",
    })
    hitYn: string | null;

    @Column("varchar2", {
        name: "PACK_YN",
        nullable: true,
        length: 1,
        default: () => "'Y'",
    })
    packYn: string | null;

    @Column("varchar2", {
        name: "SHOP_YN",
        nullable: true,
        length: 1,
        default: () => "'Y'",
    })
    shopYn: string | null;

    @Column("varchar2", { name: "CREATE_DTIME", length: 14 })
    createDtime: string;

    @Column("varchar2", { name: "CREATE_ID", length: 20 })
    createId: string;

    @Column("varchar2", { name: "LAST_DTIME", length: 14 })
    lastDtime: string;

    @Column("varchar2", { name: "LAST_ID", length: 20 })
    lastId: string;

    @OneToOne(() => GoodsDetail)
    @JoinColumn([
        { name: 'GOODS_CD', referencedColumnName: 'goodsCd' },
        { name: 'MS_NO', referencedColumnName: 'msNo' },
    ])
    goodsDt: Promise<GoodsDetail>
}


@Index("MGOODSX0", ["msNo", "goodsCd"], { unique: true })
@Index("MGOODSX1", ["msNo", "lclassCd", "mclassCd", "sclassCd", "goodsCd"], {})
@Index("MGOODSX2", ["msNo", "goodsNm"], {})
@Index("MGOODSX3", ["msNo", "lclassCd", "goodsStyleCd"], {})
@Entity("MGOODSTB")
export class GoodsDetail {
    @PrimaryColumn("varchar2", { name: "MS_NO", length: 6 })
    msNo: string;

    @PrimaryColumn("varchar2", { name: "GOODS_CD", length: 20 })
    goodsCd: string;

    @Column("varchar2", { name: "GOODS_NM", length: 50 })
    goodsNm: string;

    @Column("varchar2", { name: "GOODS_SUB_NM", nullable: true, length: 50 })
    goodsSubNm: string | null;

    @Column("varchar2", { name: "GOODS_SPEC", nullable: true, length: 20 })
    goodsSpec: string | null;

    @Column("varchar2", { name: "LCLASS_CD", length: 4 })
    lclassCd: string;

    @Column("varchar2", { name: "MCLASS_CD", length: 4 })
    mclassCd: string;

    @Column("varchar2", { name: "SCLASS_CD", length: 4 })
    sclassCd: string;

    @Column("varchar2", { name: "GOODS_STYLE_CD", nullable: true, length: 20 })
    goodsStyleCd: string | null;

    @Column("varchar2", {
        name: "GOODS_COLOR_CD",
        nullable: true,
        length: 15,
        default: () => "'000'",
    })
    goodsColorCd: string | null;

    @Column("varchar2", {
        name: "GOODS_SIZ_CD",
        nullable: true,
        length: 5,
        default: () => "'0000'",
    })
    goodsSizCd: string | null;

    @Column("number", {
        name: "UPRICE",
        precision: 11,
        scale: 2,
        default: () => "0",
    })
    uprice: number;

    @Column("number", {
        name: "USUPRICE",
        precision: 11,
        scale: 2,
        default: () => "0",
    })
    usuprice: number;

    @Column("number", {
        name: "UCOST",
        precision: 11,
        scale: 2,
        default: () => "0",
    })
    ucost: number;

    @Column("number", {
        name: "VAT_RATE",
        precision: 5,
        scale: 2,
        default: () => "0",
    })
    vatRate: number;

    @Column("varchar2", { name: "TAX_FG", length: 1, default: () => "'1'" })
    taxFg: string;

    @Column("varchar2", {
        name: "GOODS_PRICE_FG",
        length: 1,
        default: () => "'0'",
    })
    goodsPriceFg: string;

    @Column("varchar2", {
        name: "GOODS_CONTROL_FG",
        length: 1,
        default: () => "'0'",
    })
    goodsControlFg: string;

    @Column("varchar2", { name: "USE_FG", length: 1, default: () => "'0'" })
    useFg: string;

    @Column("varchar2", { name: "SET_FG", length: 1, default: () => "'0'" })
    setFg: string;

    @Column("varchar2", { name: "SERVICE_FG", length: 1, default: () => "'0'" })
    serviceFg: string;

    @Column("varchar2", { name: "ORD_UNIT", length: 1, default: () => "'0'" })
    ordUnit: string;

    @Column("number", {
        name: "IN_QTY",
        precision: 11,
        scale: 2,
        default: () => "1",
    })
    inQty: number;

    @Column("varchar2", { name: "INV_UNIT", length: 1, default: () => "'0'" })
    invUnit: string;

    @Column("number", {
        name: "INV_IN_QTY",
        precision: 11,
        scale: 2,
        default: () => "1",
    })
    invInQty: number;

    @Column("number", {
        name: "GOODS_UNIT",
        precision: 11,
        scale: 2,
        default: () => "1",
    })
    goodsUnit: number;

    @Column("number", {
        name: "MIN_ORD_QTY",
        precision: 11,
        scale: 2,
        default: () => "1",
    })
    minOrdQty: number;

    @Column("number", {
        name: "GOODS_POINT",
        precision: 11,
        scale: 2,
        default: () => "0",
    })
    goodsPoint: number;

    @Column("number", {
        name: "SAFETY_QTY",
        precision: 11,
        scale: 2,
        default: () => "0",
    })
    safetyQty: number;

    @Column("varchar2", { name: "GOODS_USE_FG", length: 1, default: () => "'0'" })
    goodsUseFg: string;

    @Column("varchar2", {
        name: "TIP_FG",
        nullable: true,
        length: 1,
        default: () => "'0'",
    })
    tipFg: string | null;

    @Column("varchar2", {
        name: "TAX_CONTROL_FG",
        length: 1,
        default: () => "'0'",
    })
    taxControlFg: string;

    @Column("varchar2", { name: "SOURCE_FG", nullable: true, length: 1 })
    sourceFg: string | null;

    @Column("varchar2", { name: "GOODS_PROF", nullable: true, length: 2 })
    goodsProf: string | null;

    @Column("varchar2", { name: "CALORY", nullable: true, length: 3 })
    calory: string | null;

    @Column("varchar2", { name: "DEFCUST_CNT", nullable: true, length: 1 })
    defcustCnt: string | null;

    @Column("varchar2", { name: "ORIGIN_NO", nullable: true, length: 4 })
    originNo: string | null;

    @Column("varchar2", { name: "PRODUCT_NO", nullable: true, length: 4 })
    productNo: string | null;

    @Column("varchar2", { name: "GRADE_NO", nullable: true, length: 4 })
    gradeNo: string | null;

    @Column("varchar2", { name: "INCOME_NO", nullable: true, length: 4 })
    incomeNo: string | null;

    @Column("varchar2", { name: "MULTI_BIZ_CD", nullable: true, length: 1 })
    multiBizCd: string | null;

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

    @Column("varchar2", { name: "SCALE_GOODSCD", nullable: true, length: 20 })
    scaleGoodscd: string | null;

    @Column("varchar2", { name: "SCALE_YN", length: 1, default: () => "'N'" })
    scaleYn: string;

    @Column("varchar2", { name: "SISUL_FG", length: 1, default: () => "'0'" })
    sisulFg: string;

    @Column("varchar2", {
        name: "DESIGNER_PART_FG",
        length: 2,
        default: () => "'00'",
    })
    designerPartFg: string;

    @Column("varchar2", { name: "PROMO_APP_FG", length: 1, default: () => "'0'" })
    promoAppFg: string;

    @Column("varchar2", { name: "SUB_GROUP_CD", nullable: true, length: 2 })
    subGroupCd: string | null;

    @Column("varchar2", { name: "ERP_GOODS_CD", nullable: true, length: 20 })
    erpGoodsCd: string | null;

    @Column("varchar2", { name: "GOODS_BRAND_CD", nullable: true, length: 5 })
    goodsBrandCd: string | null;

    @Column("varchar2", { name: "FILE_IMGNAME", nullable: true, length: 30 })
    fileImgname: string | null;

    @Column("varchar2", { name: "BEEF_USE_FG", nullable: true, length: 1 })
    beefUseFg: string | null;

    @Column("varchar2", {
        name: "SN_YN",
        nullable: true,
        length: 1,
        default: () => "'N'",
    })
    snYn: string | null;

    @Column("varchar2", {
        name: "DUMMY_YN",
        nullable: true,
        length: 1,
        default: () => "'N'",
    })
    dummyYn: string | null;

    @Column("varchar2", { name: "SKU", nullable: true, length: 13 })
    sku: string | null;

    @Column("varchar2", { name: "ANAB_REMARK", nullable: true, length: 50 })
    anabRemark: string | null;
}
