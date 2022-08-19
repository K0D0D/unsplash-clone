import { RootState } from "../..";
import { createSelector } from "@reduxjs/toolkit";
import { IUserDetailsState } from "./userDetailsSlice";

const selectUserDetails = (state: RootState): IUserDetailsState => state.user.details;

export const selectUserDetailsData = createSelector(
    [selectUserDetails],
    details => details.data
);

export const selectUserDetailsIsLoading = createSelector(
    [selectUserDetails],
    details => details.isLoading
);

export const selectUserDetailsError = createSelector(
    [selectUserDetails],
    details => details.error
);