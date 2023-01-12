import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Board } from "./Board";
import { TaskStatus } from "./TaskStatus";

@Entity()
export class BoardTask{

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    name: string

    @Column()
    description: string

    @Column({ type: 'simple-enum', enum: TaskStatus, default: TaskStatus.UNASSIGNED})
    status: TaskStatus

    @ManyToOne(() => Board, (board) => board, {nullable: false, eager: true, onDelete: 'CASCADE'})
    board: string

}