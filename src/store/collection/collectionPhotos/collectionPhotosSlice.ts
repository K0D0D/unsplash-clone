import { IPhoto } from "./../../../api/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchCollectionPhotos } from "./collectionPhotosThunks";

export interface ICollectionPhotosState {
	data: IPhoto[];
	pageSize: number;
	currentPage: number;
	hasMore: boolean;
	isLoading: boolean;
	error: null | string;
}

const initialState: ICollectionPhotosState = {
	data: [],
	pageSize: 20,
	currentPage: 1,
	hasMore: false,
	isLoading: false,
	error: null
};

const collectionPhotosSlice = createSlice({
	name: "collection/photos",
	initialState,
	reducers: {
		clearCollectionPhotosData: (state: ICollectionPhotosState) => {
			state.data = [];
			state.currentPage = 1;
			state.hasMore = false;
		},
		setCollectionPhotosPage: (
			state: ICollectionPhotosState,
			{ payload }: PayloadAction<number>
		) => {
			state.currentPage = payload;
		}
	},
	extraReducers: {
		[fetchCollectionPhotos.pending.type]: (state: ICollectionPhotosState) => {
			state.isLoading = true;
		},
		[fetchCollectionPhotos.fulfilled.type]: (
			state: ICollectionPhotosState,
			{ payload }: PayloadAction<IPhoto[]>
		) => {
			state.isLoading = false;
			state.error = null;
			state.data.push(...payload);
			state.hasMore = payload.length === state.pageSize;
		},
		[fetchCollectionPhotos.rejected.type]: (
			state: ICollectionPhotosState,
			{ payload }: PayloadAction<string>
		) => {
			state.isLoading = false;
			state.error = payload;
		}
	}
});

const { actions, reducer } = collectionPhotosSlice;

export const { clearCollectionPhotosData, setCollectionPhotosPage } = actions;

export default reducer;
