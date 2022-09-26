import { createSlice } from '@reduxjs/toolkit';

const purchaseSlice = createSlice({
	name: 'purchase',
	initialState: {
		purchases: [],
	},
	reducers: {
		setPurchases: (state, action) => {
			state.purchases = action.payload;
		},
		editPurchase: (state, action) => {
			let purchase = state.purchases.filter(
				(v) => v.id === action.payload.id,
			);
			if (purchase) {
				purchase = action.payload;
			}
		},
		removePurchase: (state, action) => {
			state.purchases = state.purchases.filter(
				(purchase) => purchase.id !== action.payload,
			);
		},
	},
});

export const purchaseReducer = purchaseSlice.reducer;

export const { setPurchases, editPurchase, removePurchase } =
	purchaseSlice.actions;

