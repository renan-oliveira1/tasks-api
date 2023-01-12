import { DataSource } from "typeorm";
import { Board } from "../entities/Board";
import { BoardTask } from "../entities/BoardTask";
import { Task } from "../entities/Task";
import { User } from "../entities/User";

export const database= new DataSource({
    type: 'sqlite',
    database: 'tasks-database.db',
    synchronize: true,
    entities: [BoardTask, User, Board, Task],
    subscribers: [],
    migrations: []
})