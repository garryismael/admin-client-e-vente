import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import Actions from '../../components/Actions';
import Search from '../../components/Search';
import TableView from '../../components/TableView';
import { titles } from '../../constants/product';
import useProducts from '../../hooks/useProduct';

const ProductList = () => {
	const [products, setProducts] = useProducts();
	return (
		<>
			<div className='flex items-center justify-between'>
				<Link to='add'>
					<FontAwesomeIcon
						icon={faPlusCircle}
						color='blue'
						size='2x'
					/>
				</Link>
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
			/>
		</>
	);
};

export default ProductList;

