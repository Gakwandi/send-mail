import { Request, Response, NextFunction } from "express";
import { mail } from "../helpers/mail";

export async function create(req: Request, res: Response, next: NextFunction): Promise<any> {
    try{
        const to = 'gakwandijoshua@gmail.com;'
        const email = new mail();
        const saved = await email.sendMail(to);
        res.status(201).json({status: 201, message: "Sent successfully"});

    }catch(err){
        console.log("Something went wrong!", err);
    }
}