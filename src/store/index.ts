import { configureStore } from "@reduxjs/toolkit";
import editorialPhotos from "./editorialPhotos/editorialPhotosSlice";

const store = configureStore({
	reducer: {
		editorialPhotos
	}
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
