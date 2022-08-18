import { configureStore } from "@reduxjs/toolkit";
import editorialPhotos from "./editorialPhotos/editorialPhotosSlice";
import topic from "./topic";
import search from "./search";
import photoDetails from "./photoDetails/photoDetailsSlice";
import collection from "./collection";

const store = configureStore({
	reducer: {
		editorialPhotos,
		topic,
		search,
		photoDetails,
		collection
	}
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
