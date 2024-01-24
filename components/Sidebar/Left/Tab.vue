<script setup lang="ts">
const { defaultTransition } = useUnoConfig();
const { active = false, title } = defineProps<{
	active?: boolean;
	title: string;
}>();

const textClasses = computed(() => (active ? "font-semibold" : "font-normal"));
</script>

<template>
	<NuxtLink
		to="#"
		flex
		items-center
		p3
		w-min
		hover:bg-gray-200
		text-black
		dark:(hover:bg-dim-200
		text-white)
		rounded-full
		reactive
		:class="defaultTransition"
		:title="title"
	>
		<div w6 h6 text-dark dark:text-white>
			<slot />
		</div>
		<div ml4 text-xl hidden :class="[textClasses, 'xl:!block']">
			{{ title }}
		</div>
	</NuxtLink>
</template>
