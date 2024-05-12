import { GOOGLE_EMAIL } from "$env/static/private";
import transporter from "$lib/emailSetup.server.js";

import type { Actions } from "./$types";
export const actions = {
	add: async ({ request }) => {
		const data = await request.formData();
		const name = data.get('name') as string;
		const email = data.get('email') as string;
		const phoneNumber = data.get('phone') as string;
		const msg = data.get('message') as string;
		console.log("Form data: ", Object.fromEntries(data));
		const html = `<h2>${name}</h2><pre>Name:${name}<br>Email:${email}<br>Phn:${phoneNumber}<br>Message:${msg}</pre>`;

		const message = {
			from: GOOGLE_EMAIL,
			to: email,
			name: name,
			email: email,
			phoneNumber: phoneNumber,
			message: msg,
			html: html,
		};
		const sendEmail = async (message) => {
			await new Promise((resolve, reject) => {
				transporter.sendMail(message, (err, info) => {
					if (err) {
						console.error(err);
						reject(err);
					} else {
						resolve(info);
					}
				});
			});
		};

		await sendEmail(message);

		return {
			success: "Email is sent",
		};
	}

} satisfies Actions;