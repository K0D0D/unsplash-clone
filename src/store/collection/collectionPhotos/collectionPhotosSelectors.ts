import { ICollectionPhotosState } from "./collectionPhotosSlice";
import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../..";

const selectCollectionPhotos = (state: RootState): ICollectionPhotosState => state.collection.photos;

export const selectCollectionPhotosData = createSelector(
    [selectCollectionPhotos],
    photos => photos.data
);

export const selectCollectionPhotosPageSize = createSelector(
    [selectCollectionPhotos],
    photos => photos.pageSize
);

export const selectCollectionPhotosCurrentPage = createSelector(
    [selectCollectionPhotos],
    photos => photos.currentPage
);

export const selectCollectionPhotosHasMore = createSelector(
    [selectCollectionPhotos],
    photos => photos.hasMore
);

export const selectCollectionPhotosIsLoading = createSelector(
    [selectCollectionPhotos],
    photos => photos.isLoading
);

export const selectCollectionPhotosError = createSelector(
    [selectCollectionPhotos],
    photos => photos.error
);