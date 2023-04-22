import { useEffect, useState } from 'react';
import { getProductAudits } from '../services/products';

const useProductAudits = () => {
	const [products, setProducts] = useState([]);
	useEffect(() => {
		const fetch_data = async () => {
			try {
				const response = await getProductAudits();
                setProducts(response.data);
			} catch (errors) {
				throw new Error(errors);
			}
		};
        fetch_data()
	}, []);

	return [products, setProducts];
};

export default useProductAudits;

