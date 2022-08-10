import { IPhoto } from './../../../api/types';
import { createAsyncThunk } from "@reduxjs/toolkit";
import api, { apiKey } from "../../../api";

interface IParams {
    slug: string;
    page: number;
    perPage: number;
};

export const fetchTopicPhotos = createAsyncThunk<IPhoto[], IParams>(
	"topic/photos/fetchTopicPhotos",
	async ({ slug, page, perPage }, { rejectWithValue }) => {
		const requestStr = "/topics/" + slug + 
						   "/photos?page=" + page + 
						   "&per_page=" + perPage + 
						   "&client_id=" + apiKey;

		try {
			const response = await api.get(requestStr);

			return response.data;
		} catch (err) {
			if (err instanceof Error) {
				return rejectWithValue(err.message);
			}

			return rejectWithValue(err);
		}
	}
);