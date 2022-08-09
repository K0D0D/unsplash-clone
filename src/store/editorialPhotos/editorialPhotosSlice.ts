import { IPhoto } from "../../api/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchEditorialPhotos } from "./editorialPhotosThunks";

export interface IEditorialPhotosState {
	data: IPhoto[];
	pageSize: number;
	currentPage: number;
	hasMore: boolean;
	isLoading: boolean;
	error: null | string;
}

const initialState: IEditorialPhotosState = {
	data: [],
	pageSize: 20,
	currentPage: 1,
	hasMore: false,
	isLoading: false,
	error: null
};

const editorialPhotosSlice = createSlice({
	name: "editorialPhotos",
	initialState,
	reducers: {
		clearEditorialPhotosData: (state: IEditorialPhotosState) => {
			state.data = [];
			state.currentPage = 1;
			state.hasMore = false;
		},
		setEditorialPhotosPage: (
			state: IEditorialPhotosState,
			{ payload }: PayloadAction<number>
		) => {
			state.currentPage = payload;
		}
	},
	extraReducers: {
		[fetchEditorialPhotos.pending.type]: (state: IEditorialPhotosState) => {
			state.isLoading = true;
		},
		[fetchEditorialPhotos.fulfilled.type]: (
			state: IEditorialPhotosState,
			{ payload }: PayloadAction<IPhoto[]>
		) => {
			state.isLoading = false;
			state.error = null;
			state.data.push(...payload);
			state.hasMore = payload.length === state.pageSize;
		},
		[fetchEditorialPhotos.rejected.type]: (
			state: IEditorialPhotosState,
			{ payload }: PayloadAction<string>
		) => {
			state.isLoading = false;
			state.error = payload;
		}
	}
});

const { actions, reducer } = editorialPhotosSlice;

export const { clearEditorialPhotosData, setEditorialPhotosPage } = actions;

export default reducer;
