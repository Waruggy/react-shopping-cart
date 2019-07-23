import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
	return (
		<div className="navigation">
			<NavLink to="/">Products</NavLink>
			<NavLink to="/cart">
				Cart <span>{cart}</span>
			</NavLink>
		</div>
	);
};

export default Navigation;
