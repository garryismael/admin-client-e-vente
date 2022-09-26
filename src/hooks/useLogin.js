import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login, me } from '../services/auth';
import { setHeader } from '../utils/axios';
import { setUser } from '../redux/authSlice';
const useLogin = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const loginUser = async () => {
		try {
			let response = await login({ email, password });
			setHeader(response);
			response = await me();
			dispatch(setUser(response.data));
            navigate('/');
		} catch (error) {
			setError('Invalid Email Or Password');
		}
	};
	return [setEmail, setPassword, error, loginUser];
};

export default useLogin;

