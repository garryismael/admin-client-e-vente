import { useEffect, useState } from "react";
import { getDeletedPurchases } from "../services/purchases";

const usePurchaseDeleted = () => {
	const [purchases, setPurchases] = useState([]);

	useEffect(() => {
		const fetch_data = async () => {
			try {
				const response = await getDeletedPurchases();
				setPurchases(response.data);
			} catch (errors) {
				throw new Error(errors);
			}
		};
		fetch_data();
	}, []);

	return [purchases, setPurchases];
};

export default usePurchaseDeleted;
