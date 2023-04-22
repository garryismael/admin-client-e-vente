import axios from '../utils/axios';

const URL = process.env.REACT_APP_PURCHASE_URL;

export const getPurchases = async () => {
	return await axios.get(URL);
};

export const getDeletedPurchases = async () => {
	return await axios.get(`${URL}/deleted`);
};


export const deletePurchases = async (id) => {
	return await axios.delete(`${URL}/${id}`);
};
