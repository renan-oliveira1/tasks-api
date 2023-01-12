export class InvalidBoardError extends Error{

    constructor(msg: string){
        super();
        this.message= msg;
    }
}