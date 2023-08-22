import { Entity, Index, Column, PrimaryGeneratedColumn, PrimaryColumn, Unique, ManyToOne, OneToMany, JoinColumn, OneToOne } from 'typeorm';


@Index("MPROMAX0", ["msNo", "promotionYear", "promotionCd"], { unique: true })
@Index("MPROMAX1", ["chainNo", "promotionYear", "promotionCd"], {})
@Entity("MPROMATB")
export class PromotionHeader {
    @Column("varchar2", { name: "WEB_KIOSK_USE_YN", nullable: true, length: 1 })
    webKioskUseYn: string | null;

    @Column("varchar2", {
        name: "PROMOTION_SCHEME",
        nullable: true,
        length: 2000,
    })
    promotionScheme: string | null;

    @Column("varchar2", {
        name: "PROMOTION_RESULT",
        nullable: true,
        length: 2000,
    })
    promotionResult: string | null;

    @Column("varchar2", { name: "PROMOTION_ETC", nullable: true, length: 500 })
    promotionEtc: string | null;

    @Column("varchar2", { name: "PROMOTION_FG", length: 1 })
    promotionFg: string;

    @Column("varchar2", { name: "VALID_FROM_DATE", length: 8 })
    validFromDate: string;

    @Column("varchar2", { name: "VALID_TO_DATE", length: 8 })
    validToDate: string;

    @Column("varchar2", { name: "GOOD_PROC_FG", length: 1 })
    goodProcFg: string;

    @Column("varchar2", { name: "GRADE0_FG", nullable: true, length: 1 })
    grade0Fg: string | null;

    @Column("number", {
        name: "GRADE0_DC",
        precision: 5,
        scale: 2,
        default: () => "0",
    })
    grade0Dc: number;

    @Column("number", {
        name: "GRADE0_RATE",
        precision: 5,
        scale: 2,
        default: () => "1",
    })
    grade0Rate: number;

    @Column("varchar2", { name: "GRADE1_FG", nullable: true, length: 1 })
    grade1Fg: string | null;

    @Column("number", {
        name: "GRADE1_DC",
        precision: 5,
        scale: 2,
        default: () => "0",
    })
    grade1Dc: number;

    @Column("number", {
        name: "GRADE1_RATE",
        precision: 5,
        scale: 2,
        default: () => "1",
    })
    grade1Rate: number;

    @Column("varchar2", { name: "GRADE2_FG", nullable: true, length: 1 })
    grade2Fg: string | null;

    @Column("number", {
        name: "GRADE2_DC",
        precision: 5,
        scale: 2,
        default: () => "0",
    })
    grade2Dc: number;

    @Column("number", {
        name: "GRADE2_RATE",
        precision: 5,
        scale: 2,
        default: () => "1",
    })
    grade2Rate: number;

    @Column("varchar2", { name: "GRADE3_FG", nullable: true, length: 1 })
    grade3Fg: string | null;

    @Column("number", {
        name: "GRADE3_DC",
        precision: 5,
        scale: 2,
        default: () => "0",
    })
    grade3Dc: number;

    @Column("number", {
        name: "GRADE3_RATE",
        precision: 5,
        scale: 2,
        default: () => "1",
    })
    grade3Rate: number;

    @Column("varchar2", { name: "GRADE4_FG", nullable: true, length: 1 })
    grade4Fg: string | null;

    @Column("number", {
        name: "GRADE4_DC",
        precision: 5,
        scale: 2,
        default: () => "0",
    })
    grade4Dc: number;

    @Column("number", {
        name: "GRADE4_RATE",
        precision: 5,
        scale: 2,
        default: () => "1",
    })
    grade4Rate: number;

    @Column("varchar2", { name: "GRADE5_FG", nullable: true, length: 1 })
    grade5Fg: string | null;

    @Column("number", {
        name: "GRADE5_DC",
        precision: 5,
        scale: 2,
        default: () => "0",
    })
    grade5Dc: number;

    @Column("number", {
        name: "GRADE5_RATE",
        precision: 5,
        scale: 2,
        default: () => "1",
    })
    grade5Rate: number;

    @Column("varchar2", { name: "GRADE6_FG", nullable: true, length: 1 })
    grade6Fg: string | null;

    @Column("number", {
        name: "GRADE6_DC",
        precision: 5,
        scale: 2,
        default: () => "0",
    })
    grade6Dc: number;

    @Column("number", {
        name: "GRADE6_RATE",
        precision: 5,
        scale: 2,
        default: () => "1",
    })
    grade6Rate: number;

    @Column("varchar2", { name: "GRADE7_FG", nullable: true, length: 1 })
    grade7Fg: string | null;

    @Column("number", {
        name: "GRADE7_DC",
        precision: 5,
        scale: 2,
        default: () => "0",
    })
    grade7Dc: number;

    @Column("number", {
        name: "GRADE7_RATE",
        precision: 5,
        scale: 2,
        default: () => "1",
    })
    grade7Rate: number;

    @Column("varchar2", { name: "GRADE8_FG", nullable: true, length: 1 })
    grade8Fg: string | null;

    @Column("number", {
        name: "GRADE8_DC",
        precision: 5,
        scale: 2,
        default: () => "0",
    })
    grade8Dc: number;

    @Column("number", {
        name: "GRADE8_RATE",
        precision: 5,
        scale: 2,
        default: () => "1",
    })
    grade8Rate: number;

    @Column("varchar2", { name: "GRADE9_FG", nullable: true, length: 1 })
    grade9Fg: string | null;

    @Column("number", {
        name: "GRADE9_DC",
        precision: 5,
        scale: 2,
        default: () => "0",
    })
    grade9Dc: number;

    @Column("number", {
        name: "GRADE9_RATE",
        precision: 5,
        scale: 2,
        default: () => "1",
    })
    grade9Rate: number;

    @Column("varchar2", { name: "GEN_FG", nullable: true, length: 1 })
    genFg: string | null;

    @Column("number", {
        name: "GEN_DC",
        precision: 5,
        scale: 2,
        default: () => "0",
    })
    genDc: number;

    @Column("number", {
        name: "GEN_RATE",
        precision: 5,
        scale: 2,
        default: () => "1",
    })
    genRate: number;

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

    @Column("varchar2", { name: "GEN_DC_FG", length: 1, default: () => "'0'" })
    genDcFg: string;

    @Column("number", {
        name: "GEN_AMT",
        precision: 7,
        scale: 0,
        default: () => "0",
    })
    genAmt: number;

    @Column("varchar2", {
        name: "VALID_FROM_TIME",
        length: 4,
        default: () => "'0000'",
    })
    validFromTime: string;

    @Column("varchar2", {
        name: "VALID_TO_TIME",
        length: 4,
        default: () => "'2400'",
    })
    validToTime: string;

    @Column("varchar2", { name: "VALID_DAY", length: 1, default: () => "'0'" })
    validDay: string;

    @Column("varchar2", {
        name: "PROMOTION_KIND",
        length: 1,
        default: () => "'0'",
    })
    promotionKind: string;

    @Column("number", {
        name: "LIMIT_AMT",
        precision: 7,
        scale: 0,
        default: () => "0",
    })
    limitAmt: number;

    @Column("varchar2", { name: "CARD_PROM_FG", nullable: true, length: 1 })
    cardPromFg: string | null;

    @Column("varchar2", { name: "CARD_CO", nullable: true, length: 3 })
    cardCo: string | null;

    @Column("number", {
        name: "CRADE_CARD_RATE",
        nullable: true,
        precision: 5,
        scale: 2,
    })
    cradeCardRate: number | null;


    @Column("number", {
        name: "POINT_CARD_RATE",
        nullable: true,
        precision: 11,
        scale: 2,
    })
    pointCardRate: number | null;

    @Column("varchar2", { name: "REF_RAT_FG", nullable: true, length: 1 })
    refRatFg: string | null;

    @Column("number", {
        name: "MAX_DC_AMT",
        nullable: true,
        precision: 9,
        scale: 0,
    })
    maxDcAmt: number | null;

    @PrimaryColumn("varchar2", { name: "CHAIN_NO", length: 4 })
    chainNo: string;

    @PrimaryColumn("varchar2", { name: "MS_NO", length: 6 })
    msNo: string;

    @PrimaryColumn("varchar2", { name: "PROMOTION_YEAR", length: 4 })
    promotionYear: string;

    @PrimaryColumn("varchar2", { name: "PROMOTION_CD", length: 4 })
    promotionCd: string;

    @Column("varchar2", { name: "PROMOTION_NM", length: 30 })
    promotionNm: string;

    @OneToMany(() => PromotionDetail, res => res.promotionHeader)
    promotionDetails: PromotionDetail[]
}


@Index("MPROGDX0", ["msNo", "promotionYear", "promotionCd", "goodsCd"], {
    unique: true,
})
@Index("MPROGDX1", ["chainNo", "promotionYear", "promotionCd", "goodsCd"], {})
@Entity("MPROGDTB")
export class PromotionDetail {
    @PrimaryColumn("varchar2", { name: "CHAIN_NO", length: 4 })
    chainNo: string;

    @PrimaryColumn("varchar2", { name: "MS_NO", length: 6 })
    msNo: string;

    @PrimaryColumn("varchar2", { name: "PROMOTION_YEAR", length: 4 })
    promotionYear: string;

    @PrimaryColumn("varchar2", { name: "PROMOTION_CD", length: 4 })
    promotionCd: string;

    @Column("varchar2", { name: "GOODS_CD", length: 20 })
    goodsCd: string;

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

    @Column("varchar2", { name: "GEN_DC_FG", length: 1, default: () => "'0'" })
    genDcFg: string;

    @Column("number", {
        name: "GEN_AMT",
        precision: 7,
        scale: 0,
        default: () => "0",
    })
    genAmt: number;

    @Column("number", {
        name: "GEN_DC",
        precision: 5,
        scale: 2,
        default: () => "0",
    })
    genDc: number;

    @Column("varchar2", { name: "GOODS_ADD_FG", length: 1, default: () => "'0'" })
    goodsAddFg: string;

    @ManyToOne(() => PromotionHeader, res => res.promotionDetails)
    @JoinColumn([
        { name: 'PROMOTION_YEAR', referencedColumnName: 'promotionYear' },
        { name: 'PROMOTION_CD', referencedColumnName: 'promotionCd' },
        { name: 'MS_NO', referencedColumnName: 'msNo' },
    ])
    promotionHeader: PromotionHeader
}
