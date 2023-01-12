import { database } from "../database/database";
import { User } from "../entities/User";
import { IRepository } from "./IRepository";

export class UserRepository implements IRepository<User, string>{
    private repository = database.getRepository(User)


    save(user: User): Promise<User> {
        return this.repository.save(user)
    }
    update(user: User): Promise<User> {
        return this.repository.save(user)
    }
    findAll(): Promise<User[]> {
        return this.repository.find()
    }
    findById(id: string): Promise<User> {
        return this.repository.findOneBy({
            id: id
        })
    }
    delete(args: User): Promise<User> {
        throw new Error("Method not implemented.");
    }

    findByEmail(email: string): Promise<User> {
        return this.repository.findOneBy({
            email: email
        })
    }

}