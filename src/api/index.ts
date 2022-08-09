import axios from "axios";

export const apiKey = process.env.REACT_APP_API_KEY;

const api = axios.create({
	baseURL: "https://api.unsplash.com"
});

export default api;
