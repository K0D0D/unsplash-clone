import { IPhoto } from "../../../api/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchUserLikes } from "./userLikesThunks";

export interface IUserLikesState {
	data: IPhoto[];
	pageSize: number;
	currentPage: number;
	hasMore: boolean;
	isLoading: boolean;
	error: null | string;
}

const initialState: IUserLikesState = {
	data: [],
	pageSize: 20,
	currentPage: 1,
	hasMore: false,
	isLoading: false,
	error: null
};

const userLikesSlice = createSlice({
	name: "user/likes",
	initialState,
	reducers: {
		clearUserLikesData: (state: IUserLikesState) => {
			state.data = [];
			state.currentPage = 1;
			state.hasMore = false;
		},
		setUserLikesPage: (
			state: IUserLikesState,
			{ payload }: PayloadAction<number>
		) => {
			state.currentPage = payload;
		}
	},
	extraReducers: {
		[fetchUserLikes.pending.type]: (state: IUserLikesState) => {
			state.isLoading = true;
		},
		[fetchUserLikes.fulfilled.type]: (
			state: IUserLikesState,
			{ payload }: PayloadAction<IPhoto[]>
		) => {
			state.isLoading = false;
			state.error = null;
			state.data.push(...payload);
			state.hasMore = payload.length === state.pageSize;
		},
		[fetchUserLikes.rejected.type]: (
			state: IUserLikesState,
			{ payload }: PayloadAction<string>
		) => {
			state.isLoading = false;
			state.error = payload;
		}
	}
});

const { actions, reducer } = userLikesSlice;

export const { clearUserLikesData, setUserLikesPage } = actions;

export default reducer;
