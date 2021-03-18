export const getFilterOptions = (data, path) => {
	console.log(data);
	const options = data.reduce((acc, obj) => {
		const option = obj[path[0]][path[1]] ? obj[path[0]][path[1]] : obj[path[0]];

		return { ...acc, [option]: obj.id };
	}, {});

	console.log(options);
	return Object.keys(options);
};

/* const validPath = (path) => {
	return !(path instanceof Array || typeof path[0] === 'string')
		? true
		: new Error(
				`path has a wrong format. 
				object = {
					level1: {
						level2: {
							prop: 'foo'
						}
					}
				}
				=> path: [level1, level2, prop] `
		  );
}; */
