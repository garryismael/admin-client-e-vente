import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import InputField from '../../components/InputField';
import { inputEdit } from '../../constants/user';
import useFormUser from '../../hooks/useFormUser';
import { editUser } from '../../redux/userSlice';
import { editUser as editUserService } from '../../services/user';
const UserEditView = () => {
	const dispatch = useDispatch();
	const { id } = useParams();

	const user = useSelector((state) =>
		state.user.users.find((user) => user.id === parseInt(id)),
	);

	const editUserAction = async (data) => {
		const response = await editUserService(id, data);
		dispatch(editUser(response.data));
	};

	const [forms, onSubmit] = useFormUser({ callback: editUserAction, user, edit: true });

	return (
		<div className='max-w-lg p-8 mx-auto my-10 bg-white rounded-lg shadow-2xl md:p-12'>
			{inputEdit.map((input, index) => (
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
				Edit
			</button>
		</div>
	);
};

export default UserEditView;

