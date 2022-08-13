import { ISearchPhotosState } from "./searchPhotosSlice";
import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../..";

const selectSearchPhotos = (state: RootState): ISearchPhotosState => state.search.photos;

export const selectSearchPhotosData = createSelector(
    [selectSearchPhotos],
    photos => photos.data
);

export const selectSearchPhotosPageSize = createSelector(
    [selectSearchPhotos],
    photos => photos.pageSize
);

export const selectSearchPhotosCurrentPage = createSelector(
    [selectSearchPhotos],
    photos => photos.currentPage
);

export const selectSearchPhotosHasMore = createSelector(
    [selectSearchPhotos],
    photos => photos.hasMore
);

export const selectSearchPhotosIsLoading = createSelector(
    [selectSearchPhotos],
    photos => photos.isLoading
);

export const selectSearchPhotosError = createSelector(
    [selectSearchPhotos],
    photos => photos.error
);