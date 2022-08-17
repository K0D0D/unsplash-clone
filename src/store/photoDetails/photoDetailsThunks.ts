import { IPhotoDetails } from "../../api/types";
import api, { apiKey } from "../../api";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

export const fetchPhotoDetails = createAsyncThunk<IPhotoDetails, string>(
	"photoDetails/fetchPhotoDetails",
	async (id, { rejectWithValue }) => {
		const requestStr = "/photos/" + id + "?client_id=" + apiKey;

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
