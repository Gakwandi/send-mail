import { Express } from "express";
import * as MailRoutes from "./mail";

export function initRoutes(app: Express){
    MailRoutes.routes(app);   
}