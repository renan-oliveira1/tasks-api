import { Task } from "../../entities/Task"
import { User } from "../../entities/User"
import { TaskRepository } from "../../repositories/TaskRepository"
import { UserRepository } from "../../repositories/UserRepository"
import { InvalidTaskError } from "./InvalidTaskError"


class TaskService{
    constructor(private taskRepository: TaskRepository, private userRepository: UserRepository){}

    async create(task: Task){
        if(!task.name){
            throw new InvalidTaskError('Invalid task name!!')
        }

        if(!task.description){
            throw new InvalidTaskError('Invalid task description!!')
        }

        const userExists = await this.userRepository.findById(task.user.id)

        if(!userExists){
            throw new InvalidTaskError('Invalid user!!')
        }

        task.user = userExists

        return this.taskRepository.save(task)
    }

    async findAll(idUser: string){
        return this.taskRepository.findUserTasks(idUser)
    }

    async find(idTask: string){
        const taskExists = await this.taskRepository.findById(idTask)

        if(!taskExists){
            throw new InvalidTaskError('Task not found!!')
        }

        return taskExists
    }

    async update(task: Task){
        const taskExists = this.taskRepository.findById(task.id)

        if(!taskExists){
            throw new InvalidTaskError('Task with id '+ task.id + ' not found!!')
        }

        if(!task.name){
            throw new InvalidTaskError('Invalid task name!!')
        }

        if(!task.description){
            throw new InvalidTaskError('Invalid task description!!')
        }

        return this.taskRepository.update(task)
    }

    async remove(idTask: string){
        const taskExists = await this.taskRepository.findById(idTask)

        if(!taskExists){
            throw new InvalidTaskError('Task not found!!')
        }

        return this.taskRepository.delete(taskExists)
    }

    async status(id: string, status: boolean){
        const taskExists = await this.taskRepository.findById(id)

        if(!taskExists){
            throw new InvalidTaskError('Task with id '+ id + ' not found!!')
        }

        taskExists.complete = status

        return this.taskRepository.update(taskExists)
    }
}

export const taskService = new TaskService(new TaskRepository, new UserRepository)