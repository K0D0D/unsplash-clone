import { IUserPreview } from "../../../api/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchSearchUsers } from "./searchUsersThunks";

export interface ISearchUsersState {
	data: IUserPreview[];
	pageSize: number;
	currentPage: number;
	hasMore: boolean;
	isLoading: boolean;
	error: null | string;
}

const initialState: ISearchUsersState = {
	data: [],
	pageSize: 40,
	currentPage: 1,
	hasMore: false,
	isLoading: false,
	error: null
};

const searchUsersSlice = createSlice({
	name: "search/users",
	initialState,
	reducers: {
		clearSearchUsersData: (state: ISearchUsersState) => {
			state.data = [];
			state.currentPage = 1;
			state.hasMore = false;
		},
		setSearchUsersPage: (
			state: ISearchUsersState,
			{ payload }: PayloadAction<number>
		) => {
			state.currentPage = payload;
		}
	},
	extraReducers: {
		[fetchSearchUsers.pending.type]: (state: ISearchUsersState) => {
			state.isLoading = true;
		},
		[fetchSearchUsers.fulfilled.type]: (
			state: ISearchUsersState,
			{ payload }: PayloadAction<IUserPreview[]>
		) => {
			state.isLoading = false;
			state.error = null;
			state.data.push(...payload);
			state.hasMore = payload.length === state.pageSize;
		},
		[fetchSearchUsers.rejected.type]: (
			state: ISearchUsersState,
			{ payload }: PayloadAction<string>
		) => {
			state.isLoading = false;
			state.error = payload;
		}
	}
});

const { actions, reducer } = searchUsersSlice;

export const { clearSearchUsersData, setSearchUsersPage } = actions;

export default reducer;
