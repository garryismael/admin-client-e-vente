import { useDispatch } from 'react-redux';
import InputField from '../../components/InputField';
import { inputs } from '../../constants/user';
import useFormUser from '../../hooks/useFormUser';
import { addUser } from '../../redux/userSlice';
import { addUser as addUserService } from '../../services/user';

const UserAddView = () => {
	const dispatch = useDispatch();
	const addUserAction = async (data) => {
		const response = await addUserService(data);
		dispatch(addUser(response.data));
	};
	const [forms, onSubmit] = useFormUser({callback: addUserAction});

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
			<button
				onClick={onSubmit}
				className='btn-primary'>
				Submit
			</button>
		</div>
	);
};

export default UserAddView;

