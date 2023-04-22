import { useEffect, useState } from "react";
import { getProductDeleted } from "../services/products";

const useProductDeleted = () => {
	const [products, setProducts] = useState([]);
	useEffect(() => {
		const fetch_data = async () => {
			try {
				const response = await getProductDeleted();
				setProducts(response.data);
			} catch (errors) {
				throw new Error(errors);
			}
		};
		fetch_data();
	}, []);

	return [products, setProducts];
};

export default useProductDeleted;
