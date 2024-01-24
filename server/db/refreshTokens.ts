import { prisma } from ".";

export const createRefreshToken = (refreshToken: any) => {
	return prisma.refreshToken.create({
		data: refreshToken,
	});
};

export const getRefreshTokenByToken = (token: Token.AccessToken) => {
	return prisma.refreshToken.findUnique({
		where: {
			token,
		},
	});
};
