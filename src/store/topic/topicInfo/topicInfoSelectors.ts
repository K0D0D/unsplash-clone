import { RootState } from "../..";
import { ITopicInfoState } from './topicInfoSlice';
import { createSelector } from "@reduxjs/toolkit";

const selectTopicInfo = (state: RootState): ITopicInfoState => state.topic.info;

export const selectTopicInfoData = createSelector(
    [selectTopicInfo],
    info => info.data
);

export const selectTopicInfoIsLoading = createSelector(
    [selectTopicInfo],
    info => info.isLoading
);

export const selectTopicInfoError = createSelector(
    [selectTopicInfo],
    info => info.error
);