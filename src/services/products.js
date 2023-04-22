import { multipartForm } from '../constants/service';
import axios from '../utils/axios';

const URL = process.env.REACT_APP_PRODUCT_URL;

export const getProducts = async () => {
	return await axios.get(URL);
};

export const getProductAudits = async () => {
	return await axios.get(`${URL}/audits`);
}

export const getProductDeleted = async () => {
	return await axios.get(`${URL}/deleted`);
}

export const addProduct = async (data) => {
	return await axios.post(URL, data, multipartForm);
};

export const editProduct = async (id, data) => {
	return await axios.put(`${URL}/${id}`, data, multipartForm);
};

export const deleteProduct = async (id) => {
	return await axios.delete(`${URL}/${id}`);
};
