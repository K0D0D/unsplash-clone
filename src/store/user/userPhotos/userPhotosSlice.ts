import { IPhoto } from "../../../api/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchUserPhotos } from "./userPhotosThunks";

export interface IUserPhotosState {
	data: IPhoto[];
	pageSize: number;
	currentPage: number;
	hasMore: boolean;
	isLoading: boolean;
	error: null | string;
}

const initialState: IUserPhotosState = {
	data: [],
	pageSize: 20,
	currentPage: 1,
	hasMore: false,
	isLoading: false,
	error: null
};

const userPhotosSlice = createSlice({
	name: "user/photos",
	initialState,
	reducers: {
		clearUserPhotosData: (state: IUserPhotosState) => {
			state.data = [];
			state.currentPage = 1;
			state.hasMore = false;
		},
		setUserPhotosPage: (
			state: IUserPhotosState,
			{ payload }: PayloadAction<number>
		) => {
			state.currentPage = payload;
		}
	},
	extraReducers: {
		[fetchUserPhotos.pending.type]: (state: IUserPhotosState) => {
			state.isLoading = true;
		},
		[fetchUserPhotos.fulfilled.type]: (
			state: IUserPhotosState,
			{ payload }: PayloadAction<IPhoto[]>
		) => {
			state.isLoading = false;
			state.error = null;
			state.data.push(...payload);
			state.hasMore = payload.length === state.pageSize;
		},
		[fetchUserPhotos.rejected.type]: (
			state: IUserPhotosState,
			{ payload }: PayloadAction<string>
		) => {
			state.isLoading = false;
			state.error = payload;
		}
	}
});

const { actions, reducer } = userPhotosSlice;

export const { clearUserPhotosData, setUserPhotosPage } = actions;

export default reducer;
