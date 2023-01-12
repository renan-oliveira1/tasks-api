import { Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { BoardTask } from "./BoardTask";
import { User } from "./User";


@Entity()
export class Board{

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    name: string

    @ManyToMany(() => User, {eager: true, onDelete: 'CASCADE'})
    @JoinTable()
    users: User[]

    @OneToMany(() => BoardTask, (task) => task.board, {onDelete: 'CASCADE'})
    @JoinTable()
    tasks: BoardTask[]
}

