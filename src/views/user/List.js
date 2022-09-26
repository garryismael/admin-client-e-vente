import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Actions from '../../components/Actions';
import Search from '../../components/Search';
import TableView from '../../components/TableView';
import { titles } from '../../constants/user';
import useUsers from '../../hooks/useUser';
import { removeUser } from '../../redux/userSlice';
import { deleteUser } from '../../services/user';

const UserList = () => {
	const [users, setUsers] = useUsers();
	const dispatch = useDispatch();
	
	const onDeleteUser = async (id) => {
		await deleteUser(id);
		dispatch(removeUser(id));
	};

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
					data={users}
					fields={titles}
					setData={setUsers}
				/>
			</div>
			<TableView
				titles={titles}
				data={users}
				actions={Actions}
				url={process.env.REACT_APP_USER_URL}
				editUrl='edit'
				onDelete={onDeleteUser}
			/>
		</>
	);
};

export default UserList;

