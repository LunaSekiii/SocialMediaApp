import { getUserByUsername } from "~/server/db/user";
import { userTransformer } from "~/server/transformers/user";
import { generateTokens, sendRefreshToken } from "~/server/utils/jwt";
import bcrypt from "bcrypt";
import { createRefreshToken } from "~/server/db/refreshTokens";

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
				statusMessage: "Invalid username or password",
			})
		);
	}

	// Compare password
	const doesThePasswordMatch = await bcrypt.compare(password, user.password);
	if (!doesThePasswordMatch) {
		return sendError(
			event,
			createError({
				statusCode: 400,
				statusMessage: "Invalid username or password",
			})
		);
	}

	// Generate Tokens
	const { accessToken, refreshToken } = generateTokens(user as User);

	// Save it inside db
	await createRefreshToken({
		token: refreshToken,
		userId: user.id,
	});

	// Add httpOnly cookie
	sendRefreshToken(event, refreshToken);

	return {
		user: userTransformer(user as User),
		access_token: accessToken,
	};
});
