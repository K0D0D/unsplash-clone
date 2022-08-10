import { RootState } from "../..";
import { ITopicPhotosState } from "./topicPhotosSlice";
import { createSelector } from "@reduxjs/toolkit";

const selectTopicPhotos = (state: RootState): ITopicPhotosState => state.topic.photos;

export const selectTopicPhotosData = createSelector(
    [selectTopicPhotos],
    photos => photos.data
);

export const selectTopicPhotosPageSize = createSelector(
    [selectTopicPhotos],
    photos => photos.pageSize
);

export const selectTopicPhotosCurrentPage = createSelector(
    [selectTopicPhotos],
    photos => photos.currentPage
);

export const selectTopicPhotosHasMore = createSelector(
    [selectTopicPhotos],
    photos => photos.hasMore
);

export const selectTopicPhotosIsLoading = createSelector(
    [selectTopicPhotos],
    photos => photos.isLoading
);

export const selectTopicPhotosError = createSelector(
    [selectTopicPhotos],
    photos => photos.error
);