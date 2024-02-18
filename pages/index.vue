<script setup lang="ts">
const loading = ref(false);

const { useAuthUser } = useAuth();
const user = useAuthUser();

const { appBorderColor } = useUnoConfig();

const homeTweets = ref<Tweet[]>([]);

const { getHomeTweets } = useTweets();
onBeforeMount(async () => {
	loading.value = true;
	try {
		homeTweets.value = (await getHomeTweets()) as any[];
	} catch (error) {
		console.error(error);
	} finally {
		loading.value = false;
	}
});
</script>

<template>
	<div>
		<MainSection title="Home" :loading="loading">
			<Head>
				<Title> Home / Twitter </Title>
			</Head>

			<div border-b :class="appBorderColor">
				<TweetForm :user="user" />
			</div>

			<TweetListFeed :tweets="homeTweets" />
		</MainSection>
	</div>
</template>
