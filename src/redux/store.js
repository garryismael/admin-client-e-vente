import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import { authReducer } from './authSlice';
import { productReducer } from './productSlice';
import { purchaseReducer } from './purchaseSlice';
import { userReducer } from './userSlice';

const reducer = combineReducers({
	auth: authReducer,
	product: productReducer,
	user: userReducer,
	purchase: purchaseReducer
});

export const store = configureStore({
	reducer,
});

