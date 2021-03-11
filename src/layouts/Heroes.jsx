import React, { useState, useEffect } from 'react';
import { getAll, paginateHeroes } from 'helpers/api';
import FrontCard from 'components/FrontCard';

import 'scss/layouts/heroes.scss';

const Main = () => {
	const [page, setPage] = useState([]);

	useEffect(() => {
		getAll()
			.then((data) => {
				const pageData = paginateHeroes(data, 15, 3);
				setPage(pageData);
			})
			.catch((err) => console.log(err));
	}, []);

	const heroes = page.map((hero) => {
		return (
			<FrontCard
				key={hero.id}
				name={hero.name}
				publisher={hero.biography.publisher}
				alignment={hero.biography.alignment}
				images={hero.images}
			></FrontCard>
		);
	});

	console.log(heroes);
	return <div className="heroes-list">{heroes}</div>;
};

export default Main;
