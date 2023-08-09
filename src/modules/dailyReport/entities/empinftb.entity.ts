import { Column, Entity, Index, PrimaryColumn, JoinColumn, ManyToOne } from "typeorm";

@Index("EMPINFX0", ["empNo"], { unique: true })
@Index("EMPINFX1", ["deptCd", "empNo"], {})
@Entity("EMPINFTB")
export class Empinftb {
    @Column("varchar2", { name: "ZIP_NO", nullable: true, length: 6 })
    zipNo: string | null;

    @Column("number", {
        name: "USE_POINT",
        precision: 3,
        scale: 0,
        default: () => "0",
    })
    usePoint: number;

    @Column("varchar2", { name: "USER_ID", nullable: true, length: 20 })
    userId: string | null;

    @Column("char", {
        name: "TIME_FG",
        nullable: true,
        length: 1,
        default: () => "'0'",
    })
    timeFg: string | null;

    @Column("varchar2", { name: "TEL_NO", nullable: true, length: 15 })
    telNo: string | null;

    @Column("varchar2", { name: "TEAM_CD", nullable: true, length: 4 })
    teamCd: string | null;

    @Column("varchar2", { name: "STREET_FG", nullable: true, length: 1 })
    streetFg: string | null;

    @Column("char", { name: "STATUS_FG", length: 1 })
    statusFg: string;

    @Column("char", { name: "START_DATE", length: 8 })
    startDate: string;

    @Column("char", { name: "SEX", length: 1 })
    sex: string;

    @Column("char", { name: "SAWON_FG", length: 1 })
    sawonFg: string;

    @Column("char", { name: "ROLL_FG", length: 1, default: () => "'G'" })
    rollFg: string;

    @Column("number", {
        name: "PSS_POINT",
        precision: 3,
        scale: 0,
        default: () => "0",
    })
    pssPoint: number;

    @Column("varchar2", { name: "PHOTO", nullable: true, length: 20 })
    photo: string | null;

    @Column("char", { name: "PG_ADMIN_FG", length: 1, default: () => "'1'" })
    pgAdminFg: string;

    @Column("varchar2", { name: "PASSWD_RESET_FG", nullable: true, length: 1 })
    passwdResetFg: string | null;

    @Column("varchar2", { name: "PASSWD", length: 80, default: () => "'0'" })
    passwd: string;

    @Column("varchar2", { name: "OLD_PASSWD", nullable: true, length: 60 })
    oldPasswd: string | null;

    @Column("varchar2", { name: "NEW_ZIP_NO", nullable: true, length: 10 })
    newZipNo: string | null;

    @Column("varchar2", {
        name: "NEW_ADDRESS_BUNJI",
        nullable: true,
        length: 120,
    })
    newAddressBunji: string | null;

    @Column("varchar2", { name: "NEW_ADDRESS", nullable: true, length: 120 })
    newAddress: string | null;

    @Column("varchar2", { name: "MAIN_TECH_FG", nullable: true, length: 1 })
    mainTechFg: string | null;

    @Column("char", { name: "LS_FG", length: 1 })
    lsFg: string;

    @Column("number", {
        name: "LOS_POINT",
        precision: 3,
        scale: 0,
        default: () => "0",
    })
    losPoint: number;

    @Column("number", {
        name: "LAT_POINT",
        precision: 3,
        scale: 0,
        default: () => "0",
    })
    latPoint: number;

    @Column("varchar2", { name: "LAST_LOGIN_DATE", nullable: true, length: 8 })
    lastLoginDate: string | null;

    @Column("char", { name: "LAST_DATE", nullable: true, length: 8 })
    lastDate: string | null;

    @Column("varchar2", { name: "IP_ADDRESS", nullable: true, length: 20 })
    ipAddress: string | null;

    @Column("char", { name: "IPCONTROL_FG", length: 1, default: () => "'0'" })
    ipcontrolFg: string;

    @Column("char", { name: "INLINE", nullable: true, length: 3 })
    inline: string | null;

    @Column("varchar2", { name: "HP_NO", length: 15 })
    hpNo: string;

    @Column("varchar2", { name: "GRADE_FG", nullable: true, length: 1 })
    gradeFg: string | null;

    @Column("varchar2", { name: "E_MAIL", length: 50 })
    eMail: string;

    @Column("char", { name: "END_DATE", nullable: true, length: 8 })
    endDate: string | null;

    @PrimaryColumn("char", { name: "EMP_NO", length: 4 })
    empNo: string;

    @Column("varchar2", { name: "EMP_NM", length: 10 })
    empNm: string;

    @Column("varchar2", { name: "EMP_LEVEL", nullable: true, length: 1 })
    empLevel: string | null;

    @Column("varchar2", { name: "EMERGENCY_TEL", nullable: true, length: 15 })
    emergencyTel: string | null;

    @Column("char", { name: "EDIT_FG", nullable: true, length: 1 })
    editFg: string | null;

    @PrimaryColumn("varchar2", { name: "DEPT_CD", length: 2 })
    deptCd: string | null;

    @Column("char", { name: "CREATE_DATE", length: 8 })
    createDate: string;

    @Column("char", { name: "CONFIRM_FG", length: 1, default: () => "'0'" })
    confirmFg: string;

    @Column("varchar2", { name: "CLASS_FG", nullable: true, length: 1 })
    classFg: string | null;

    @Column("varchar2", { name: "CHANGE_PW_DATE", nullable: true, length: 8 })
    changePwDate: string | null;

    @Column("char", { name: "BIRTH_DAY", length: 8 })
    birthDay: string;

    @Column("varchar2", { name: "ADDRESS_BUNJI", nullable: true, length: 100 })
    addressBunji: string | null;

    @Column("varchar2", { name: "ADDRESS", nullable: true, length: 100 })
    address: string | null;
}
