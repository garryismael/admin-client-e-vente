import axios from '../utils/axios';

export const login = async ({ email, password }) => {
	return await axios.post(process.env.REACT_APP_AUTH_LOGIN, {
		email,
		password,
	});
};

export const logout = async () => {
	return await axios.post(`auth/logout`);
};


export const me = async () => {
	return await axios.get(process.env.REACT_APP_AUTH_ME);
};
