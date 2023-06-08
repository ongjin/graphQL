import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn } from 'typeorm';


@Entity({ name: 'USERS_TEMP', orderBy: {USER_NO: 'ASC'} })
export class Users_Temp {
    // @PrimaryGeneratedColumn({name: 'USER_NO'})
    // // @PrimaryColumn({name: "USER_NO"})
    // userNo: number;

    // @Column({name: 'USER_ID'})
    // userId: string;
    // @Column({name: 'USER_PW'})
    // userPw: string;
    // @Column({name: 'USER_EMAIL'})
    // userEmail: string;
    // @Column({name: 'USER_PHONE'})
    // userPhone: string;
    // @Column({ type: 'date', name: 'USER_JADATE' })
    // userJADate: string;
    // @Column({name: 'USER_NAME'})
    // userName: string;

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

}



