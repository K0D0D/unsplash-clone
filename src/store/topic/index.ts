import { combineReducers } from "@reduxjs/toolkit";
import topicInfoSlice from "./topicInfo/topicInfoSlice";
import topicPhotosSlice from "./topicPhotos/topicPhotosSlice";

export default combineReducers({
    info: topicInfoSlice,
    photos: topicPhotosSlice
});