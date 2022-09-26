import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPurchases } from '../redux/purchaseSlice';
import { getPurchases } from '../services/purchases';

const usePurchases = () => {
	const dispatch = useDispatch();
	const purchases = useSelector((state) => state.purchase.purchases);
	useEffect(() => {
		const fetch_data = async () => {
			try {
				const response = await getPurchases();
				dispatch(setPurchases(response.data));
			} catch (errors) {
				throw new Error(errors);
			}
		};
		if (purchases.length <= 0) {
			fetch_data();
		}
	}, [dispatch, purchases]);

	const setData = (data) => {
		dispatch(setPurchases(data));
	};

	return [purchases, setData];
};

export default usePurchases;

