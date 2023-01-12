import { Response, Request, Router } from "express";
import { taskController } from "../controllers/TaskController";


const taskRouter = Router()

taskRouter.post('', (request: Request, response: Response) =>{
    return taskController.save(request, response)
})

taskRouter.get('/:id', (request: Request, response: Response) =>{
    return taskController.findById(request, response)
})

taskRouter.get('', (request: Request, response: Response) =>{
    return taskController.findAllUserTasks(request, response)
})

taskRouter.put('', (request: Request, response: Response) =>{
    return taskController.update(request, response)
})

taskRouter.patch('', (request: Request, response: Response) =>{
    return taskController.updateStatus(request, response)
})

taskRouter.delete('/:id', (request: Request, response: Response) =>{
    return taskController.delete(request, response)
})

export {taskRouter}