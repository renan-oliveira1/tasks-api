import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
//import .env
require('dotenv').config()

interface TokenPayload{
    id: string;
    iat: number;
    exp: number;
}

export default function authMiddleware(
    request: Request, response: Response, 
    next: NextFunction){
        const { authorization } = request.headers

        if(!authorization){
            return response.sendStatus(401)
        }

        const token = authorization.replace('Bearer', '').trim()

        try{
            const data = verify(token, process.env.SECRET_KEY)
            const { id }= data as TokenPayload

            request.userId = id

            return next()
        }catch{
            return response.status(401).send({msg: 'Invalid or expired token!!'})
        }
}