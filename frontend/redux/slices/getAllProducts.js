import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { BASE_URL } from '../index.js';

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
	try {
		const response = await fetch(`${BASE_URL}`, {
			method: 'GET',
			headers: {
				'Content-type': 'application/json',
			},
		});

		const data = await response.json();

		if (data.success) {
			return data.data;
		} else {
			throw new Error('Failed to fetch products');
		}
	} catch (error) {
		throw error;
	}
});

const initialState = {
	products: [],
	error: null,
	loading: false,
};

export const getAllProduct = createSlice({
	name: 'products',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchProducts.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(fetchProducts.fulfilled, (state, action) => {
				state.loading = false;
				state.products = Array.isArray(action.payload) ? action.payload : [];
			})
			.addCase(fetchProducts.rejected, (state, action) => {
				state.loading = false;
				state.error = action.error.message || 'An error occurred';
			});
	},
});

export const {} = getAllProduct.actions;
export default getAllProduct.reducer;
