import React from 'react';

import 'scss/components/front-card.scss';

const FrontCard = ({ name, publisher, alignment, images }) => {
	return (
		<div className="card-hero">
			<img src={images.md} alt={name} srcSet={`${images.sm} 150w, ${images.md} 320w`} className="card-hero__img" />
			<div className={`card-hero__info--${alignment}`}>
				<figcaption className="card-hero__name">{name}</figcaption>
				<p className="card-hero__publisher">{publisher}</p>
			</div>
		</div>
	);
};

export default FrontCard;
