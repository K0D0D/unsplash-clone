import { IUserPhotosState } from "./userPhotosSlice";
import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../..";

const selectUserPhotos = (state: RootState): IUserPhotosState => state.user.photos;

export const selectUserPhotosData = createSelector(
    [selectUserPhotos],
    photos => photos.data
);

export const selectUserPhotosPageSize = createSelector(
    [selectUserPhotos],
    photos => photos.pageSize
);

export const selectUserPhotosCurrentPage = createSelector(
    [selectUserPhotos],
    photos => photos.currentPage
);

export const selectUserPhotosHasMore = createSelector(
    [selectUserPhotos],
    photos => photos.hasMore
);

export const selectUserPhotosIsLoading = createSelector(
    [selectUserPhotos],
    photos => photos.isLoading
);

export const selectUserPhotosError = createSelector(
    [selectUserPhotos],
    photos => photos.error
);