import { IPhoto } from "../../api/types";
import { createAsyncThunk } from "@reduxjs/toolkit";
import api, { apiKey } from "../../api";

interface IParams {
	page: number;
	perPage: number;
}

export const fetchEditorialPhotos = createAsyncThunk<IPhoto[], IParams>(
	"editorialPhotos/fetchEditorialPhotos",
	async ({ page, perPage }, { rejectWithValue }) => {
		const requestStr = "/photos/?page=" + page +
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