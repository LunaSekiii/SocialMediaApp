import UrlPattern from "url-pattern";
import { decodeAccessToken } from "../utils/jwt";
import type { JwtPayload } from "jsonwebtoken";
import { getUserById } from "../db/user";

export default defineEventHandler(async (event) => {
	const endpoints = ["/api/auth/user", "/api/user/tweets", "/api/tweets"];

	const isHandledByMiddleware = endpoints.some((endpoint) => {
		const pattern = new UrlPattern(endpoint);
		return pattern.match(event.node.req.url!);
	});

	if (!isHandledByMiddleware) {
		return;
	}

	const token = event.node.req.headers["authorization"]?.split(" ")[1];

	if (!token) {
		return sendError(
			event,
			createError({
				statusCode: 401,
				statusMessage: "Unauthorized",
			})
		);
	}

	const decoded = decodeAccessToken(token);

	if (!decoded) {
		return sendError(
			event,
			createError({
				statusCode: 401,
				statusMessage: "Unauthorized",
			})
		);
	}

	try {
		const userId = (<JwtPayload>decoded).userId;
		const user = await getUserById(userId);
		event.context.auth = { user };
	} catch (error) {
		return;
	}
});
