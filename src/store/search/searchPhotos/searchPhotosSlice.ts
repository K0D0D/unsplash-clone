import { IPhoto } from "./../../../api/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchSearchPhotos } from "./searchPhotosThunks";

export interface ISearchPhotosState {
	data: IPhoto[];
	pageSize: number;
	currentPage: number;
	hasMore: boolean;
	isLoading: boolean;
	error: null | string;
}

const initialState: ISearchPhotosState = {
	data: [],
	pageSize: 20,
	currentPage: 1,
	hasMore: false,
	isLoading: false,
	error: null
};

const searchPhotosSlice = createSlice({
	name: "search/photos",
	initialState,
	reducers: {
		clearSearchPhotosData: (state: ISearchPhotosState) => {
			state.data = [];
			state.currentPage = 1;
			state.hasMore = false;
		},
		setSearchPhotosPage: (
			state: ISearchPhotosState,
			{ payload }: PayloadAction<number>
		) => {
			state.currentPage = payload;
		}
	},
	extraReducers: {
		[fetchSearchPhotos.pending.type]: (state: ISearchPhotosState) => {
			state.isLoading = true;
		},
		[fetchSearchPhotos.fulfilled.type]: (
			state: ISearchPhotosState,
			{ payload }: PayloadAction<IPhoto[]>
		) => {
			state.isLoading = false;
			state.error = null;
			state.data.push(...payload);
			state.hasMore = payload.length === state.pageSize;
		},
		[fetchSearchPhotos.rejected.type]: (
			state: ISearchPhotosState,
			{ payload }: PayloadAction<string>
		) => {
			state.isLoading = false;
			state.error = payload;
		}
	}
});

const { actions, reducer } = searchPhotosSlice;

export const { clearSearchPhotosData, setSearchPhotosPage } = actions;

export default reducer;
