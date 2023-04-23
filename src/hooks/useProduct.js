import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/productSlice";
import { getProducts } from "../services/products";

const useProducts = () => {
	const dispatch = useDispatch();
	const products = useSelector((state) => state.product.products);
	useEffect(() => {
		const fetch_data = async () => {
			try {
				const response = await getProducts();
				dispatch(setProducts(response.data));
			} catch (errors) {
				throw new Error(errors);
			}
		};
		fetch_data();
	}, []);

	const setData = (data) => {
		dispatch(setProducts(data));
	};

	return [products, setData];
};

export default useProducts;
