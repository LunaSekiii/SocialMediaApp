import type { Tweet } from "../db/tweet";
import { mediaFileTransformer } from "./mediaFiles";
import { userTransformer } from "./user";
import moment from "moment";

export const tweetTransformer = (tweet: Tweet): any => {
	return {
		id: tweet.id,
		text: tweet.text,
		mediaFiles: !!tweet.mediaFiles
			? tweet.mediaFiles.map(mediaFileTransformer)
			: [],
		author: !!tweet.author ? userTransformer(tweet.author) : null,
		replies: !!tweet.replies ? tweet.replies.map(tweetTransformer) : [],
		replyTo: !!tweet.replyTo ? tweetTransformer(tweet.replyTo) : null,
		repliesCount: !!tweet.replies ? tweet.replies.length : 0,
		postedAtHuman: moment(tweet.createdAt).fromNow(),
	};
};
