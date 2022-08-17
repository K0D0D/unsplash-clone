import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "..";
import { IPhotoDetailsState } from "./photoDetailsSlice";

const selectPhotoDetails = (state: RootState): IPhotoDetailsState => state.photoDetails;

export const selectPhotoDetailsData = createSelector(
    [selectPhotoDetails],
    photoDetails => photoDetails.data
);


export const selectPhotoDetailsIsLoading = createSelector(
    [selectPhotoDetails],
    photoDetails => photoDetails.isLoading
);


export const selectPhotoDetailsError = createSelector(
    [selectPhotoDetails],
    photoDetails => photoDetails.error
);