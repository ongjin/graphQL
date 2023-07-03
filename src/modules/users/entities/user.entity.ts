import { ObjectType } from '@nestjs/graphql';
import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn, OneToOne, JoinColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';


@Entity({ name: 'USERS_TEMP', orderBy: { USER_NO: 'ASC' } })
export class Users_Temp {
    // @PrimaryGeneratedColumn('increment')
    @PrimaryGeneratedColumn({ name: 'USER_NO', type: 'number' })
    USER_NO: number;

    @Column()
    USER_ID: string;
    @Column()
    USER_PW: string;
    @Column()
    USER_EMAIL: string;
    @Column()
    USER_PHONE: string;
    // @Column({ type: 'date' })
    @CreateDateColumn()
    USER_JADATE: Date;
    @Column()
    USER_NAME: string;


    @OneToOne(() => TokenTb)
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

    // @OneToOne(() => Users_Temp, usersTemp => usersTemp.token)
    // usersTemp: Users_Temp;
}



