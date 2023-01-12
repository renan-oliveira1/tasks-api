import { boardService } from "../services/board/BoardService"
import { Request, Response } from "express";

class BoardController{

    async create(request: Request, response: Response){
        try {
            request.body.users= [{id: request.userId}]

            const result = await boardService.create(request.body)
            return response.status(201).send(result)
            
        } catch (error) {
            return response.status(401).json(error)
        }
    }

    async findAll(request: Request, response: Response){
        try {
            const result = await boardService.findAll(request.userId)
            return response.status(201).send(result)
            
        } catch (error) {
            return response.status(401).json(error)
        }
    }

    async findById(request: Request, response: Response){
        try {
            const idBoard = request.params.id
            const result = await boardService.findById(idBoard)
            return response.status(201).send(result)
            
        } catch (error) {
            return response.status(401).json(error)
        }
    }

    async delete(request: Request, response: Response){
        try {
            const idBoard = request.params.id
            const result = await boardService.remove(idBoard)
            return response.status(201).send(result)
            
        } catch (error) {
            return response.status(401).json(error)
        }
    }

    async addUserInBoard(request: Request, response: Response){
        try {
            const idBoard = request.body.idBoard
            const idUser = request.body.idUser
            const result = await boardService.addUserInBoard(idBoard, idUser)
            return response.status(201).send(result)
            
        } catch (error) {
            return response.status(401).json(error)
        }
    }

    async removeUserInBoard(request: Request, response: Response){
        try {
            const idBoard = request.body.idBoard
            const idUser = request.body.idUser
            const result = await boardService.removeUserInBoard(idBoard, idUser)
            return response.status(201).send(result)
            
        } catch (error) {
            return response.status(401).json(error)
        }
    }

}

export const boardController = new BoardController()