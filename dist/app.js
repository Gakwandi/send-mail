"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = require("body-parser");
const express_1 = __importDefault(require("express"));
const routes = __importStar(require("./routes/index"));
dotenv_1.default.config({
    path: ".env",
});
const PORT = process.env.APP_PORT || 5000;
const HOST = "0.0.0.0";
/**
 * Root class of your node server.
 * Can be used for basic configurations, for instance starting up the server or registering middleware.
 */
class Server {
    constructor() {
        this.app = express_1.default();
        // Express middleware
        this.app.use(cors_1.default({
            optionsSuccessStatus: 200,
        }));
        this.app.use(body_parser_1.urlencoded({
            extended: true,
        }));
        this.app.use(body_parser_1.json());
        this.app.use(function (req, res, next) {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Methods", "GET,POST,DELETE,PUT");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            res.header("Pragma", "no-cache");
            res.header("Expires", 0);
            next();
        });
        this.app.disable("etag");
        this.app.use(morgan_1.default("combined"));
        this.app.listen(PORT, HOST, () => {
            console.log("server is running on Port " + PORT);
        });
        routes.initRoutes(this.app);
    }
    getApp() {
        return this.app;
    }
}
exports.Server = Server;
new Server();
//# sourceMappingURL=app.js.map