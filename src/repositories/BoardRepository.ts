import { database } from "../database/database";
import { Board } from "../entities/Board";
import { IRepository } from "./IRepository";

export class BoardRepository implements IRepository<Board, string>{

    private repository = database.getRepository(Board)

    save(board: Board): Promise<Board> {
        return this.repository.save(board)
    }
    update(board: Board): Promise<Board> {
        return this.repository.save(board)
    }
    findAll(): Promise<Board[]> {
        throw new Error("Method not implemented.");
    }
    findById(id: string): Promise<Board> {
        return this.repository.findOne({
            where: {id: id},
            relations: {
                users: true,
                tasks: true
            }
        })
    }
    delete(board: Board): Promise<Board> {
        return this.repository.remove(board)
    }

    findAllByUser(userId: string): Promise<Board[]>{
        console.log(userId)
        return this.repository.createQueryBuilder('board')
            .leftJoinAndSelect('board.users', 'users')
            .leftJoinAndSelect('board.tasks', 'tasks')
            .where('userId = :id', {id: userId})
            .getMany()
    }
    
}


