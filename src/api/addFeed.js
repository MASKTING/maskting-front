import api from './api';

export const addFeed = async feed => {
	try {
		const response = await api({
			url: '/api/feed',
			feed,
		});
		return response;
	} catch (error) {
		console.log(error);
	}
};
