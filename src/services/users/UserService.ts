import { compareSync, hashSync } from "bcrypt";
import { sign } from "jsonwebtoken";
import { User } from "../../entities/User";
import { UserRepository } from "../../repositories/UserRepository";
import { EmailAlreadyRegisteredError } from "./EmailAlreadyRegisteredError";
import { InvalidUserError } from "./InvalidUserError";
//import .env
require('dotenv').config()


class UserService{

    constructor(private repository: UserRepository){}

    async login(email: string, password: string){
        const userExists = await this.repository.findByEmail(email)

        if(!userExists){
            throw new InvalidUserError("Email not registered!!")
        }

        const isValidPassword = compareSync(password, userExists.password)
        console.log(compareSync(password, userExists.password))

        if(!isValidPassword){
            throw new InvalidUserError("Password incorrected!!")
        }

        const token = sign(
            {id: userExists.id},
            process.env.SECRET_KEY,
            {expiresIn: "1d"}
        )
        console.log(token)

        delete userExists.password


        return { 
            user: userExists,
            token
        }
    }

    async save(user: User){
        const userExists = await this.repository.findByEmail(user.email)

        if(userExists){
            throw new EmailAlreadyRegisteredError("Email already registered!!")
        }

        const hash = hashSync(user.password, 10)
        user.password = hash

        const newUser = await this.repository.save(user)

        const token = sign(
            {id: newUser.id},
            process.env.SECRET_KEY,
            {expiresIn: "1d"}
        )
        delete newUser.password

        return { 
            user: newUser,
            token
        }
    }

    async findAll(){
        const allUsers = this.repository.findAll()

        return allUsers
    }

}

export const userService = new UserService(new UserRepository)