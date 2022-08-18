import { IPhoto } from "../../../api/types";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import api, { apiKey } from "../../../api";

interface IParams {
	id: string;
	page: number;
	perPage: number
};

export const fetchCollectionPhotos = createAsyncThunk<IPhoto[], IParams>(
	"collection/photos/fetchCollectionPhotos",
	async ({ id, page, perPage}, { rejectWithValue }) => {
		const requestStr = "/collections/" + id + 
                           "/photos?page=" + page +
						   "&per_page=" + perPage + 
						   "&client_id=" + apiKey;

		try {
			const response = await api.get(requestStr);

			return response.data;
		} catch (err) {
			if (err instanceof Error) {
				toast.error(err.message);

				return rejectWithValue(err.message);
			}

			return rejectWithValue(err);
		}
	}
);