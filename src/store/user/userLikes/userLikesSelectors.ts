import { IUserLikesState } from "./userLikesSlice";
import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../..";

const selectUserLikes = (state: RootState): IUserLikesState => state.user.likes;

export const selectUserLikesData = createSelector(
    [selectUserLikes],
    likes => likes.data
);

export const selectUserLikesPageSize = createSelector(
    [selectUserLikes],
    likes => likes.pageSize
);

export const selectUserLikesCurrentPage = createSelector(
    [selectUserLikes],
    likes => likes.currentPage
);

export const selectUserLikesHasMore = createSelector(
    [selectUserLikes],
    likes => likes.hasMore
);

export const selectUserLikesIsLoading = createSelector(
    [selectUserLikes],
    likes => likes.isLoading
);

export const selectUserLikesError = createSelector(
    [selectUserLikes],
    likes => likes.error
);