import React, { useState, useEffect, Fragment } from 'react';
import { getAllHeroes } from 'helpers/api';
import TitleBar from 'components/TitleBar';
import SearchBox from 'components/SearchBox';
import HeroCards from 'components/HeroCards';
import SortFilter from 'components/SortFilter';

import 'scss/layouts/heroes.scss';

const Heroes = () => {
	const [dataHeroes, setDataHeroes] = useState([]);

	useEffect(() => {
		getAllHeroes()
			.then((data) => {
				setDataHeroes(data);
			})
			.catch((err) => console.log(err));
	}, []);

	return (
		<>
			<TitleBar></TitleBar>
			<SearchBox></SearchBox>
			<HeroCards dataHeroes={dataHeroes}></HeroCards>
			<SortFilter setDataHeroes={setDataHeroes} dataHeroes={dataHeroes}></SortFilter>
		</>
	);
};

export default Heroes;
