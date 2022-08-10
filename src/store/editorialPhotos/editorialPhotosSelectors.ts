import { RootState } from '..';
import { IEditorialPhotosState } from './editorialPhotosSlice';
import { createSelector } from "@reduxjs/toolkit";

const selectEditorialPhotos = (state: RootState): IEditorialPhotosState => (
    state.editorialPhotos
);

export const selectEditorialPhotosData = createSelector(
    [selectEditorialPhotos],
    editorialPhotos => editorialPhotos.data
);

export const selectEditorialPhotosPageSize = createSelector(
    [selectEditorialPhotos],
    editorialPhotos => editorialPhotos.pageSize
);

export const selectEditorialPhotosCurrentPage = createSelector(
    [selectEditorialPhotos],
    editorialPhotos => editorialPhotos.currentPage
);

export const selectEditorialPhotosHasMore = createSelector(
    [selectEditorialPhotos],
    editorialPhotos => editorialPhotos.hasMore
);

export const selectEditorialPhotosIsLoading = createSelector(
    [selectEditorialPhotos],
    editorialPhotos => editorialPhotos.isLoading
);

export const selectEditorialPhotosError = createSelector(
    [selectEditorialPhotos],
    editorialPhotos => editorialPhotos.error
);