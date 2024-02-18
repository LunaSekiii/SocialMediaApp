// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: ["@unocss/nuxt"],
	typescript: {
		// 启用类型检查
		typeCheck: true,
	},
	devtools: { enabled: true },
	runtimeConfig: {
		jwtAccessSecret: process.env.JWT_ACCESS_TOKEN_SECRET,
		jwtRefreshSecret: process.env.JWT_REFRESH_TOKEN_SECRET,

		cloudinaryCloudName: process.env.CLOUDINARY_CLOUD_NAME,
		cloudinaryApiKey: process.env.CLOUDINARY_API_KEY,
		cloudinaryApiSecret: process.env.CLOUDINARY_API_SECRET,
	},
});
