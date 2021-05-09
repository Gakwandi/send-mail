import { Express } from "express";
import { MailController } from "../controllers/index";

export function routes(app: Express) {
    app.get("/", MailController.create);
}
