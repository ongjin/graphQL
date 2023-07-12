import { Index, Entity, Column, PrimaryColumn, OneToOne, JoinColumn, CreateDateColumn, UpdateDateColumn, PrimaryGeneratedColumn, BeforeInsert, BeforeUpdate } from 'typeorm';
import { TokenTemp } from './token.entity';

@Index("SYS_C0080355", ["userNo"], { unique: true })
@Entity("USERS_TEMP", { orderBy: { userNo: "ASC" } })
export class UsersTemp {
    @PrimaryColumn("number", { primary: true, name: "USER_NO" })
    userNo: number;

    @Column("varchar2", { name: "USER_ID", length: 100 })
    userId: string;

    @Column("varchar2", { name: "USER_PW", length: 256 })
    userPw: string;

    @Column("varchar2", { name: "USER_EMAIL", length: 100 })
    userEmail: string;

    @Column("varchar2", { name: "USER_PHONE", length: 11 })
    userPhone: string;

    // @Column("date", {
    //     name: "USER_JADATE",
    //     nullable: true,
    //     default: () => "CURRENT_TIMESTAMP(6)",
    // })
    @CreateDateColumn({ name: 'USER_JADATE', type: 'date' })
    userJadate: Date | null;

    // @Column("date", {
    //     name: "UPDATE_AT",
    //     nullable: true,
    //     default: () => "CURRENT_TIMESTAMP(6)",
    //     onUpdate: "CURRENT_TIMESTAMP(6)",
    // })
    @UpdateDateColumn({ name: 'UPDATE_AT' })
    updateAt: string | null;


    @Column("varchar2", { name: "USER_NAME", length: 30 })
    userName: string;

    @OneToOne(() => TokenTemp)
    @JoinColumn([
        { name: 'USER_NO', referencedColumnName: 'userNo' }
    ])
    tokenTemp: Promise<TokenTemp>;
}

