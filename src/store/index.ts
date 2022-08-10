import { configureStore } from "@reduxjs/toolkit";
import editorialPhotos from "./editorialPhotos/editorialPhotosSlice";
import topic from "./topic";

const store = configureStore({
	reducer: {
		editorialPhotos,
		topic
	}
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
