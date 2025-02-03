import { useState } from 'react';
import style from './ProductForm.module.css';
import { useNavigate } from 'react-router-dom';

const ProductForm = ({ mode }) => {
	const title = mode.charAt(0).toUpperCase() + mode.slice(1);
	const navigate = useNavigate();
	const [errorMessage, setErrorMessage] = useState(null);
	return (
		<div className={style.formContainer}>
			<form action="">
				<h1>{title} new Product</h1>

				<div className={style.formGroup}>
					<label htmlFor="name">Product Name</label>
					<input type="text" id="name" />
				</div>

				<div className={style.formGroup}>
					<label htmlFor="price">Product Price</label>
					<input type="text" id="price" />
				</div>

				<div className={style.formGroup}>
					<label htmlFor="imgURL">Product Img URL</label>
					<input type="text" id="imgURL" />
				</div>

				<div className={style.btnGroup}>
					<button type="button" onClick={() => navigate(-1)}>
						Cancel
					</button>
					<button>Save Product</button>
				</div>
			</form>
		</div>
	);
};

export default ProductForm;
