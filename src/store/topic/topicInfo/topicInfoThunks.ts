import { ITopic } from "../../../api/types";
import { createAsyncThunk } from "@reduxjs/toolkit";
import api, { apiKey } from "../../../api";
import { toast } from "react-toastify";

export const fetchTopicInfo = createAsyncThunk<ITopic, string>(
	"topic/info/fetchTopicInfo",
	async (topic, { rejectWithValue }) => {
		const requestStr = "/topics/" + topic + "?client_id=" + apiKey;

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
