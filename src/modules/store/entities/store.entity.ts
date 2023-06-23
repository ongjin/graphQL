import { Entity, Index, Column, PrimaryGeneratedColumn, PrimaryColumn, Unique, ManyToOne, OneToMany, JoinColumn, OneToOne } from 'typeorm';


@Index("MMEMBVX0", ["msNo"], { unique: true })
@Entity("MMEMBVTB")
export class StoreSystem {
    @PrimaryColumn("varchar2", { name: "MS_NO", length: 6 })
    msNo: string;

    @Column("varchar2", { name: "CHAIN_NO", length: 4, default: () => "'0000'" })
    chainNo: string;

    @Column("varchar2", { name: "POS_TYPE", length: 1, default: () => "'0'" })
    posType: string;

    @Column("number", {
        name: "POS_CNT",
        precision: 2,
        scale: 0,
        default: () => "1",
    })
    posCnt: number;

    @Column("varchar2", { name: "TAX_TYPE", length: 1, default: () => "'1'" })
    taxType: string;

    @Column("varchar2", { name: "TO_CD", length: 3, default: () => "'000'" })
    toCd: string;

    @Column("varchar2", { name: "VAT_YN", length: 1, default: () => "'N'" })
    vatYn: string;

    @Column("varchar2", { name: "CIT_YN", length: 1, default: () => "'N'" })
    citYn: string;

    @Column("varchar2", { name: "SIMPLE_YN", length: 1, default: () => "'N'" })
    simpleYn: string;

    @Column("number", {
        name: "POINT",
        precision: 11,
        scale: 2,
        default: () => "0",
    })
    point: number;

    @Column("number", {
        name: "POINT_UNIT",
        precision: 11,
        scale: 2,
        default: () => "0",
    })
    pointUnit: number;

    @Column("varchar2", {
        name: "POINT_CARD_MASK",
        length: 20,
        default: () => "'00000000000000000000'",
    })
    pointCardMask: string;

    @Column("varchar2", { name: "ROUND_FG", length: 1, default: () => "'0'" })
    roundFg: string;

    @Column("varchar2", { name: "KITCHEN_YN", length: 1, default: () => "'0'" })
    kitchenYn: string;

    @Column("varchar2", { name: "DELIVERY_YN", length: 1, default: () => "'0'" })
    deliveryYn: string;

    @Column("varchar2", { name: "DEMAND_FG", length: 1, default: () => "'0'" })
    demandFg: string;

    @Column("varchar2", { name: "CUST_MNG_FG", length: 1, default: () => "'1'" })
    custMngFg: string;

    @Column("number", {
        name: "CREDIT_LIMIT",
        precision: 13,
        scale: 2,
        default: () => "0",
    })
    creditLimit: number;

    @Column("varchar2", { name: "CENTER_CD", nullable: true, length: 2 })
    centerCd: string | null;

    @Column("varchar2", {
        name: "VAT_FG",
        nullable: true,
        length: 1,
        default: () => "'0'",
    })
    vatFg: string | null;

    @Column("varchar2", {
        name: "SHOP_AREA_CD",
        length: 2,
        default: () => "'00'",
    })
    shopAreaCd: string;

    @Column("varchar2", {
        name: "SHOP_CLASS_CD",
        length: 1,
        default: () => "'0'",
    })
    shopClassCd: string;

    @Column("varchar2", {
        name: "EMP_CARD_MASK",
        length: 20,
        default: () => "'0000000000000000'",
    })
    empCardMask: string;

    @Column("varchar2", { name: "LOTTE_FG", length: 1, default: () => "'0'" })
    lotteFg: string;

    @Column("varchar2", { name: "GOODS_FG", length: 1, default: () => "'0'" })
    goodsFg: string;

    @Column("varchar2", { name: "UCOST_VAT_FG", length: 1, default: () => "'0'" })
    ucostVatFg: string;

    @Column("varchar2", { name: "CORP_NO", nullable: true, length: 13 })
    corpNo: string | null;

    @Column("varchar2", { name: "BIZ_NM", nullable: true, length: 30 })
    bizNm: string | null;

    @Column("varchar2", {
        name: "PLU_GU",
        nullable: true,
        length: 1,
        default: () => "'0'",
    })
    pluGu: string | null;

    @Column("varchar2", { name: "OLD_BIZ_NO", nullable: true, length: 10 })
    oldBizNo: string | null;

    @Column("varchar2", { name: "SPORTS_FG", length: 1, default: () => "'0'" })
    sportsFg: string;

    @Column("varchar2", { name: "OCB_CAT_ID", nullable: true, length: 16 })
    ocbCatId: string | null;

    @Column("varchar2", { name: "OCB_PASSWD", nullable: true, length: 16 })
    ocbPasswd: string | null;

    @Column("varchar2", { name: "CORP_FG", length: 1, default: () => "'0'" })
    corpFg: string;

    @Column("varchar2", { name: "DDC_YN", nullable: true, length: 1 })
    ddcYn: string | null;

    @Column("varchar2", { name: "COST_FG", length: 1, default: () => "'0'" })
    costFg: string;

    @Column("varchar2", { name: "COST_S_YYMM", nullable: true, length: 6 })
    costSYymm: string | null;

    @Column("varchar2", { name: "USUPRICE_FG", length: 1, default: () => "'1'" })
    usupriceFg: string;

    @Column("varchar2", { name: "UCOST_FG", length: 1, default: () => "'1'" })
    ucostFg: string;

    @Column("varchar2", {
        name: "CLOTHES_FG",
        nullable: true,
        length: 1,
        default: () => "'0'",
    })
    clothesFg: string | null;

    @Column("varchar2", {
        name: "AMT_ROUND_POS",
        length: 1,
        default: () => "'2'",
    })
    amtRoundPos: string;

    @Column("varchar2", {
        name: "AMT_ROUND_TYPE",
        length: 1,
        default: () => "'0'",
    })
    amtRoundType: string;

    @Column("varchar2", { name: "CREATE_DTIME", length: 14 })
    createDtime: string;

    @Column("varchar2", { name: "CREATE_ID", length: 20 })
    createId: string;

    @Column("varchar2", { name: "LAST_DTIME", length: 14 })
    lastDtime: string;

    @Column("varchar2", { name: "LAST_ID", length: 20 })
    lastId: string;

    @Column("varchar2", { name: "KITCHEN_CNT", length: 2, default: () => "'0'" })
    kitchenCnt: string;

    @Column("varchar2", {
        name: "WAIT_MIN",
        nullable: true,
        length: 2,
        default: () => "'0'",
    })
    waitMin: string | null;

    @Column("varchar2", { name: "CODE_SOURCE_MASK", nullable: true, length: 18 })
    codeSourceMask: string | null;

    @Column("varchar2", { name: "SALE_DEL", length: 3, default: () => "'31'" })
    saleDel: string;

    @Column("varchar2", { name: "WEIGHT_UNIT", length: 1, default: () => "'1'" })
    weightUnit: string;

    @Column("varchar2", { name: "PRICE_UNIT", length: 1, default: () => "'1'" })
    priceUnit: string;

    @Column("varchar2", { name: "GOODSCD_LEN", length: 2, default: () => "'8'" })
    goodscdLen: string;

    @Column("varchar2", { name: "SCALE_GOODSCD_LEN", nullable: true, length: 6 })
    scaleGoodscdLen: string | null;

    @Column("varchar2", {
        name: "KITCHEN_GROUP_YN",
        length: 1,
        default: () => "'0'",
    })
    kitchenGroupYn: string;

    @Column("varchar2", {
        name: "ORDER_FG",
        nullable: true,
        length: 1,
        default: () => "'0'",
    })
    orderFg: string | null;

    @Column("number", {
        name: "PRT_V_MARGIN",
        nullable: true,
        precision: 3,
        scale: 1,
    })
    prtVMargin: number | null;

    @Column("number", {
        name: "PRT_H_MARGIN",
        nullable: true,
        precision: 3,
        scale: 1,
    })
    prtHMargin: number | null;

    @Column("varchar2", { name: "ECO_YN", length: 1, default: () => "'N'" })
    ecoYn: string;

    @Column("varchar2", { name: "ECO_CODE", nullable: true, length: 9 })
    ecoCode: string | null;

    @Column("number", {
        name: "KIOSK_CNT",
        precision: 2,
        scale: 0,
        default: () => "0",
    })
    kioskCnt: number;
}
