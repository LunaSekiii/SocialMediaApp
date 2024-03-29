import { createUser } from "~/server/db/user";
import { userTransformer } from "~/server/transformers/user";

export default defineEventHandler(async (event) => {
	const body = await readBody(event);
	const { username, password, email, repeatPassword, name } = body;
	if (!username || !password || !email || !name) {
		return sendError(
			event,
			createError({
				statusCode: 400,
				statusMessage: "Invalid params",
			})
		);
	}

	if (password !== repeatPassword) {
		return sendError(
			event,
			createError({
				statusCode: 400,
				statusMessage: "Passwords do not match",
			})
		);
	}

	const userData = {
		username,
		email,
		password,
		name,
		profileImage: "https://picsum.photos/200/200",
	};

	const user = await createUser(userData);

	return {
		body: userTransformer(user as User),
	};
});
