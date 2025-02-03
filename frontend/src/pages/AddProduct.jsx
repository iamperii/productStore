import React from 'react';
import ProductForm from '../components/ProductForm/ProductForm';
import { BASE_URL } from '../../redux/index';
import { useNavigate } from 'react-router-dom';
const AddProduct = () => {
	const navigate = useNavigate();
	const handleCreate = async (newProduct) => {
		try {
			const response = await fetch(`${BASE_URL}`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(newProduct),
			});

			if (response.ok) {
				console.log('New product created successfully', newProduct);
				navigate('/');
			} else {
				console.error('Failed to create product', response.statusText);
			}
		} catch (error) {
			console.error('Failed to create product', error);
		}
	};

	return <ProductForm mode="add" onSubmit={handleCreate} />;
};

export default AddProduct;
