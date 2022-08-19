import { IUserCollectionsState } from "./userCollectionsSlice";
import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../..";

const selectUserCollections = (state: RootState): IUserCollectionsState => (
    state.user.collections
);

export const selectUserCollectionsData = createSelector(
    [selectUserCollections],
    collections => collections.data
);

export const selectUserCollectionsPageSize = createSelector(
    [selectUserCollections],
    collections => collections.pageSize
);

export const selectUserCollectionsCurrentPage = createSelector(
    [selectUserCollections],
    collections => collections.currentPage
);

export const selectUserCollectionsHasMore = createSelector(
    [selectUserCollections],
    collections => collections.hasMore
);

export const selectUserCollectionsIsLoading = createSelector(
    [selectUserCollections],
    collections => collections.isLoading
);

export const selectUserCollectionsError = createSelector(
    [selectUserCollections],
    collections => collections.error
);