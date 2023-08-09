import { Column, Entity, Index, PrimaryColumn, PrimaryGeneratedColumn, JoinColumn, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity("TODO_TEMP", { orderBy: { todoId: "ASC", todoNo: "ASC" } })
export class Todo {
    @PrimaryGeneratedColumn({ name: "TODO_NO" })
    todoNo: number
    @Column({ name: "TODO_NM" })
    todoNm: string
    @Column({ name: "TODO_ID" })
    todoId: number
    @CreateDateColumn({ name: "CREATE_DATE", default: () => "CURRENT_TIMESTAMP(6)" })
    createDate: Date
    @UpdateDateColumn({ name: "UPDATE_DATE", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)" })
    updateDate: Date
}
