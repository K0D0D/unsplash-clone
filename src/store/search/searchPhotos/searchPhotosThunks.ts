import { IPhoto } from "../../../api/types";
import { createAsyncThunk } from "@reduxjs/toolkit";
import api, { apiKey } from "../../../api";

interface IParams {
	query: string;
	page: number;
	perPage: number
};

export const fetchSearchPhotos = createAsyncThunk<IPhoto[], IParams>(
	"search/photos/fetchSearchPhotos",
	async ({ query, page, perPage}, { rejectWithValue }) => {
		const requestStr = "/search/photos/?page=" + page +
						   "&per_page=" + perPage + 
						   "&query=" + query +
						   "&client_id=" + apiKey;

		try {
			const response = await api.get(requestStr);

			return response.data.results;
		} catch (err) {
			if (err instanceof Error) {
				return rejectWithValue(err.message);
			}

			return rejectWithValue(err);
		}
	}
);