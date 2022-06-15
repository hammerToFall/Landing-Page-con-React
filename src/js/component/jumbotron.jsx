import React from "react";
import PropTypes from "prop-types";

const Jumbotron = (props) => {
	const styles = {
		background: "#dcdcdc",
		marginLeft: "2px",
		marginRight: "2px",
	};
	return (
		<div className="row pt-lg-2 pb-4 ps-4" style={styles}>
			<div className="mx-auto">
				<h1>{props.title}</h1>
				<p className="lead text-muted">{props.text}</p>
				<p>
					<a href="#" className="btn btn-primary my-2">
						Call to action!
					</a>
				</p>
			</div>
		</div>
	);
};

Jumbotron.propTypes = {
	title: PropTypes.string,
	text: PropTypes.string,
};

export default Jumbotron;
