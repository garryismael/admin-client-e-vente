import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch } from 'react-redux';
import Search from '../components/Search';
import TableView from '../components/TableView';
import { titles } from '../constants/purchase';
import usePurchases from '../hooks/usePurchases';
import { removePurchase } from '../redux/purchaseSlice';
import { deletePurchases } from '../services/purchases';

import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const Actions = (props) => {
	const onDelete = async () => {
		props.setMessage(
			`Delete the purchase of ${props.item.client.name} with the product ${props.item.product.name}?`,
		);
		props.setDisplay('flex');
		props.setSelected(props.item);
	};

	return (
		<td className='max-w-xs px-6 space-x-4 py-auto'>
			<FontAwesomeIcon
				icon={faTrashAlt}
				color='tomato'
				size='lg'
				className='cursor-pointer'
				onClick={onDelete}
			/>
		</td>
	);
};

const PurchasePage = () => {
	const [purchases, setPurchases] = usePurchases();
	const dispatch = useDispatch();

	const onDeletePurchase = async (id) => {
		await deletePurchases(id);
		dispatch(removePurchase(id));
	};

	return (
		<>
			<div className='flex items-center justify-end'>
				<Search
					data={purchases}
					fields={titles}
					setData={setPurchases}
				/>
			</div>
			<TableView
				titles={titles}
				data={purchases}
				actions={Actions}
				onDelete={onDeletePurchase}
			/>
		</>
	);
};

export default PurchasePage;

