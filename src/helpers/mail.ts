const nodemailer = require("nodemailer");

export class mail {
	private connect = nodemailer.createTransport({
		service: process.env.MAIL_SERVICE,
		host: process.env.MAIL_HOST,
		auth: {
			user: process.env.MAIL_USERNAME,
			pass: process.env.MAIL_PASSWORD,
		},
	});
	private from: string = process.env.MAIL_FROM;

	constructor() {
		this.connect;
	}

	sendMail(to: string): Promise<any> {
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
