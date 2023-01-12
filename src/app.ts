import express from 'express'

import cors from 'cors'
import { database } from './database/database'
import { userRouter } from './routes/UserRoutes'
import authMiddleware from './middlewares/authMiddleware'
import { boardController } from './controllers/BoardController'
import { boardRouter } from './routes/BoardRoutes'
import { boardTaskRouter } from './routes/BoardTaskRoutes'
import { taskRouter } from './routes/TaskRoutes'

database
    .initialize().then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization:", err)
    })


const app = express()

app.use(express.json())
app.use(cors())


app.use("/user", userRouter)
app.use(authMiddleware)
app.use("/users", userRouter)
app.use("/boards", boardRouter)
app.use("/board-tasks", boardTaskRouter)
app.use("/tasks", taskRouter)

export {app}