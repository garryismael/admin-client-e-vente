import axios from 'axios';

const baseUrl = process.env.REACT_APP_BASE_URL;
const instance = axios.create({
	baseURL: baseUrl,
});

export const setHeader = (response) => {
	const token = response.data.access_token;
	instance.defaults.headers.common[
		'Authorization'
	] = `Bearer ${token}`;
};

export default instance;
