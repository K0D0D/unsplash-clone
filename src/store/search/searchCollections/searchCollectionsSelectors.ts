import { ISearchCollectionsState } from "./searchCollectionsSlice";
import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../..";

const selectSearchCollections = (state: RootState): ISearchCollectionsState => (
    state.search.collections
);

export const selectSearchCollectionsData = createSelector(
    [selectSearchCollections],
    collections => collections.data
);

export const selectSearchCollectionsPageSize = createSelector(
    [selectSearchCollections],
    collections => collections.pageSize
);

export const selectSearchCollectionsCurrentPage = createSelector(
    [selectSearchCollections],
    collections => collections.currentPage
);

export const selectSearchCollectionsHasMore = createSelector(
    [selectSearchCollections],
    collections => collections.hasMore
);

export const selectSearchCollectionsIsLoading = createSelector(
    [selectSearchCollections],
    collections => collections.isLoading
);

export const selectSearchCollectionsError = createSelector(
    [selectSearchCollections],
    collections => collections.error
);