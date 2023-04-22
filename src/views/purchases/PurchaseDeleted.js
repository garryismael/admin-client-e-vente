import { useState } from "react";
import Search from "../../components/Search";
import { deleted_purchases_titles } from "../../constants/purchase";
import TableView from "../../components/TableView";

const PurchaseDeleted = () => {
	const [purchases, setPurchases] = useState([]);

	return (
		<>
			<div className='flex items-center justify-end'>
				<Search
					data={purchases}
					fields={deleted_purchases_titles}
					setData={setPurchases}
				/>
			</div>
			<TableView
				titles={deleted_purchases_titles}
				data={purchases}
			/>
		</>
	);
};

export default PurchaseDeleted;