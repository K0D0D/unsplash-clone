import { ITopic } from "./../../../api/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchTopicInfo } from "../topicInfo/topicInfoThunks";

export interface ITopicInfoState {
	data: ITopic | null;
	isLoading: boolean;
	error: null | string;
}

const initialState: ITopicInfoState = {
	data: null,
	isLoading: false,
	error: null
};

const topicInfoSlice = createSlice({
	name: "topic/info",
	initialState,
	reducers: {},
	extraReducers: {
		[fetchTopicInfo.pending.type]: (state: ITopicInfoState) => {
			state.isLoading = true;
		},
		[fetchTopicInfo.fulfilled.type]: (
			state: ITopicInfoState,
			{ payload }: PayloadAction<ITopic>
		) => {
			state.isLoading = false;
			state.error = null;
			state.data = payload;
		},
		[fetchTopicInfo.rejected.type]: (
			state: ITopicInfoState,
			{ payload }: PayloadAction<string>
		) => {
			state.isLoading = false;
			state.error = payload;
			state.data = null;
		}
	}
});

export default topicInfoSlice.reducer;
