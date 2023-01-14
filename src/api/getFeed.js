import api from './api';

export const getFeed = async () => {
	try {
		const response = await api({
			url: '/api/feed',
			method: 'GET',
		});
		return response.data;
	} catch (error) {
		console.log(error);
	}
};
