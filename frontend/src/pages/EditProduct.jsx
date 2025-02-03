import { useEffect, useState } from 'react';
import ProductForm from '../components/ProductForm/ProductForm';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { BASE_URL } from '../../redux/index.js';

const EditProduct = () => {
	const { products, error, loading } = useSelector((state) => state.products);
	const { id } = useParams();
	console.log(id);
	const navigate = useNavigate();
	const [productToEdit, setProductToEdit] = useState(null);

	useEffect(() => {
		if (products) {
			const product = products.find((product) => product._id === id);
			setProductToEdit(product);
		}
	}, [products, id]);
	const handleUpdate = async (updatedProduct) => {
		try {
			const response = await fetch(`${BASE_URL}/${id}`, {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(updatedProduct),
			});

			const data = await response.json();

			if (response.ok) {
				navigate('/');
			} else {
				console.error('Failed to update coin:', data.error);
			}
		} catch (error) {
			console.error('Failed to update product', error);
		}
	};

	return (
		<ProductForm
			mode="edit"
			onSubmit={handleUpdate}
			initialProduct={productToEdit}
		/>
	);
};

export default EditProduct;
