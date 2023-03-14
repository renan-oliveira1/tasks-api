import { Request, Response } from "express";
import { userService } from "../services/users/UserService";

class UserController{
    async register(request: Request, response: Response){
        try {
            const result = await userService.save(request.body)
            return response.status(200).send(result)
            
        } catch (error) {
            return response.status(400).json(error)
        }
    }

    async login(request: Request, response: Response){
        try {
            console.log(request.body)
            const result = await userService.login(request.body.email, request.body.password)
            return response.status(200).send(result)
            
        } catch (error) {
            return response.status(401).json(error.message)
        }
    }

    async findAll(request: Request, response: Response){
        try {
            const result = await userService.findAll()
            return response.status(200).send(result)
            
        } catch (error) {
            return response.status(401).json(error.message)
        }
    }
    
}

export const userControler = new UserController()

