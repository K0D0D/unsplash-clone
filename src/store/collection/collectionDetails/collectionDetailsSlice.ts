import { ICollectionDetails } from "../../../api/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchCollectionDetails } from "./collectionDetailsThunks";

export interface ICollectionDetailsState {
	data: ICollectionDetails | null;
	isLoading: boolean;
	error: null | string;
}

const initialState: ICollectionDetailsState = {
	data: null,
	isLoading: false,
	error: null
};

const collectionDetailsSlice = createSlice({
	name: "collection/details",
	initialState,
	reducers: {},
	extraReducers: {
		[fetchCollectionDetails.pending.type]: (state: ICollectionDetailsState) => {
			state.isLoading = true;
		},
		[fetchCollectionDetails.fulfilled.type]: (
			state: ICollectionDetailsState,
			{ payload }: PayloadAction<ICollectionDetails>
		) => {
			state.isLoading = false;
			state.error = null;
			state.data = payload;
		},
		[fetchCollectionDetails.rejected.type]: (
			state: ICollectionDetailsState,
			{ payload }: PayloadAction<string>
		) => {
			state.isLoading = false;
			state.error = payload;
			state.data = null;
		}
	}
});

export default collectionDetailsSlice.reducer;
