import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import InputField from '../../components/InputField';
import TextField from '../../components/TextField';
import { inputs } from '../../constants/product';
import useFormProduct from '../../hooks/useFormProduct';
import { editProduct } from '../../redux/productSlice';
import { editProduct as editProductService } from '../../services/products';
const ProductEdit = () => {
	const dispatch = useDispatch();
	const { id } = useParams();

	const product = useSelector((state) =>
		state.product.products.find((product) => product.id === parseInt(id)),
	);

	const editProductAction = async (data) => {
		const response = await editProductService(id, data);
		dispatch(editProduct(response.data));
	};

	const [forms, onSubmit] = useFormProduct(editProductAction, product);

	return (
		<div className='max-w-lg p-8 mx-auto my-10 bg-white rounded-lg shadow-2xl md:p-12'>
			{inputs.map((input, index) => (
				<InputField
					key={input.label}
					label={input.label}
					type={input.type}
					value={forms[index].value}
					setValue={forms[index].action}
				/>
			))}
			<TextField
				label='Description'
				value={forms[forms.length - 1].value}
				setValue={forms[forms.length - 1].action}
			/>
			<button
				onClick={onSubmit}
				className='btn-primary'>
				Edit
			</button>
		</div>
	);
};

export default ProductEdit;

