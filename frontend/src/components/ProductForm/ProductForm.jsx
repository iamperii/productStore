import { useEffect, useState } from 'react';
import style from './ProductForm.module.css';
import { useNavigate } from 'react-router-dom';

const ProductForm = ({ mode, initialProduct, onSubmit }) => {
	const [newProduct, setNewProduct] = useState(
		initialProduct || {
			name: '',
			price: '',
			image: '',
		}
	);
	const title = mode.charAt(0).toUpperCase() + mode.slice(1);
	const navigate = useNavigate();

  useEffect(() => {
		if (initialProduct) {
			setNewProduct(initialProduct);
		}
	}, [initialProduct]);
	const handleChange = (e) => {
		setNewProduct({
			...newProduct,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		onSubmit(newProduct);
	};
	return (
		<div className={style.formContainer}>
			<form action="" onSubmit={handleSubmit}>
				<h1>{title} new Product</h1>

				<div className={style.formGroup}>
					<label htmlFor="name">Product Name</label>
					<input
						type="text"
						name="name"
						value={newProduct.name}
						onChange={handleChange}
					/>
				</div>

				<div className={style.formGroup}>
					<label htmlFor="price">Product Price</label>
					<input
						type="number"
						name="price"
						value={newProduct.price}
						onChange={handleChange}
					/>
				</div>

				<div className={style.formGroup}>
					<label htmlFor="image">Product Img URL</label>
					<input
						type="text"
						name="image"
						value={newProduct.image}
						onChange={handleChange}
					/>
				</div>

				<div className={style.btnGroup}>
					<button type="button" onClick={() => navigate(-1)}>
						Cancel
					</button>
					<button type="submit">Save Product</button>
				</div>
			</form>
		</div>
	);
};

export default ProductForm;
