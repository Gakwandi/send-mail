"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mail = void 0;
const nodemailer = require("nodemailer");
class mail {
    constructor() {
        this.connect = nodemailer.createTransport({
            service: process.env.MAIL_SERVICE,
            host: process.env.MAIL_HOST,
            auth: {
                user: process.env.MAIL_USERNAME,
                pass: process.env.MAIL_PASSWORD,
            },
        });
        this.from = process.env.MAIL_FROM;
        this.connect;
    }
    sendMail(to) {
        const data = {
            from: `YOUR NAME ${this.from}`,
            to: to,
            subject: "Verify Email",
            text: `Verify Email`,
            html: `<p>Verify email</p>`,
        };
        return this.connect.sendMail(data);
    }
}
exports.mail = mail;
//# sourceMappingURL=mail.js.map