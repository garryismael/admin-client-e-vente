import Search from "../../components/Search";
import TableView from "../../components/TableView";
import { product_audits_titles } from "../../constants/product_audit";
import useProductAudits from "../../hooks/useProductAudit";

const ProductAuditList = () => {
	const [products, setProducts] = useProductAudits();
	return (
		<>
			<div className='flex items-center justify-end'>
				<Search
					data={products}
					fields={product_audits_titles}
					setData={setProducts}
				/>
			</div>
			<TableView
				titles={product_audits_titles}
				data={products}
			/>
		</>
	);
};

export default ProductAuditList;
