import { ICollection } from "../../../api/types";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import api, { apiKey } from "../../../api";

interface IParams {
	username: string;
	page: number;
	perPage: number;
}

export const fetchUserCollections = createAsyncThunk<ICollection[], IParams>(
	"search/collections/fetchSearchCollections",
	async ({ username, page, perPage }, { rejectWithValue }) => {
		const requestStr = "/users/" + username +
                           "/collections/?page=" + page +
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
