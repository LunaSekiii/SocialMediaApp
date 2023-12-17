<script setup lang="ts">
const { title, loading } = defineProps<{
	title: string;
	loading: boolean;
}>();
const { appBorderColor } = useUnoConfig();
</script>

<template>
	<div border-x :class="appBorderColor">
		<div
			sticky
			top-0
			px4
			py3
			backdrop-blur-md
			class="bg-white/80 dark:(bg-dim-900/80)"
		>
			<h2 text-(xl gray-800) font-bold dark:(text-gray-100)>
				{{ title }}
			</h2>
		</div>
		<div
			v-if="loading"
			flex
			items-center
			justify-center
			p4
			border-b
			:class="appBorderColor"
		>
			<UISpinner />
		</div>
		<slot />
	</div>
</template>
