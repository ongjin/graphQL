import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn, OneToOne, JoinColumn } from 'typeorm';


@Entity({ name: 'USERS_TEMP', orderBy: { USER_NO: 'ASC' } })
export class Users_Temp {
    @PrimaryGeneratedColumn()
    USER_NO: number;


    @Column()
    USER_ID: string;
    @Column()
    USER_PW: string;
    @Column()
    USER_EMAIL: string;
    @Column()
    USER_PHONE: string;
    @Column({ type: 'date' })
    USER_JADATE: string;
    @Column()
    USER_NAME: string;

    @OneToOne(() => TokenTb, token => token.usersTemp)
    @JoinColumn([
        { name: 'USER_NO', referencedColumnName: 'USER_NO' }
    ])
    token: Promise<TokenTb>;
}


@Entity({ name: 'TOKEN_TEMP', orderBy: { USER_NO: 'ASC' } })
export class TokenTb {
    @PrimaryColumn()
    USER_NO: number;

    @Column()
    USER_TOKEN: string;

    @OneToOne(() => Users_Temp, usersTemp => usersTemp.token)
    usersTemp: Users_Temp;
}



