<script setup lang="ts">
const { tweets } = defineProps<{
	tweets: Tweet[];
}>();
</script>

<template>
	<div>
		<h1>list feed</h1>
	</div>

	<ul>
		<li v-for="tweet in tweets">
			{{ tweet.text }}
		</li>
	</ul>
</template>
