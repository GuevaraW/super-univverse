const BASE_URL = 'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json';

export const getAllHeroes = () =>
	fetch(BASE_URL, {
		mode: 'cors',
	})
		.then((res) => res.json())
		.catch((err) => console.error(err));
