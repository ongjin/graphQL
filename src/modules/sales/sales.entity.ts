import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn, Unique, ManyToOne, OneToMany, JoinColumn, OneToOne } from 'typeorm';


@Entity({ name: 'STRNHDTB', orderBy: { SALE_DATE: 'DESC' } })
@Unique(['SALE_DATE', 'MS_NO', 'POS_NO', 'BILL_NO'])
export class SalesHD {
    @PrimaryColumn()
    SALE_DATE: string;
    @PrimaryColumn()
    MS_NO: string;
    @PrimaryColumn()
    POS_NO: string;
    @PrimaryColumn()
    BILL_NO: string;

    @Column()
    CHAIN_NO: string;
    @Column()
    CHAIN_AREA: string;
    @Column()
    SALE_FG: string;
    @Column()
    SALE_DTIME: string;
    @Column()
    SALE_TOT: number;
    @Column()
    SALE_AMT: number;
    @Column()
    CASH_AMT: number;
    @Column()
    CARD_AMT: number;
    @Column()
    ETC_AMT: number;
    @Column()
    DC_AMT: number;

    @OneToMany(() => SalesDT, salesDT => salesDT.salesHD)
    salesDTs: SalesDT[]


}

@Entity({ name: 'STRNDTTB' })
@Unique(['SALE_DATE', 'MS_NO', 'POS_NO', 'BILL_NO', 'LINE_NO'])
export class SalesDT {
    @PrimaryColumn()
    SALE_DATE: string;
    @PrimaryColumn()
    MS_NO: string;
    @PrimaryColumn()
    POS_NO: string;
    @PrimaryColumn()
    BILL_NO: string;
    @PrimaryColumn()
    LINE_NO: string;

    @Column()
    CHAIN_NO: string;
    @Column()
    CHAIN_AREA: string;
    @Column()
    SALE_FG: string;
    @Column()
    GOODS_CD: string;
    @Column()
    PACK_FG: string;

    @Column()
    UPRICE: number;
    @Column()
    UCOST: number;
    @Column()
    SALE_QTY: number;
    @Column()
    SALE_TOT: number;
    @Column()
    SALE_AMT: number;
    @Column()
    DC_AMT: number;


    @ManyToOne(() => SalesHD, salesHD => salesHD.salesDTs)
    @JoinColumn([
        { name: 'SALE_DATE', referencedColumnName: 'SALE_DATE' },
        { name: 'MS_NO', referencedColumnName: 'MS_NO' },
        { name: 'POS_NO', referencedColumnName: 'POS_NO' },
        { name: 'BILL_NO', referencedColumnName: 'BILL_NO' },
    ])
    salesHD: SalesHD

    // @OneToOne(() => Mgoodstb, mgoodstb => mgoodstb.salesDT, { eager: true })
    // @JoinColumn([
    //     { name: 'GOODS_CD', referencedColumnName: 'GOODS_CD' },
    //     { name: 'MS_NO', referencedColumnName: 'MS_NO' },
    // ])
    // mgoodstb: Mgoodstb;
}


@Entity({ name: 'MGOODSTB' })
@Unique(['GOODS_CD', 'MS_NO'])
export class Mgoodstb {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    MS_NO: string;

    @Column()
    GOODS_CD: string;

    @Column()
    GOODS_NM: string;


    // @OneToOne(() => SalesDT, salesDT => salesDT.mgoodstb)
    // salesDT: SalesDT;
}