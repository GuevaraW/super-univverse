import React, { useState, useEffect, Fragment } from 'react';
import { getAllHeroes } from 'helpers/api';
import paginateHeroes from 'helpers/paginate';
import FrontCard from 'components/FrontCard';
import SearchBox from 'components/SearchBox';

import 'scss/layouts/heroes.scss';

const Heroes = () => {
	const [dataHeroes, setDataHeroes] = useState([]);
	const [heroes, setHeroes] = useState([]);

	useEffect(() => {
		getAllHeroes()
			.then((data) => {
				setDataHeroes(data);
			})
			.catch((err) => console.log(err));
	}, []);

	useEffect(() => {
		const pageData = paginateHeroes(dataHeroes, 15, 3);
		setHeroes(pageData);
	}, [dataHeroes]);

	return (
		<>
			<SearchBox></SearchBox>
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
		</>
	);
};

export default Heroes;
