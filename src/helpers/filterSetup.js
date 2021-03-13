import { filterOptions } from 'interfaces/filterOptions';

const fillFilterOptions = (data) => {
	const options = new filterOptions();

	data.forEach((obj) => {
		const {
			appearance: { gender, race },
		} = obj;
		const {
			biography: { alignment },
		} = obj;

		options.gender = { ...options.gender, [gender]: gender };
		options.race = { ...options.race, [race]: race };
		options.alignment = { ...options.alignment, [alignment]: alignment };
	});

	return options;
};

export const renderFilterOptions = (data) => {
	const options = fillFilterOptions(data);
	const filterOptions = Object.entries(options).map((entry) => {
		return (
			<optgroup key={entry[0]} label={entry[0]}>
				{Object.values(entry[1])
					.sort()
					.map((value) => {
						if (value === null || value === '-' || value === '') return null;
						return (
							<option className="filter__option" key={value} value={value}>
								{value}
							</option>
						);
					})}
			</optgroup>
		);
	});

	return filterOptions;
};
