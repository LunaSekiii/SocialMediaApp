import { prisma } from ".";

export type Tweet = {
	id: string;
	text: string;
	createdAt: Date;
	updatedAt: Date;
	authorId: string;
	replyToId: string | null;
	mediaFiles?: string[];
	author?: User;
	replies?: Tweet[];
	replyTo?: Tweet;
};

export const createTweet = (tweetData: any) => {
	return prisma.tweet.create({
		data: tweetData,
		// include: {
		// 	replyTo: true,
		// },
	});
};

export const getTweets = (params: any) => {
	return prisma.tweet.findMany({
		...params,
	});
};
