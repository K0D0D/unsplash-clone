import { IUserDetails } from "../../../api/types";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import api, { apiKey } from "../../../api";

export const fetchUserDetails = createAsyncThunk<IUserDetails, string>(
	"user/details/fetchUserDetails",
	async (username, { rejectWithValue }) => {
		const requestStr = "/users/" + username + "?client_id=" + apiKey;

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
