import { useDispatch } from 'react-redux';
import InputField from '../../components/InputField';
import TextField from '../../components/TextField';
import { inputs } from '../../constants/product';
import useFormProduct from '../../hooks/useFormProduct';
import { addProduct } from '../../redux/productSlice';
import { addProduct as addProductService } from '../../services/products';

const ProductAdd = () => {
	const dispatch = useDispatch();
	const addProductAction = async (data) => {
		const response = await addProductService(data);
		dispatch(addProduct(response.data));
	};
	const [forms, onSubmit] = useFormProduct(addProductAction);

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
				Submit
			</button>
		</div>
	);
};

export default ProductAdd;

