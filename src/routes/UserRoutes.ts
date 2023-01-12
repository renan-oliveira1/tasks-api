import { Request, Response, Router } from "express";
import { userControler } from "../controllers/UserController";
import authMiddleware from "../middlewares/authMiddleware";

const userRouter = Router()

userRouter.post('/register', (request: Request, response: Response) =>{
    return userControler.register(request, response)
})

userRouter.post('/login', (request: Request, response: Response) =>{
    return userControler.login(request, response)
})

userRouter.get('', (request: Request, response: Response) =>{
    return userControler.findAll(request, response)
})


export {userRouter}