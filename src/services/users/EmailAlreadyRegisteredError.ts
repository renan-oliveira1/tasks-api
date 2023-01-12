export class EmailAlreadyRegisteredError extends Error{

    constructor(msg: string){
        super()

        this.message = msg
    }
}