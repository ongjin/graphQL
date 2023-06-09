import { Column, Entity, Index, PrimaryColumn } from "typeorm";

@Index("MMEMBSX0", ["msId"], { unique: true })
@Index("MMEMBSX1", ["msNo"], { unique: true })
@Index("MMEMBSX2", ["chainNo", "msNo"], {})
@Index("MMEMBSX3", ["chainHqYn", "msNo"], {})
@Index("MMEMBSX4", ["chainNo", "chainHqYn", "msNo"], {})
@Index("MMEMBSX5", ["zipNo"], {})
@Index("MMEMBSX6", ["chainHqYn", "openDate"], {})
@Entity({ name: 'MMEMBSTB', orderBy: { MS_NO: "ASC" } })
export class Member {
    @Column("varchar2", { name: "ADDRESS", length: 60 })
    address: string;

    @Column("varchar2", { name: "ADDRESS_BUNJI", length: 50 })
    addressBunji: string;

    @Column("varchar2", { name: "BANK_CD", length: 2 })
    bankCd: string;

    @Column("varchar2", { name: "ACCT_CD", length: 20 })
    acctCd: string;

    @Column("varchar2", { name: "ACCT_NM", length: 20 })
    acctNm: string;

    @Column("varchar2", { name: "BIZ_FG", length: 1, default: () => "'0'" })
    bizFg: string;

    @Column("varchar2", { name: "VAT_TYPE", length: 1, default: () => "'0'" })
    vatType: string;

    @Column("varchar2", { name: "OPEN_DATE", nullable: true, length: 8 })
    openDate: string | null;

    @Column("varchar2", { name: "START_DATE", nullable: true, length: 8 })
    startDate: string | null;

    @Column("varchar2", { name: "USE_YN", length: 1, default: () => "'Y'" })
    useYn: string;

    @Column("varchar2", { name: "HEAD_MSG", nullable: true, length: 160 })
    headMsg: string | null;

    @Column("varchar2", { name: "TAIL_MSG", nullable: true, length: 160 })
    tailMsg: string | null;

    @Column("varchar2", { name: "OPEN_FG", length: 1, default: () => "'1'" })
    openFg: string;

    // @Column("varchar2", { name: "L_CATEGORY_CD", nullable: true, length: 3 })
    // lCategoryCd: string | null;

    // @Column("varchar2", { name: "S_CATEGORY_CD", nullable: true, length: 2 })
    // sCategoryCd: string | null;

    @Column("varchar2", { name: "CREATE_ID", length: 20 })
    createId: string;

    // @Column("varchar2", { name: "CREATE_DTIME", length: 14 })
    // createDtime: string;

    @Column("varchar2", { name: "LAST_ID", length: 20 })
    lastId: string;

    // @Column("varchar2", { name: "LAST_DTIME", length: 14 })
    // lastDtime: string;

    // @Column("varchar2", {
    //     name: "MAIN_CHAIN_YN",
    //     length: 1,
    //     default: () => "'N'",
    // })
    // mainChainYn: string;

    @Column("char", { name: "NOCOST_FG", length: 1, default: () => "'N'" })
    nocostFg: string;

    @Column("char", { name: "UCOST_FG", length: 1, default: () => "'1'" })
    ucostFg: string;

    @Column("char", { name: "USUPRICE_FG", length: 1, default: () => "'1'" })
    usupriceFg: string;

    // @Column("varchar2", { name: "MS_FG", nullable: true, length: 1 })
    // msFg: string | null;

    // @Column("number", {
    //     name: "SEAT",
    //     nullable: true,
    //     precision: 10,
    //     scale: 0,
    //     default: () => "0",
    // })
    // seat: number | null;

    // @Column("varchar2", { name: "SAP_MS_CD", nullable: true, length: 10 })
    // sapMsCd: string | null;

    @Column("varchar2", { name: "E_MASTER_NM", nullable: true, length: 20 })
    eMasterNm: string | null;

    @Column("varchar2", { name: "E_MAIL_ADDR", nullable: true, length: 50 })
    eMailAddr: string | null;

    @Column("varchar2", { name: "E_HP_NO", nullable: true, length: 15 })
    eHpNo: string | null;

    @Column("varchar2", { name: "NEW_ZIP_NO", nullable: true, length: 10 })
    newZipNo: string | null;

    @Column("varchar2", { name: "NEW_ADDRESS", nullable: true, length: 120 })
    newAddress: string | null;

    @Column("varchar2", {
        name: "NEW_ADDRESS_BUNJI",
        nullable: true,
        length: 120,
    })
    newAddressBunji: string | null;

    @Column("varchar2", {
        name: "STREET_FG",
        nullable: true,
        length: 1,
        default: () => "'0'",
    })
    streetFg: string | null;

    // @Column("number", {
    //     name: "TAX_REF_RATIO",
    //     nullable: true,
    //     precision: 2,
    //     scale: 0,
    //     default: "",
    // })
    // taxRefRatio: number | null;

    // @Column("varchar2", {
    //     name: "KKA_USE_YN",
    //     nullable: true,
    //     length: 1,
    //     default: () => "'N'",
    // })
    // kkaUseYn: string | null;

    // @Column("varchar2", { name: "YELLOWID_KEY", nullable: true, length: 40 })
    // yellowidKey: string | null;

    // @Column("char", { name: "USERCODE", nullable: true, length: 30 })
    // usercode: string | null;

    // @Column("char", { name: "DEPTCODE", nullable: true, length: 30 })
    // deptcode: string | null;

    // @Column("varchar2", { name: "RESEND_YN", nullable: true, length: 1 })
    // resendYn: string | null;

    @Column("varchar2", { name: "MS_ID", length: 8 })
    msId: string;

    @Column("varchar2", { name: "PASSWD", length: 80 })
    passwd: string;

    @Column("varchar2", { name: "MS_TYPE", length: 1, default: () => "'0'" })
    msType: string;

    // @Column("varchar2", { length: 6 })
    @PrimaryColumn({ name: "MS_NO" })
    msNo: string;

    @Column("varchar2", { name: "MS_NM", length: 30 })
    msNm: string;

    @Column("varchar2", { name: "MS_ENG_NM", nullable: true, length: 40 })
    msEngNm: string | null;

    @Column("varchar2", { name: "CHAIN_NO", length: 4, default: () => "'0000'" })
    chainNo: string;

    @Column("varchar2", { name: "CHAIN_HQ_YN", length: 1, default: () => "'N'" })
    chainHqYn: string;

    @Column("varchar2", { name: "CHAIN_AREA", length: 4, default: () => "'000'" })
    chainArea: string;

    @Column("varchar2", { name: "BIZ_NO", length: 10 })
    bizNo: string;

    @Column("varchar2", { name: "BS_TYPE", length: 30 })
    bsType: string;

    @Column("varchar2", { name: "BS_KIND", length: 30 })
    bsKind: string;

    @Column("varchar2", { name: "MASTER_NM", length: 10 })
    masterNm: string;

    @Column("varchar2", { name: "RESI_NO", length: 13 })
    resiNo: string;

    @Column("varchar2", { name: "TEL_NO", length: 15 })
    telNo: string;

    @Column("varchar2", { name: "HP_NO", nullable: true, length: 15 })
    hpNo: string | null;

    @Column("varchar2", { name: "EMG_NO", length: 15 })
    emgNo: string;

    @Column("varchar2", { name: "FAX_NO", nullable: true, length: 15 })
    faxNo: string | null;

    @Column("varchar2", { name: "E_MAIL", nullable: true, length: 30 })
    eMail: string | null;

    @Column("varchar2", { name: "HOMEPAGE", nullable: true, length: 50 })
    homepage: string | null;


    @Column("varchar2", { name: "ZIP_NO", length: 6 })
    zipNo: string;

    @Column("varchar2", { name: "BILL_ADDR", length: 40 })
    billAddr: string;
}


