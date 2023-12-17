<script setup lang="ts">
const { title } = defineProps<{
	title: string;
}>();

const { appBorderColor, defaultTransition } = useUnoConfig();
</script>

<template>
	<div
		m2
		border
		rounded-2xl
		overflow-hidden
		bg-gray-50
		dark:bg-dim-700
		:class="appBorderColor"
	>
		<h1
			p3
			text-2xl
			font-extrabold
			text-gray-900
			border-b
			dark:(text-white)
			:class="appBorderColor"
		>
			{{ title }}
		</h1>
		<slot />
		<div
			p3
			text-(sm
			blue-400)
			cursor-pointer
			hover:(bg-gray-100
			dark:bg-dim-300)
			:class="defaultTransition"
		>
			show more
		</div>
	</div>
</template>
