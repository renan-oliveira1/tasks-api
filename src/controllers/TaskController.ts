import { json, Request, Response } from "express";
import { Task } from "../entities/Task";
import { taskService } from "../services/tasks/TaskService";

class TaskController{

    async save(request: Request, response: Response){
        try{
            request.body.user = [{id: request.userId}]

            const result = await taskService.create(request.body)
            return response.status(201).send(result)
        }catch(error){
            return response.status(401).json(error)
        }
    }

    async findAllUserTasks(request: Request, response: Response){
        try{
            const idUser = request.userId
            const result = await taskService.findAll(idUser)

            return response.status(201).send(result)
        }catch(error){
            return response.status(401).json(error)
        }
    }

    async findById(request: Request, response: Response){
        try{
            const idTask = request.params.id
            const result = await taskService.find(idTask)

            return response.status(201).send(result)
        }catch(error){
            return response.status(401).json(error)
        }
    }

    async update(request: Request, response: Response){
        try{
            const task: Task = request.body
            const result = await taskService.update(task)

            return response.status(201).send(result)
        }catch(error){
            return response.status(401).json(error)
        }
    }

    async delete(request: Request, response: Response){
        try{
            const idTask = request.params.id
            const result = await taskService.remove(idTask)

            return response.status(201).send(result)
        }catch(error){
            return response.status(401).json(error)
        }
    }

    async updateStatus(request: Request, response: Response){
        try{
            const idTask = request.body.id
            const complete = request.body.complete
            const result = await taskService.status(idTask, complete)

            return response.status(201).send(result)
        }catch(error){
            return response.status(401).json(error)
        }
    }

}

const taskController = new TaskController()

export {taskController}