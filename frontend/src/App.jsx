import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import AddProduct from './pages/AddProduct';
import ProductList from './pages/ProductList';
import EditProduct from './pages/EditProduct';

function App() {
	return (
		<>
			<NavBar />
			<Routes>
				<Route path="/" element={<ProductList />} />
				<Route path="/add" element={<AddProduct />} />
				<Route path="/edit" element={<EditProduct />} />
			</Routes>
		</>
	);
}

export default App;
