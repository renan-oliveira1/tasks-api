import { database } from "../database/database";
import { BoardTask } from "../entities/BoardTask";
import { IRepository } from "./IRepository";

export class BoardTaskRepository implements IRepository<BoardTask, string>{
    private repository = database.getRepository(BoardTask)

    save(task: BoardTask): Promise<BoardTask> {
        return this.repository.save(task)
    }
    update(task: BoardTask): Promise<BoardTask> {
        return this.repository.save(task)
    }
    findAll(): Promise<BoardTask[]> {
        return this.repository.find({
            relations: {board: true}
        })
    }
    findById(id: string): Promise<BoardTask> {
        return this.repository.findOneBy({
            id: id
        })
    }
    delete(task: BoardTask): Promise<BoardTask> {
        return this.repository.remove(task)
    }

    findAllByBoard(boardId: string): Promise<BoardTask[]> {
        
        return this.repository.createQueryBuilder('task')
            .where("task.boardId = :id", { id: boardId })
            .getMany()
    }
}