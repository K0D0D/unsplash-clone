import { IPhoto } from "./../../../api/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchTopicPhotos } from "./topicPhotosThunks";

export interface ITopicPhotosState {
	data: IPhoto[];
	pageSize: number;
	currentPage: number;
	hasMore: boolean;
	isLoading: boolean;
	error: string | null;
}

const initialState: ITopicPhotosState = {
	data: [],
	pageSize: 20,
	currentPage: 1,
	hasMore: false,
	isLoading: false,
	error: null
};

const topicPhotosSlice = createSlice({
	name: "topic/photos",
	initialState,
	reducers: {
		clearTopicPhotosData: (state: ITopicPhotosState) => {
			state.data = [];
			state.currentPage = 1;
			state.hasMore = false;
		},
		setTopicPhotosPage: (
			state: ITopicPhotosState,
			{ payload }: PayloadAction<number>
		) => {
			state.currentPage = payload;
		}
	},
	extraReducers: {
		[fetchTopicPhotos.pending.type]: (state: ITopicPhotosState) => {
			state.isLoading = true;
		},
		[fetchTopicPhotos.fulfilled.type]: (
			state: ITopicPhotosState,
			{ payload }: PayloadAction<IPhoto[]>
		) => {
			state.isLoading = false;
			state.error = null;
			state.data.push(...payload);
			state.hasMore = payload.length === state.pageSize;
		},
		[fetchTopicPhotos.rejected.type]: (
			state: ITopicPhotosState,
			{ payload }: PayloadAction<string>
		) => {
			state.isLoading = false;
			state.error = payload;
		}
	}
});

const { actions, reducer } = topicPhotosSlice;

export const { clearTopicPhotosData, setTopicPhotosPage } = actions;

export default reducer;
