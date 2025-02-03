import React, { useState } from 'react';
import style from './NavBar.module.css';
import { Link } from 'react-router-dom';

const NavBar = () => {
		const [theme, setTheme] = useState(true);
		const handleTheme = () => {
			setTheme(!theme);
		};
	return (
		<>
			<div className={style.header}>
				<h1>Product Store</h1>
				<div className={style.btnContainer}>
					<Link to="/" className={style.btn}>
						Home
					</Link>
					<Link to="/add" className={style.btn}>
						Create
					</Link>
					<Link onClick={handleTheme} className={style.btn}>
						{theme ? 'Light' : 'Dark'}
					</Link>
				</div>
			</div>
		</>
	);
};

export default NavBar;
