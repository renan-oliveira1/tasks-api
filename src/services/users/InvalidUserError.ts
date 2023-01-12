export class InvalidUserError extends Error{

    constructor(msg: string){
        super()

        this.message = msg
    }
}