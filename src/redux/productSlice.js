import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
	name: 'product',
	initialState: {
		products: [],
	},
	reducers: {
		setProducts: (state, action) => {
			state.products = action.payload;
		},
		addProduct: (state, action) => {
			state.products.push(action.payload);
		},
		editProduct: (state, action) => {
			state.products = state.products.map((v) =>
				v.id !== action.payload.id ? v : { ...action.payload },
			);
		},
		removeProduct: (state, action) => {
			state.products = state.products.filter(
				(product) => product.id !== action.payload,
			);
		},
	},
});

export const productReducer = productSlice.reducer;

export const { setProducts, addProduct, editProduct, removeProduct } =
	productSlice.actions;

