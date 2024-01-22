import jwt from "jsonwebtoken";

const generateAccessToken = (user: User) => {
	const config = useRuntimeConfig();
	return jwt.sign(
		{
			userId: user.id,
		},
		config.jwtAccessSecret,
		{
			expiresIn: "15m",
		}
	);
};

const generateRefreshToken = (user: User) => {
	const config = useRuntimeConfig();
	return jwt.sign(
		{
			userId: user.id,
		},
		config.jwtRefreshSecret,
		{
			expiresIn: "7d",
		}
	);
};

export const generateTokens = (user: User) => {
	const accessToken = generateAccessToken(user);
	const refreshToken = generateRefreshToken(user);

	return {
		accessToken,
		refreshToken,
	};
};

export const sendRefreshToken = (event: any, token: any) => {
	setCookie(event, "refresh_token", token, {
		httpOnly: true,
		sameSite: true,
	});
};
