declare interface Tweet {
	id: string;
	text: string;
	createdAt: Date;
	updatedAt: Date;
	authorId: string;
	replyToId: string | null;
	mediaFiles?: string[];
	author?: User;
	replies?: Tweet[];
	replyTo?: Tweet;
}
