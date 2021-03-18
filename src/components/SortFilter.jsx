import React, { useState, useEffect } from 'react';

import Filter from 'components/Filter';

import 'scss/components/sort-filter.scss';
import 'scss/components/buttons.scss';

const SortFilter = ({ dataToFilter, setDataToFilter }) => {
	const [activeFilter, setActiveFilter] = useState([]);

	useEffect(() => {
		let dataFiltered = dataToFilter;

		Object.values(activeFilter).forEach((filter) => {
			dataFiltered =
				filter.value === 'all'
					? dataFiltered
					: dataFiltered.filter((hero) => hero[filter.category][filter.name] === filter.value);
		});
		setDataToFilter(dataFiltered);
	}, [activeFilter, dataToFilter, setDataToFilter]);

	return (
		<div className="container--floating">
			<div className="sort">
				<ul name="sort" id="sort" className="sort__list">
					<li className="sort__option">Name</li>
					<li className="sort__option">Intelligence</li>
					<li className="sort__option">Strength</li>
					<li className="sort__option">Speed</li>
					<li className="sort__option">Durability</li>
					<li className="sort__option">Power</li>
					<li className="sort__option">Combat</li>
				</ul>
				<button className="button button--floating">Sort</button>
			</div>
			<fieldset className="filter">
				<Filter data={dataToFilter} path={['appearance', 'gender']} setActiveFilter={setActiveFilter}></Filter>
				<Filter data={dataToFilter} path={['biography', 'alignment']} setActiveFilter={setActiveFilter}></Filter>
				<Filter data={dataToFilter} path={['biography', 'publisher']} setActiveFilter={setActiveFilter}></Filter>
				<button className="button button--floating">Filter</button>
			</fieldset>
		</div>
	);
};

export default SortFilter;
