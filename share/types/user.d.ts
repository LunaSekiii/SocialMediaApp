declare interface User {
	id?: string;
	username: string;
	name: string;
	email: string;
	password?: string;
	profileImage?: string;
	createdAt?: Date;
	updatedAt?: Date;
}

declare interface UserTransformer
	extends Omit<User, "password" | "createAt" | "updateAt"> {}
