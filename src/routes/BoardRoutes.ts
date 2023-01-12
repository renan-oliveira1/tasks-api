import { Request, Response, Router } from "express";
import { boardController } from "../controllers/BoardController";

const boardRouter = Router()

boardRouter.post('', (request: Request, response: Response) => {
    boardController.create(request, response)
})

boardRouter.get('/:id', (request: Request, response: Response) => {
    boardController.findById(request, response)
})

boardRouter.get('', (request: Request, response: Response) => {
    boardController.findAll(request, response)
})

boardRouter.delete('/:id', (request: Request, response: Response) => {
    boardController.delete(request, response)
})

boardRouter.patch('/add-user', (request: Request, response: Response) => {
    boardController.addUserInBoard(request, response)
})

boardRouter.patch('/remove-user', (request: Request, response: Response) => {
    boardController.removeUserInBoard(request, response)
})


export{boardRouter}