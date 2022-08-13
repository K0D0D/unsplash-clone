import { combineReducers } from "@reduxjs/toolkit";
import photos from "./searchPhotos/searchPhotosSlice";
import collections from "./searchCollections/searchCollectionsSlice";
import users from "./searchUsers/searchUsersSlice";

export default combineReducers({
    photos,
    collections,
    users
});