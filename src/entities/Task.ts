    import { Column, Entity, JoinTable, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";

@Entity()
export class Task{

   @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    name: string

    @Column()
    description: string

    @Column({type: 'date'})
    date: string

    @Column({default: false})
    complete: boolean

    @ManyToOne(() => User, (user) => user.tasks)
    user: User
}