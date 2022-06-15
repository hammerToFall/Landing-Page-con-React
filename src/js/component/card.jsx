import React from "react";
import PropTypes from "prop-types";

const Card = (props) => {
	const styles = {
		marginTop: "20px",
		marginBottom: "20px",
	};
	return (
		<div className="card text-center" style={styles}>
			<img src={props.imageUrl} className="card-img-top" alt="..." />
			<div className="card-body">
				<h5 className="card-title">{props.title}</h5>
				<p className="card-text">{props.text}</p>
			</div>
			<div className="card-footer" style={{ background: "#f5f5f5" }}>
				<a href="#" className="btn btn-primary">
					Find Out More!
				</a>
			</div>
		</div>
	);
};

Card.propTypes = {
	title: PropTypes.string,
	imageUrl: PropTypes.string,
	text: PropTypes.string,
};

export default Card;
