import { Column, Entity, Index, PrimaryColumn } from "typeorm";


@Entity({ name: 'public.account_account', orderBy: { id: "ASC" } })
export class Account {
    @PrimaryColumn()
    id: number;

    @Column()
    message_main_attachment_id: number;
    @Column()
    currency_id: number;
    @Column()
    company_id: number;
    @Column()
    group_id: number;
    @Column()
    root_id: number;
    @Column()
    create_uid: number;
    @Column()
    write_uid: number;

    @Column()
    name: string;
    @Column()
    code: string;
    @Column()
    account_type: string;
    @Column()
    internal_group: string;
    @Column()
    note: string;

    @Column()
    deprecated: boolean;
    @Column()
    include_initial_balance: boolean;
    @Column()
    reconcile: boolean;
    @Column()
    is_off_balance: boolean;
    @Column()
    non_trade: boolean;

    @Column({
        type: 'timestamptz',
        default: () => 'NOW()',
    })
    @Index()
    create_date: Date;

    @Column({
        type: 'timestamptz',
        nullable: true,
    })
    @Index()
    write_date: Date;

}


