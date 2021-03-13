import React from 'react';
import { renderFilterOptions } from 'helpers/filterSetup';

import 'scss/components/sort-filter.scss';
import 'scss/components/buttons.scss';

const SortFilter = ({ dataHeroes, setDataHeroes }) => {
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
				<select className="filter__list">{renderFilterOptions(dataHeroes)}</select>
				<button className="button button--floating">Filter</button>
			</fieldset>
		</div>
	);
};

export default SortFilter;
