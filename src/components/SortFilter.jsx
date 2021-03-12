import React from 'react';

import 'scss/components/sort-filter.scss';
import 'scss/components/buttons.scss';

const SortFilter = () => {
	return (
		<div className="container--floating">
			<button className="button button--floating">Sort</button>
			<button className="button button--floating">Filter</button>
		</div>
	);
};

export default SortFilter;
