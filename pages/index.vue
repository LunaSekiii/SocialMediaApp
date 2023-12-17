<script setup lang="ts">
const loading = ref(false);
</script>

<template>
	<div>
		<MainSection title="Home" :loading="loading">
			this is HomePage
		</MainSection>
	</div>
</template>
