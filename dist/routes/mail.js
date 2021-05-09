"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const index_1 = require("../controllers/index");
function routes(app) {
    app.get("/", index_1.MailController.create);
}
exports.routes = routes;
//# sourceMappingURL=mail.js.map