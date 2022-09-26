import { multipartForm } from '../constants/service';
import axios from '../utils/axios';

const URL = process.env.REACT_APP_USER_URL;

export const getUsers = async () => {
	return await axios.get(URL);
};

export const addUser = async (data) => {
	return await axios.post(URL, data, multipartForm);
};

export const editUser = async (id, data) => {
	return await axios.put(`${URL}/${id}`, data, multipartForm);
};

export const deleteUser = async (id) => {
	return await axios.delete(`${URL}/${id}`);
};
