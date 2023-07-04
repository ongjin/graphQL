import { PrimaryColumn, Column, Entity } from "typeorm";

@Entity("TOKEN_TEMP")
export class TokenTemp {
    @PrimaryColumn({ name: 'USER_NO' })
    userNo: number;

    @Column("varchar2", { name: "USER_TOKEN", length: 500 })
    userToken: string;
}

