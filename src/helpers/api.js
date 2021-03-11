const BASE_URL = 'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json';

export const getAll = () =>
	fetch(BASE_URL, {
		mode: 'cors',
	})
		.then((res) => res.json())
		.catch((err) => console.error(err));

export const paginateHeroes = (data, sizePage, numberPage) => {
	const min = (numberPage - 1) * sizePage;
	const max = sizePage * numberPage;
	const page = data.filter((hero, i) => {
		return i >= min && i < max;
	});

	return page;
};
