import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUsers } from "../redux/userSlice";
import { getUsers } from "../services/user";

const useUsers = () => {
	const dispatch = useDispatch();
	const users = useSelector((state) => state.user.users);
	useEffect(() => {
		const fetch_data = async () => {
			try {
				const response = await getUsers();
				dispatch(setUsers(response.data));
			} catch (errors) {
				throw new Error(errors);
			}
		};
		fetch_data();
	}, []);

	const setData = (data) => {
		dispatch(setUsers(data));
	};

	return [users, setData];
};

export default useUsers;
