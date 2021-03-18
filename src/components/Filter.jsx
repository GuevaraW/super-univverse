import React, { useState, useEffect } from 'react';
import { getFilterOptions } from 'helpers/filterSetup';

const Filter = ({ data, path, setActiveFilter }) => {
	const [options, setOptions] = useState([]);

	useEffect(() => {
		setOptions(getFilterOptions(data, path));
	}, [setOptions, data, path]);

	const handleFilter = (e) => {
		const category = e.target.dataset.category;
		const { name, value } = e.target;

		setActiveFilter((filters) => ({ ...filters, [name]: { category: category, name: name, value: value } }));
	};

	return (
		<select data-category={path[0]} name={path[1]} onChange={handleFilter}>
			<option className="filter__option" key={'none'} value="all" defaultValue>
				Choose One
			</option>
			{options.sort().map((value) => {
				if (value === 'null' || value === '') return null;
				return (
					<option className="filter__option" key={value} value={value}>
						{value}
					</option>
				);
			})}
		</select>
	);
};

export default Filter;
