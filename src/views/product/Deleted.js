import Search from "../../components/Search";
import TableView from "../../components/TableView";
import { product_deleted_titles } from "../../constants/product_deleted";
import useProductDeleted from "../../hooks/useProductDeleted";

const ProductDeletedList = () => {
	const [products, setProducts] = useProductDeleted();
	return (
		<>
			<div className='flex items-center justify-end'>
				<Search
					data={products}
					fields={product_deleted_titles}
					setData={setProducts}
				/>
			</div>
			<TableView
				titles={product_deleted_titles}
				data={products}
			/>
		</>
	);
};

export default ProductDeletedList;
