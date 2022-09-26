import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const useFormProduct = (callback, product) => {
	const [name, setName] = useState(product?.name || '');
	const [price, setPrice] = useState(product?.price || 0);
	const [image, setImage] = useState(null);
	const [description, setDescription] = useState(product?.description || '');
	const navigate = useNavigate();

	const setInputName = (e) => {
		setName(e.target.value);
	};

	const setInputPrice = (e) => {
		setPrice(e.target.value);
	};

	const setInputImage = (e) => {
		setImage(e.target.files[0]);
	};

	const setInputDescription = (e) => {
		setDescription(e.target.value);
	};

	const onSubmit = async () => {
		const formData = new FormData();
		formData.append('name', name);
		formData.append('price', price);
		formData.append('image', image);
		formData.append('description', description);
		try {
			await callback(formData);
			navigate('/products');
		} catch (error) {
			console.error(error);
		}
	};

	return [
		[
			{ value: name, action: setInputName },
			{ value: image, action: setInputImage },
			{ value: price, action: setInputPrice },
			{ value: description, action: setInputDescription },
		],
		onSubmit,
	];
};

export default useFormProduct;

