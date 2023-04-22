import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import Actions from "../../components/Actions";
import Search from "../../components/Search";
import TableView from "../../components/TableView";
import { titles } from "../../constants/product";
import useProducts from "../../hooks/useProduct";
import { removeProduct } from "../../redux/productSlice";
import { deleteProduct } from "../../services/products";
import { useDispatch } from "react-redux";

const ProductList = () => {
	const [products, setProducts] = useProducts();
	const dispatch = useDispatch();
	const onDeleteProduct = async (id) => {
		await deleteProduct(id);
		dispatch(removeProduct(id));
	};
	return (
		<>
			<div className='flex items-center justify-between'>
				<div className='flex items-center gap-3'>
					<Link to='add'>
						<FontAwesomeIcon
							icon={faPlusCircle}
							color='blue'
							size='2x'
						/>
					</Link>
					<Link to='audit'>
						<span className="py-2 px-3 text-white bg-cyan-600 rounded-sm">
							Audit
						</span>
					</Link>
				</div>
				<Search
					data={products}
					fields={titles}
					setData={setProducts}
				/>
			</div>
			<TableView
				titles={titles}
				data={products}
				actions={Actions}
				url={process.env.REACT_APP_PRODUCT_URL}
				editUrl='edit'
				onDelete={onDeleteProduct}
			/>
		</>
	);
};

export default ProductList;
