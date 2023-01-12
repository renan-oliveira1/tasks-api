import { createSecretKey } from "crypto";

export class InvalidTaskError extends Error{

    constructor(msg: string){
        super();
        this.message= msg;
    }
}
