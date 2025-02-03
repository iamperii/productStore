import { Link } from 'react-router-dom';
import style from './Button.module.css';
import { BASE_URL } from '../../../redux/index';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../../redux/slices/getAllProducts';

const Button = (id) => {
	const productID = id.id;
	const dispatch = useDispatch();
	const { products, error, loading } = useSelector((state) => state.products);
	const deleteProduct = async () => {
		try {
			const response = await fetch(`${BASE_URL}/${productID}`, {
				method: 'DELETE',
			});

			if (response.ok) {
				dispatch(
					fetchProducts(products.filter((product) => product._id !== productID))
				);
				console.log('Product deleted successfully.');
			} else {
				const data = await response.json();
				console.error('Failed to delete product', data.error);
			}
		} catch (error) {
			console.error('Error deleting product:', error);
		}
	};
	return (
		<>
			<div className={style.cardBtns}>
				<Link to={`edit/${productID}`}>
					<button className={style.cardBtn}>Edit</button>
				</Link>
				<button className={style.cardBtn} onClick={deleteProduct}>
					Delete
				</button>
			</div>
		</>
	);
};

export default Button;
