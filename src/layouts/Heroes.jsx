import React, { useState, useEffect } from 'react';
import { getAllHeroes } from 'helpers/api';
import TitleBar from 'components/TitleBar';
import SearchBox from 'components/SearchBox';
import HeroCards from 'layouts/HeroCards';
import SortFilter from 'layouts/SortFilter';

import 'scss/layouts/heroes.scss';

const Heroes = () => {
	const [dataHeroes, setDataHeroes] = useState([]);
	const [dataHeroesFiltered, setDataHeroesFiltered] = useState([]);

	useEffect(() => {
		getAllHeroes()
			.then((data) => {
				setDataHeroes(data);
				setDataHeroesFiltered(data);
			})
			.catch((err) => console.log(err));
	}, []);

	return (
		<>
			<TitleBar></TitleBar>
			<SearchBox></SearchBox>
			<HeroCards dataHeroes={dataHeroesFiltered}></HeroCards>
			<SortFilter dataToFilter={dataHeroes} setDataToFilter={setDataHeroesFiltered}></SortFilter>
		</>
	);
};

export default Heroes;
