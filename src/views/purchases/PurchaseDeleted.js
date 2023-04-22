import Search from "../../components/Search";
import TableView from "../../components/TableView";
import { deleted_purchases_titles } from "../../constants/purchase";
import usePurchaseDeleted from "../../hooks/usePurchaseDeleted";

const PurchaseDeleted = () => {
	const [purchases, setPurchases] = usePurchaseDeleted();

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