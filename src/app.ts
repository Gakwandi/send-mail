import dotenv from "dotenv";
import morgan from "morgan";
import cors from "cors";
import { json, urlencoded } from "body-parser";
import express from "express";
import * as routes from "./routes/index";

dotenv.config({
	path: ".env",
});

const PORT: any = process.env.APP_PORT || 5000;
const HOST: any = "0.0.0.0";
/**
 * Root class of your node server.
 * Can be used for basic configurations, for instance starting up the server or registering middleware.
 */
export class Server {
	private app: any;

	constructor() {
		this.app = express();

		// Express middleware
		this.app.use(
			cors({
				optionsSuccessStatus: 200,
			}),
		);
		this.app.use(
			urlencoded({
				extended: true,
			}),
		);
		this.app.use(json());
		this.app.use(function (req, res, next) {
			res.header("Access-Control-Allow-Origin", "*");
			res.header("Access-Control-Allow-Methods", "GET,POST,DELETE,PUT");
			res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
			res.header("Pragma", "no-cache");
			res.header("Expires", 0);
			next();
		});
		this.app.disable("etag");
		this.app.use(morgan("combined"));
		this.app.listen(PORT, HOST, () => {
			console.log("server is running on Port " + PORT);
		});
		routes.initRoutes(this.app);
	}

	getApp() {
		return this.app;
	}
}
new Server();
