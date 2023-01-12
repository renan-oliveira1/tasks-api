// import { TaskRepository } from "../../repositories/TaskRepository";

import { BoardTask } from "../../entities/BoardTask";
import { TaskStatus } from "../../entities/TaskStatus";
import { BoardRepository } from "../../repositories/BoardRepository";
import { BoardTaskRepository } from "../../repositories/BoardTaskRepository";
import { InvalidBoardError } from "./InvalidBoardError";
import { InvalidTaskError } from "../tasks/InvalidTaskError";

class BoardTaskService{
    constructor(private repository: BoardTaskRepository, private boardRepository: BoardRepository){}

    async create(task: BoardTask){
        if(!task.name){
            throw new InvalidTaskError('Invalid task name!!')
        }

        if(!task.description){
            throw new InvalidTaskError('Invalid task description!!')
        }

        if(!task.board){
            throw new InvalidTaskError('Invalid board!!')
        }
        
        const boardExists = await this.boardRepository.findById(task.board)

        if(!boardExists){
            throw new InvalidBoardError('Invalid board id!!')
        }

        return this.repository.save(task)
    }

    async find(idTask: string){
        const taskExists = await this.repository.findById(idTask)

        if(!taskExists){
            throw new InvalidTaskError('Task not found!!')
        }

        return taskExists
    }

    async update(task: BoardTask){
        const taskExists = this.repository.findById(task.id)

        if(!taskExists){
            throw new InvalidTaskError('Task with id '+ task.id + ' not found!!')
        }

        if(!task.name){
            throw new InvalidTaskError('Invalid task name!!')
        }

        if(!task.description){
            throw new InvalidTaskError('Invalid task description!!')
        }

        if(task.board != task.board){
            throw new InvalidTaskError('Cant trade task from board!!')
        }

        return this.repository.update(task)
    }

    async remove(idTask: string){
        const taskExists = await this.repository.findById(idTask)

        if(!taskExists){
            throw new InvalidTaskError('Task not found!!')
        }

        return this.repository.delete(taskExists)
    }

    async status(id: string, status: TaskStatus){
        const taskExists = await this.repository.findById(id)

        if(!taskExists){
            throw new InvalidTaskError('Task with id '+ id + ' not found!!')
        }

        taskExists.status = status

        return this.repository.update(taskExists)
    }
}

export const boardTaskService = new BoardTaskService(new BoardTaskRepository, new BoardRepository)