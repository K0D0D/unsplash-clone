import { IPhotoDetails } from "../../api/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchPhotoDetails } from "./photoDetailsThunks";

export interface IPhotoDetailsState {
	data: IPhotoDetails | null;
	isLoading: boolean;
	error: null | string;
}

const initialState: IPhotoDetailsState = {
	data: null,
	isLoading: false,
	error: null
};

const photoDetailsSlice = createSlice({
	name: "photoDetails",
	initialState,
	reducers: {},
	extraReducers: {
		[fetchPhotoDetails.pending.type]: (state: IPhotoDetailsState) => {
			state.isLoading = true;
		},
		[fetchPhotoDetails.fulfilled.type]: (
			state: IPhotoDetailsState,
			{ payload }: PayloadAction<IPhotoDetails>
		) => {
			state.isLoading = false;
			state.error = null;
			state.data = payload;
		},
		[fetchPhotoDetails.rejected.type]: (
			state: IPhotoDetailsState,
			{ payload }: PayloadAction<string>
		) => {
			state.isLoading = false;
			state.error = payload;
			state.data = null;
		}
	}
});

export default photoDetailsSlice.reducer;
