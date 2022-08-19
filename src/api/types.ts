export interface IPhoto {
	id: string;
	width: number;
	height: number;
	color: string;
	blur_hash: string | null;
	alt_description: string | null;
	urls: {
		small: string;
		regular: string;
		full: string;
	};
	user: IUser;
}

export interface IUser {
	id: string;
	username: string;
	name: string;
	profile_image: {
		small: string;
		medium: string;
		large: string;
	};
}

export interface ITopic {
	slug: string;
	title: string;
}

export interface ICollection {
	id: string;
	title: string;
	total_photos: number;
	user: IUser;
	preview_photos: IPreviewPhoto[];
}

export type IPreviewPhoto = Pick<IPhoto, "id" | "blur_hash" | "urls">;

export interface IUserPreview extends IUser {
	photos: IPreviewPhoto[];
}

export interface IPhotoDetails extends IPhoto {
	created_at: string;
	description: string | null;
	exif: {
		name: string | null;
	};
	location: {
		name: string | null;
	};
	tags: { title: string }[];
	related_collections: {
		total: number;
		results: ICollection[];
	};
	views: number;
	downloads: number;
}

export interface ICollectionDetails extends ICollection {
	description: string | null;
	cover_photo: IPhoto;
}

export interface IUserDetails extends IUser {
	first_name: string;
	bio: string | null;
	location: string | null;
	total_collections: number;
	total_likes: number;
	total_photos: number;
	tags: {
		custom: { title: string }[];
	};
}
