<script setup lang="ts">
const happeningItems = ref([
	{
		title: "SpaceX",
		count: "18.8k Tweets",
	},
	{
		title: "#CodingIsFun",
		count: "8.8k Tweets",
	},
	{
		title: "#artforall",
		count: "1.8k Tweets",
	},
]);

const toFollowItems = ref([
	{
		name: "Join Biden",
		handle: "@joeBiden",
		image: "https://picsum.photos/200/200",
	},
	{
		name: "Join Biden",
		handle: "@joeBiden",
		image: "https://picsum.photos/200/200",
	},
	{
		name: "Join Biden",
		handle: "@joeBiden",
		image: "https://picsum.photos/200/200",
	},
]);
</script>

<template>
	<div flex flex-col>
		<!-- Preview Card: What`s happening -->
		<SidebarRightPreviewCard title="What`s happening">
			<SidebarRightPreviewCardItem
				v-for="(happening, index) in happeningItems"
				:key="index"
			>
				<div>
					<h2 font-bold text-(gary-800 md) dark:text-white>
						{{ happening.title }}
					</h2>
					<p text-(xs gray-400)>{{ happening.count }}</p>
				</div>
			</SidebarRightPreviewCardItem>
		</SidebarRightPreviewCard>
		<!-- Preview Card: Who to follow -->
		<SidebarRightPreviewCard title="Who to follow">
			<SidebarRightPreviewCardItem
				v-for="(toFollow, index) in toFollowItems"
				:key="index"
			>
				<div flex flex-row justify-between items-center p2>
					<div flex flex-row>
						<img
							w-10
							h-10
							rounded-full
							:src="toFollow.image"
							:alt="`${toFollow.name} profile image`"
						/>
						<div flex flex-col ml2>
							<h1 text-(sm gray-900) font-bold dark:(text-white)>
								{{ toFollow.name }}
							</h1>
							<p text-(xs gray-400)>{{ toFollow.handle }}</p>
						</div>
					</div>
					<div flex h-full>
						<button
							px-4
							py-2
							font-bold
							text-(xs
							white)
							bg-black
							dark:(text-black
							bg-white)
							rounded-full
						>
							Follow
						</button>
					</div>
				</div>
			</SidebarRightPreviewCardItem>
		</SidebarRightPreviewCard>
	</div>
</template>
