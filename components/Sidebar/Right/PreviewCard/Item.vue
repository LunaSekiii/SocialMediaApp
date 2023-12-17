<script setup lang="ts">
const { appBorderColor, defaultTransition } = useUnoConfig();
</script>

<template>
	<div
		p3
		border-b
		cursor-pointer
		hover:(bg-gray-100
		dark:(bg-dim-350
		text-dim-900))
		dark:(text-white)
		:class="defaultTransition + ' ' + appBorderColor"
	>
		<slot />
	</div>
</template>
