import { v2 as _cloudinary } from "cloudinary";
import type { UploadApiResponse } from "cloudinary";

const cloudinary = () => {
	const config = useRuntimeConfig();

	_cloudinary.config({
		cloud_name: config.cloudinaryCloudName,
		api_key: config.cloudinaryApiKey,
		api_secret: config.cloudinaryApiSecret,
	});

	return _cloudinary;
};

export const uploadToCloudinary = (image: string) => {
	return new Promise<UploadApiResponse | undefined>((resolve, reject) => {
		cloudinary().uploader.upload(image, (error, result) => {
			if (error) reject(error);
			resolve(result);
		});
	});
};
