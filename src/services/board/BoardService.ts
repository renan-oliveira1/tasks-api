import { Board } from "../../entities/Board";
import { BoardRepository } from "../../repositories/BoardRepository";
import { UserRepository } from "../../repositories/UserRepository";
import { InvalidUserError } from "../users/InvalidUserError";
import { InvalidBoardError } from "./InvalidBoardError";

class BoardService{
    constructor(private repository: BoardRepository, private userRepository: UserRepository){}

    async create(board: Board){
        if(!board.name){
            throw new InvalidBoardError('Invalid board name!!')
        }

        return this.repository.save(board)
    }

    async findAll(idUser: string){
        return this.repository.findAllByUser(idUser)
    }

    async findById(id: string){
        const boardExists =  await this.repository.findById(id)
        console.log(boardExists)
        if(!boardExists){
            throw new InvalidBoardError('Invalid board id!!')
        }
        return boardExists
    }

    async remove(idBoard: string){
        const boardExists =  await this.repository.findById(idBoard)
        if(!boardExists){
            throw new InvalidBoardError('Invalid board id!!')
        }
        return this.repository.delete(boardExists)
    }

    async addUserInBoard(idBoard:string, idUser: string){
        const boardExists =  await this.repository.findById(idBoard)
        if(!boardExists){
            throw new InvalidBoardError('Invalid board id!!')
        }

        const userExists = await this.userRepository.findById(idUser)
        if(!boardExists){
            throw new InvalidUserError('Invalid user!!')
        }

        boardExists.users.push(userExists)
        
        return this.repository.update(boardExists)

    }

    async removeUserInBoard(idBoard:string, idUser: string){
        const boardExists =  await this.repository.findById(idBoard)
        if(!boardExists){
            throw new InvalidBoardError('Invalid board id!!')
        }

        const userExists = await this.userRepository.findById(idUser)
        if(!boardExists){
            throw new InvalidUserError('Invalid user!!')
        }

        const filteredUsers = boardExists.users.filter( user => {
            return user.id != userExists.id
        })

        boardExists.users = filteredUsers
        
        return this.repository.update(boardExists)

    }
}

export const boardService = new BoardService(new BoardRepository, new UserRepository)