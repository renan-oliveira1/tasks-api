import { json, Request, Response } from "express";
import { BoardTask } from "../entities/BoardTask";
import { boardTaskService } from "../services/board/BoardTaskService";

class BoardTaskController{

    async save(request: Request, response: Response){
        try{
            const result = await boardTaskService.create(request.body)
            return response.status(201).send(result)
        }catch(error){
            return response.status(400).json(error)
        }
    }

    async findById(request: Request, response: Response){
        try{
            const idTask = request.params.id
            const result = await boardTaskService.find(idTask)

            return response.status(201).send(result)
        }catch(error){
            return response.status(400).json(error)
        }
    }

    async update(request: Request, response: Response){
        try{
            const task: BoardTask = request.body
            const result = await boardTaskService.update(task)

            return response.status(201).send(result)
        }catch(error){
            return response.status(400).json(error)
        }
    }

    async delete(request: Request, response: Response){
        try{
            const idTask = request.params.id
            const result = await boardTaskService.remove(idTask)

            return response.status(201).send(result)
        }catch(error){
            return response.status(400).json(error)
        }
    }

    async updateStatus(request: Request, response: Response){
        try{
            const idTask = request.body.id
            const status = request.body.status
            const result = await boardTaskService.status(idTask, status)

            return response.status(201).send(result)
        }catch(error){
            return response.status(400).json(error)
        }
    }

}

const boardTaskController = new BoardTaskController()

export {boardTaskController}
