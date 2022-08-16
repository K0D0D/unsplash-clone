import { IUser } from "../../../api/types";
import { createAsyncThunk } from "@reduxjs/toolkit";
import api, { apiKey } from "../../../api";
import { toast } from "react-toastify";

interface IParams {
	query: string;
	page: number;
	perPage: number;
}

export const fetchSearchUsers = createAsyncThunk<IUser[], IParams>(
	"search/users/fetchSearchUsers",
	async ({ query, page, perPage }, { rejectWithValue }) => {
		const requestStr = "/search/users/?page=" + page +
			               "&per_page=" + perPage +
			               "&query=" + query +
			               "&client_id=" + apiKey;
						   
		try {
			const response = await api.get(requestStr);

			return response.data.results;
		} catch (err) {
			if (err instanceof Error) {
				toast.error(err.message);

				return rejectWithValue(err.message);
			}

			return rejectWithValue(err);
		}
	}
);
