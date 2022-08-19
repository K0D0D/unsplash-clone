import { ICollection } from "../../../api/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchUserCollections } from "./userCollectionsThunks";

export interface IUserCollectionsState {
	data: ICollection[];
	pageSize: number;
	currentPage: number;
	hasMore: boolean;
	isLoading: boolean;
	error: null | string;
}

const initialState: IUserCollectionsState = {
	data: [],
	pageSize: 20,
	currentPage: 1,
	hasMore: false,
	isLoading: false,
	error: null
};

const userCollectionsSlice = createSlice({
	name: "user/collections",
	initialState,
	reducers: {
		clearUserCollectionsData: (state: IUserCollectionsState) => {
			state.data = [];
			state.currentPage = 1;
			state.hasMore = false;
		},
		setUserCollectionsPage: (
			state: IUserCollectionsState,
			{ payload }: PayloadAction<number>
		) => {
			state.currentPage = payload;
		}
	},
	extraReducers: {
		[fetchUserCollections.pending.type]: (state: IUserCollectionsState) => {
			state.isLoading = true;
		},
		[fetchUserCollections.fulfilled.type]: (
			state: IUserCollectionsState,
			{ payload }: PayloadAction<ICollection[]>
		) => {
			state.isLoading = false;
			state.error = null;
			state.data.push(...payload);
			state.hasMore = payload.length === state.pageSize;
		},
		[fetchUserCollections.rejected.type]: (
			state: IUserCollectionsState,
			{ payload }: PayloadAction<string>
		) => {
			state.isLoading = false;
			state.error = payload;
		}
	}
});

const { actions, reducer } = userCollectionsSlice;

export const { clearUserCollectionsData, setUserCollectionsPage } = actions;

export default reducer;
