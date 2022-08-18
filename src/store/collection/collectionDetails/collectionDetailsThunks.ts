import { ICollectionDetails } from "../../../api/types";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import api, { apiKey } from "../../../api";

export const fetchCollectionDetails = createAsyncThunk<ICollectionDetails, string>(
	"collection/details/fetchCollectionDetails",
	async (id, { rejectWithValue }) => {
		const requestStr = "/collections/" + id + "?client_id=" + apiKey;

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
