import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav id="nabvar" className="navbar navbar-light bg-black ">
			<div id="" className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1 text-white">Home</span>
				</Link>
				<div className="ml-auto">
					<Link to="/demo">
						<button id="btn-nav" className="btn"><b>Check action</b></button>
					</Link>
				</div>
			</div>
		</nav>
	);
};
