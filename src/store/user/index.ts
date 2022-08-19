import { combineReducers } from "@reduxjs/toolkit";
import details from "./userDetails/userDetailsSlice";
import photos from "./userPhotos/userPhotosSlice";
import likes from "./userLikes/userLikesSlice";
import collections from "./userCollections/userCollectionsSlice";

export default combineReducers({
    details,
    photos,
    likes,
    collections
});