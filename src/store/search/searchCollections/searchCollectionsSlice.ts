import { ICollection } from "../../../api/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchSearchCollections } from "./searchCollectionsThunks";

export interface ISearchCollectionsState {
	data: ICollection[];
	pageSize: number;
	currentPage: number;
	hasMore: boolean;
	isLoading: boolean;
	error: null | string;
}

const initialState: ISearchCollectionsState = {
	data: [],
	pageSize: 20,
	currentPage: 1,
	hasMore: false,
	isLoading: false,
	error: null
};

const searchCollectionsSlice = createSlice({
	name: "search/collections",
	initialState,
	reducers: {
		clearSearchCollectionsData: (state: ISearchCollectionsState) => {
			state.data = [];
			state.currentPage = 1;
			state.hasMore = false;
		},
		setSearchCollectionsPage: (
			state: ISearchCollectionsState,
			{ payload }: PayloadAction<number>
		) => {
			state.currentPage = payload;
		}
	},
	extraReducers: {
		[fetchSearchCollections.pending.type]: (state: ISearchCollectionsState) => {
			state.isLoading = true;
		},
		[fetchSearchCollections.fulfilled.type]: (
			state: ISearchCollectionsState,
			{ payload }: PayloadAction<ICollection[]>
		) => {
			state.isLoading = false;
			state.error = null;
			state.data.push(...payload);
			state.hasMore = payload.length === state.pageSize;
		},
		[fetchSearchCollections.rejected.type]: (
			state: ISearchCollectionsState,
			{ payload }: PayloadAction<string>
		) => {
			state.isLoading = false;
			state.error = payload;
		}
	}
});

const { actions, reducer } = searchCollectionsSlice;

export const { clearSearchCollectionsData, setSearchCollectionsPage } = actions;

export default reducer;
