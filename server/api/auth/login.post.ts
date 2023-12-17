import { getUserByUsername } from "~/server/db/user";
import { userTransformer } from "~/server/transformers/user";

export default defineEventHandler(async (event) => {
	const body = await readBody(event);

	const { username, password } = body;

	if (!username || !password) {
		return sendError(
			event,
			createError({
				statusCode: 400,
				statusMessage: "Invalid params",
			})
		);
	}

	// Is the user registered
	const user = await getUserByUsername(username);
	if (!user) {
		return sendError(
			event,
			createError({
				statusCode: 400,
				statusMessage: "Invalid username",
			})
		);
	}

	// Compare password

	// Generate Tokens

	return {
		user: userTransformer(user as User),
	};
});
