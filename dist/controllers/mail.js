"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = void 0;
const mail_1 = require("../helpers/mail");
function create(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const to = 'gakwandijoshua@gmail.com;';
            const email = new mail_1.mail();
            const saved = yield email.sendMail(to);
            res.status(201).json({ status: 201, message: "Sent successfully" });
        }
        catch (err) {
            console.log("Something went wrong!", err);
        }
    });
}
exports.create = create;
//# sourceMappingURL=mail.js.map