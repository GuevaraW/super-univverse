/**
 *
 * @param {Array<object>} data Complete data set
 * @param {number} sizePage Size of page
 * @param {number} numberPage Number of page
 * @returns {Array<object>} Data to display on the page
 */
const paginateHeroes = (data, sizePage, numberPage) => {
	const length = data.length;
	const page = verifyNumberPage(length, sizePage, numberPage);
	const min = (page - 1) * sizePage;
	const max = sizePage * page;
	const pageData = data.filter((hero, i) => {
		return i >= min && i < max;
	});

	return pageData;
};

const verifyNumberPage = (length, sizePage, numberPage) => {
	const maxNumberPage = Math.ceil(length / sizePage);
	return numberPage > maxNumberPage ? maxNumberPage : numberPage;
};

export default paginateHeroes;
