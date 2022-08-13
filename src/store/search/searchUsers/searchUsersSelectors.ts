import { ISearchUsersState } from "./searchUsersSlice";
import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../..";

const selectSearchUsers = (state: RootState): ISearchUsersState => state.search.users;

export const selectSearchUsersData = createSelector(
    [selectSearchUsers],
    users => users.data
);

export const selectSearchUsersPageSize = createSelector(
    [selectSearchUsers],
    users => users.pageSize
);

export const selectSearchUsersCurrentPage = createSelector(
    [selectSearchUsers],
    users => users.currentPage
);

export const selectSearchUsersHasMore = createSelector(
    [selectSearchUsers],
    users => users.hasMore
);

export const selectSearchUsersIsLoading = createSelector(
    [selectSearchUsers],
    users => users.isLoading
);

export const selectSearchUsersError = createSelector(
    [selectSearchUsers],
    users => users.error
);