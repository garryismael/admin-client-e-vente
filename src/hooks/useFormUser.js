import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const useFormUser = ({callback, user=null, edit=false}) => {
	const [name, setName] = useState(user?.name || '');
	const [profile, setProfile] = useState(null);
	const [address, setAddress] = useState(user?.address || '');
	const [contact, setContact] = useState(user?.contact || '');
	const [email, setEmail] = useState(user?.email || '');
	const [password, setPassword] = useState(user?.password || '');
	const navigate = useNavigate();

	const setInputName = (e) => {
		setName(e.target.value);
	};

	const setInputProfile = (e) => {
		setProfile(e.target.files[0]);
	};

	const setInputAddress = (e) => {
		setAddress(e.target.value);
	};

	const setInputContact = (e) => {
		setContact(e.target.value);
	};

	const setInputEmail = (e) => {
		setEmail(e.target.value);
	};

	const setInputPassword = (e) => {
		setPassword(e.target.value);
	};

	const onSubmit = async () => {
		const formData = new FormData();
		formData.append('name', name);
		formData.append('profile', profile);
		formData.append('address', address);
		formData.append('contact', contact);
		formData.append('email', email);
		if (!edit) {
			formData.append('password', password);
		}
		try {
			await callback(formData);
			navigate('/users');
		} catch (error) {
			console.error(error);
		}
	};

	return [
		[
			{ value: name, action: setInputName },
			{ value: profile, action: setInputProfile },
			{ value: address, action: setInputAddress },
			{ value: contact, action: setInputContact },
			{ value: email, action: setInputEmail },
			{ value: password, action: setInputPassword },
		],
		onSubmit,
	];
};

export default useFormUser;

