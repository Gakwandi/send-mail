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
			html: `
			<!DOCTYPE html>
			<html>
				<head>
					<title>Send E-mail</title>
				</head>
				<body>
					<div class="container" style="background: white;border-radius: .25rem; width: 50%; margin: 10px auto; text-align:center;border: 1px solid rgba(0,0,0,.125);padding-bottom: 20px;">
						<div class="header" style="text-align:center;padding-top: 10px;">
							<h3>BBF Warehouse Management System</h3>
						</div>	
						<div class="message" style="margin: 5px auto;color:#6c757d;">
							<p>To verify your e-mail please click the link below</p>
						</div>		
						<div class="button" style="margin: 10px auto">
							<a href="#" style="color:#fff;padding: 10px; background: green; border-radius: 4px;text-decoration: none;"> Verify E-mail </a>
						</div>				
					</div>				
				</body>
			</html>`,
		};
		return this.connect.sendMail(data);
	}
}
