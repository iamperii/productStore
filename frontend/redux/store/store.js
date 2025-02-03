import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../slices/getAllProducts';
export const store = configureStore({
	reducer: {
		products: productReducer,
	},
});
