import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import TableView from "../components/TableView";
import { titles } from "../constants/purchase";
import usePurchases from "../hooks/usePurchases";
import { removePurchase } from "../redux/purchaseSlice";
import { deletePurchases } from "../services/purchases";

import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";
import { Link } from "react-router-dom";

const Search = ({ data, fields, setData }) => {
	const [origin, setOrigin] = useState([]);

	const filter = (value) => {
		if (origin.length === 0) setOrigin([...data]);
		if (value === "") {
			setData([...origin]);
		} else {
			const results = origin.filter((obj) => {
				for (let field of fields) {
					if (Array.isArray(field) || !(field instanceof Object)) {
						let idx = Array.isArray(field) ? field[0] : field;
						if (
							obj[idx]
								.toString()
								.toLowerCase()
								.includes(value.toLowerCase())
						)
							return true;
					} else {
						if (
							obj.product.name
								.toString()
								.toLowerCase()
								.includes(value.toLowerCase())
						) {
							return true;
						}
						if (
							obj.client.name
								.toString()
								.toLowerCase()
								.includes(value.toLowerCase())
						) {
							return true;
						}
					}
				}
				return false;
			});
			setData(results);
		}
	};

	return (
		<div className='w-48'>
			<input
				type='text'
				className='input-field'
				placeholder='Search'
				required
				onKeyUp={(e) => filter(e.target.value)}
			/>
		</div>
	);
};
const Actions = (props) => {
	const onDelete = async () => {
		props.setMessage(
			`Delete the purchase of ${props.item.client.name} with the product ${props.item.product.name}?`,
		);
		props.setDisplay("flex");
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
			<div className='flex items-center justify-between'>
				<div className='flex items-center gap-3'>
					<Link to='deleted'>
						<span className='py-2 px-3 text-white bg-cyan-600 rounded-sm'>
							Deleted
						</span>
					</Link>
				</div>
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
