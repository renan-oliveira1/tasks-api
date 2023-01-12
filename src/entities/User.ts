import { hashSync } from "bcrypt"
import { BeforeInsert, BeforeUpdate, Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { Board } from "./Board"
import { Task } from "./Task"

@Entity()
export class User{
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    username: string

    @Column()
    email: string

    @Column()
    password: string

    @ManyToMany(() => Board)
    boards: Board[]

    @OneToMany(() => Task, (task) => task.user, {onDelete: 'CASCADE'})
    tasks: Task[]
}