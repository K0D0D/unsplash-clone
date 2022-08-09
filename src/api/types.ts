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
