<script setup lang="ts">
const { postTweet } = useTweets();

const { user } = defineProps<{
	user: UserTransformer;
}>();

const loading = ref(false);

const handleFormSubmit = async (value: {
	text: string;
	mediaFiles?: File[];
}) => {
	loading.value = true;
	try {
		const response = await postTweet({
			text: value.text,
			mediaFiles: value.mediaFiles,
		});
		console.log(response);
	} catch (error) {
		console.error(error);
	} finally {
		loading.value = false;
	}
};
</script>

<template>
	<div v-if="loading" flex items-center justify-center py6>
		<UISpinner />
	</div>
	<div v-else>
		<TweetFormInput :user="user" @onSubmit="handleFormSubmit" />
	</div>
</template>
