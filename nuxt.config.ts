// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: ["@unocss/nuxt"],
	typescript: {
		// 启用类型检查
		typeCheck: true,
	},
	devtools: { enabled: true },
});
