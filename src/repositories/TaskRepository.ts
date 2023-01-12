import { database } from "../database/database";
import { Task } from "../entities/Task";
import { IRepository } from "./IRepository";

export class TaskRepository implements IRepository<Task, string>{
    private repository =  database.getRepository(Task)

    save(args: Task): Promise<Task> {
        return this.repository.save(args)
    }
    update(args: Task): Promise<Task> {
        return this.repository.save(args)
    }
    findAll(): Promise<Task[]> {
        throw new Error("Method not implemented.");
    }
    findById(id: string): Promise<Task> {
        return this.repository.findOneBy({id:id})
    }
    delete(args: Task): Promise<Task> {
        return this.repository.remove(args)
    }

    findUserTasks(userId: string): Promise<Task[]>{
        return this.repository.createQueryBuilder('task')
            .where("task.userId = :id", { id: userId })
            .getMany()
    }

}