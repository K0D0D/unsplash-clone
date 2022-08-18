import { combineReducers } from "@reduxjs/toolkit";
import details from "./collectionDetails/collectionDetailsSlice";
import photos from "./collectionPhotos/collectionPhotosSlice";

export default combineReducers({
	details,
	photos
});
