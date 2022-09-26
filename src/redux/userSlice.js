import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
	name: 'user',
	initialState: {
		users: [],
	},
	reducers: {
		setUsers: (state, action) => {
			state.users = action.payload;
		},
		addUser: (state, action) => {
			state.users.push(action.payload);
		},
		editUser: (state, action) => {
			state.users = state.users.map((v) =>
				v.id !== action.payload.id ? v : { ...action.payload },
			);
		},
		removeUser: (state, action) => {
			state.users = state.users.filter(
				(user) => user.id !== action.payload,
			);
		},
	},
});

export const userReducer = userSlice.reducer;

export const { setUsers, addUser, editUser, removeUser } = userSlice.actions;

