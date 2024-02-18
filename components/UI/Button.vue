<script setup lang="ts">
const {
	disable = false,
	size = "md",
	liquid = "false",
} = defineProps<{
	disable?: boolean;
	size?: "sm" | "md" | "lg";
	liquid?: boolean;
}>();

const paddingClasses = computed(() => {
	switch (size) {
		case "sm":
			return "px3 py2";
		case "lg":
			return "px4 py3";
		default:
			return "px3 py3";
	}
});

const textFontSize = computed(() => {
	switch (size) {
		case "lg":
			return "text-md";
		default:
			return "text-sm";
	}
});

const defaultWidth = computed(() => {
	switch (size) {
		default:
			return "w-min";
	}
});

const classes = computed(
	() => `${paddingClasses.value} ${liquid ? "w-full" : defaultWidth.value}`
);
</script>

<template>
	<button
		flex
		justify-center
		text-white
		bg-blue-400
		rounded-full
		hover:bg-blue-500
		text-sm
		disabled:(bg-blue-300
		cursor-not-allowed)
		:disabled="disable"
		:class="classes"
	>
		<span :class="textFontSize">
			<slot />
		</span>
	</button>
</template>
