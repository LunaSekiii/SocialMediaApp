<script setup lang="ts">
const { login } = useAuth();
const data = reactive({
	username: "",
	password: "",
	loading: false,
});
const handleLogin = async () => {
	data.loading = true;
	try {
		await login({
			username: data.username,
			password: data.password,
		});
	} catch (error) {
		console.log(error);
	} finally {
		data.loading = false;
	}
};
</script>

<template>
	<div>
		<div pt5 space-y-6>
			<UIInput
				v-model="data.username"
				label="username"
				placeholder="@username"
				type="text"
			/>
			<UIInput
				v-model="data.password"
				label="password"
				placeholder="password"
				type="password"
			/>
			<div>
				<button @click="handleLogin">Login</button>
			</div>
		</div>
	</div>
</template>
