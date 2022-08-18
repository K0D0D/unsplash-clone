import { RootState } from "../..";
import { createSelector } from "@reduxjs/toolkit";
import { ICollectionDetailsState } from './collectionDetailsSlice';

const selectCollectionDetails = (state: RootState): ICollectionDetailsState => state.collection.details;

export const selectCollectionDetailsData = createSelector(
    [selectCollectionDetails],
    details => details.data
);

export const selectCollectionDetailsIsLoading = createSelector(
    [selectCollectionDetails],
    details => details.isLoading
);

export const selectCollectionDetailsError = createSelector(
    [selectCollectionDetails],
    details => details.error
);