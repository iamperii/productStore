import mongoose from 'mongoose';
import Product from '../models/product.model.js';

export const getProducts = async (req, res) => {
	try {
		const products = await Product.find({});
		res.status(200).json({
			success: true,
			data: products,
		});
	} catch (error) {
		res.status(500).json({
			success: false,
			message:
				'An error occurred while retrieving the products. Please try again later.',
		});
	}
};

export const getProductById = async (req, res) => {
	const { id } = req.params;

	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(404).json({
			success: false,
			message: 'Invalid Product id',
		});
	}

	try {
		const product = await Product.findById(id);

		if (!product) {
			return res.status(404).json({
				success: false,
				message: 'Product not found',
			});
		}

		res.status(200).json({
			success: true,
			data: product,
		});
	} catch (error) {
		res.status(500).json({
			success: false,
			message:
				'An error occurred while retrieving the product. Please try again later.',
		});
	}
};

export const createProduct = async (req, res) => {
	const product = req.body;
	if (!product.name || !product.price || !product.image) {
		return res.status(400).json({
			success: false,
			message: 'Please provide all fields',
		});
	}

	const newProduct = new Product(product);

	try {
		await newProduct.save();
		res.status(201).json({
			success: true,
			data: newProduct,
		});
	} catch (error) {
		res.status(500).json({
			success: false,
			message: 'Server error',
		});
	}
};

export const updateProduct = async (req, res) => {
	const { id } = req.params;
	const product = req.body;

	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(404).json({
			success: false,
			message: 'Invalid Product ID.',
		});
	}

	if (!product.name || !product.price || !product.image) {
		return res.status(400).json({
			success: false,
			message: 'All fields (name, price, image) are required.',
		});
	}

	try {
		const updatedProduct = await Product.findByIdAndUpdate(id, product, {
			new: true,
			runValidators: true,
		});

		if (!updatedProduct) {
			return res.status(404).json({
				success: false,
				message: 'Product not found.',
			});
		}
		res.status(200).json({
			success: true,
			data: updatedProduct,
		});
	} catch (error) {
		res.status(500).json({
			success: false,
			message:
				'An error occurred while updating the product. Please try again later.',
		});
	}
};
export const deleteProduct = async (req, res) => {
	const { id } = req.params;

	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(404).json({
			success: false,
			message: 'Invalid Product id',
		});
	}

	try {
		await Product.findByIdAndDelete(id);
		res.status(200).json({
			success: true,
			message: 'Product deleted successfully',
		});
	} catch (error) {
		res.status(500).json({
			success: false,
			message: 'Server Error',
		});
	}
};
