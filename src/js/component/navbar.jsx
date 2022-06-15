import React from "react";

const NavBar = () => {
	const styles = {
		paddingInline: "100px",
	};
	return (
		<nav className="navbar navbar-expand-md navbar-light bg-secondary text-white text-center">
			<div className="container-fluid" style={styles}>
				<a className="navbar-brand text-white" href="#">
					<strong>Start Bootstrap</strong>
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNavAltMarkup"
					aria-controls="navbarNavAltMarkup"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon justify-content-md-end"></span>
				</button>
				<div
					className="collapse navbar-collapse justify-content-end"
					id="navbarNavAltMarkup">
					<div className="navbar-nav">
						<a
							className="nav-link active text-white"
							aria-current="page"
							href="#">
							Home
						</a>
						<a className="nav-link text-white" href="#">
							About
						</a>
						<a className="nav-link text-white" href="#">
							Services
						</a>
						<a className="nav-link text-white" href="#">
							Contact
						</a>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default NavBar;
