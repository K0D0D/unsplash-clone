import { IUserDetails } from "../../../api/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchUserDetails } from "../userDetails/userDetailsThunks";

export interface IUserDetailsState {
	data: IUserDetails | null;
	isLoading: boolean;
	error: null | string;
}

const initialState: IUserDetailsState = {
	data: null,
	isLoading: false,
	error: null
};

const userDetailsSlice = createSlice({
	name: "user/details",
	initialState,
	reducers: {},
	extraReducers: {
		[fetchUserDetails.pending.type]: (state: IUserDetailsState) => {
			state.isLoading = true;
		},
		[fetchUserDetails.fulfilled.type]: (
			state: IUserDetailsState,
			{ payload }: PayloadAction<IUserDetails>
		) => {
			state.isLoading = false;
			state.error = null;
			state.data = payload;
		},
		[fetchUserDetails.rejected.type]: (
			state: IUserDetailsState,
			{ payload }: PayloadAction<string>
		) => {
			state.isLoading = false;
			state.error = payload;
			state.data = null;
		}
	}
});

export default userDetailsSlice.reducer;
