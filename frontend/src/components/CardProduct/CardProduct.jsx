import style from './CardProduct.module.css';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../Button/Button';
import { useEffect } from 'react';
import { fetchProducts } from '../../../redux/slices/getAllProducts';

const CardProduct = () => {
	const dispatch = useDispatch();
	const { products, loading, error } = useSelector((state) => state.products);

	useEffect(() => {
		dispatch(fetchProducts());
	}, [dispatch]);
	return (
		<>
			<h1 className={style.title}>ALL PRODUCTS 🚀</h1>
			<div className={style.cards}>
				{products?.map((product) => (
					<div className={style.card} key={product._id}>
						<img src={product.image} alt="product_img" />
						<h1>{product.name}</h1>
						<p className={style.price}>{product.price} $</p>
						<Button id={product._id} />
					</div>
				))}
			</div>
		</>
	);
};

export default CardProduct;
