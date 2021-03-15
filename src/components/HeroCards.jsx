import React, { useState, useEffect } from 'react';
import FrontCard from 'components/FrontCard';

import paginateHeroes from 'helpers/paginate';

const HeroCards = ({ dataHeroes }) => {
	const [heroes, setHeroes] = useState(dataHeroes);
	useEffect(() => {
		const pageData = paginateHeroes(dataHeroes, 15, 3);
		setHeroes(pageData);
	}, [dataHeroes]);

	return (
		<div className="heroes-list">
			{heroes.map((hero) => (
				<FrontCard
					key={hero.id}
					name={hero.name}
					publisher={hero.biography.publisher}
					alignment={hero.biography.alignment}
					images={hero.images}
				></FrontCard>
			))}
		</div>
	);
};

export default HeroCards;
