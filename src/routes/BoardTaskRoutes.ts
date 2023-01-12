import { Response, Request, Router } from "express";
import { boardTaskController } from "../controllers/BoardTaskController";


const boardTaskRouter = Router()

boardTaskRouter.post('', (request: Request, response: Response) =>{
    return boardTaskController.save(request, response)
})

boardTaskRouter.get('/:id', (request: Request, response: Response) =>{
    return boardTaskController.findById(request, response)
})

boardTaskRouter.put('', (request: Request, response: Response) =>{
    return boardTaskController.update(request, response)
})

boardTaskRouter.patch('', (request: Request, response: Response) =>{
    return boardTaskController.updateStatus(request, response)
})

boardTaskRouter.delete('/:id', (request: Request, response: Response) =>{
    return boardTaskController.delete(request, response)
})

export {boardTaskRouter}