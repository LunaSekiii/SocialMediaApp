<script setup lang="ts">
const {
	modelValue,
	label = null,
	placeholder,
	type = "text",
} = defineProps<{
	modelValue: string;
	label?: string;
	placeholder?: string;
	type?: string;
}>();

const emit = defineEmits<{
	(e: "update:modelValue", value: string): void;
}>();
</script>

<template>
	<div>
		<label
			for=""
			v-if="label"
			block
			pl3
			mlpx
			text-(sm
			gray-700)
			font-medium
			>{{ label }}</label
		>
		<div mt1>
			<input
				:type="type"
				name=""
				:value="modelValue"
				:placeholder="placeholder"
				@input="
					($event) => emit('update:modelValue', (<HTMLInputElement>$event.target)?.value)
				"
				block
				px4
				w-full
				border-gray-300
				rounded-full
				shadow-sm
				focus:(ring-blue-500
				border-blue-500)
				sm:(text-sm)
			/>
		</div>
	</div>
</template>
