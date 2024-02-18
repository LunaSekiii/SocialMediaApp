export default () => {
	const postTweet = (fromData: { text: string; mediaFiles?: File[] }) => {
		const form = new FormData();

		form.append("text", fromData.text);
		fromData.mediaFiles?.forEach((file, index) => {
			form.append(`media_file_${index}`, file);
		});

		return useFetchApi("/api/user/tweets", {
			method: "POST",
			body: form,
		});
	};

	const getHomeTweets = async () => {
		return (await useFetchApi<{ tweets: Tweet[] }>("/api/tweets")).tweets;
	};

	return { postTweet, getHomeTweets };
};
