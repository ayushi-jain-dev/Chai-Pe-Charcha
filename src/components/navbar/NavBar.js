import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = () => {
	return (
		<nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
			<div className="container-fluid">
				<Link className="navbar-brand" to="/">Blogs Website</Link>
			</div>
		</nav>
	);
}
export default NavBar;
