/**
 *
 * @param {Array<object>} data Complete data set
 * @param {number} sizePage Size of page
 * @param {number} numberPage Number of page
 * @returns {Array<object>} Data to display on the page
 */
const paginateHeroes = (data, sizePage, numberPage) => {
	const min = (numberPage - 1) * sizePage;
	const max = sizePage * numberPage;
	const page = data.filter((hero, i) => {
		return i >= min && i < max;
	});

	return page;
};

export default paginateHeroes;
