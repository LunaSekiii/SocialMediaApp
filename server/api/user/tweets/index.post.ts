import formidable from "formidable";
import { createMediaFile } from "~/server/db/mediaFiles";
import { createTweet } from "~/server/db/tweet";
import { tweetTransformer } from "~/server/transformers/tweet";

export default defineEventHandler(async (event) => {
	const form = formidable({});

	const response = await new Promise<{
		fields: formidable.Fields;
		files: formidable.Files;
	}>((resolve, reject) => {
		form.parse(event.node.req, (err, fields, files) => {
			if (err) {
				reject(err);
			}
			resolve({ fields, files });
		});
	});

	const { fields, files } = response;

	const userId = event.context?.auth?.user?.id;

	const tweetData: {
		text: string;
		authorId: number;
		replyToId?: string;
	} = {
		text: fields.text?.[0] || "",
		authorId: userId,
	};

	const replyTo = fields.replyTo?.[0];

	if (replyTo && replyTo != null) {
		tweetData.replyToId = replyTo;
	}

	const tweet = await createTweet(tweetData);
	console.log("tweet", tweet, tweetTransformer(tweet as any));
	const filePromises = Object.keys(files).map(async (key) => {
		const file = files[key];

		if (!file || file.length <= 0) return;

		return file.map(async (file) => {
			const cloudinaryResource = await uploadToCloudinary(file.filepath);
			if (!cloudinaryResource) return;

			return createMediaFile({
				url: cloudinaryResource.secure_url,
				providerPublicId: cloudinaryResource.public_id,
				userId: userId,
				tweetId: tweet.id,
			});
		});

		// uploadToCloudinary(file.filepath);
		// return createMediaFile({
		// 	url: "",
		// 	providerPublicId: "random_id",
		// 	userId: userId,
		// 	tweetId: tweet.id,
		// });
	});

	await Promise.all(filePromises.flat());

	return {
		tweet: tweetTransformer(tweet as any),
	};
});
