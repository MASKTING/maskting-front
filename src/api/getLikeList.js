import api from './api';

export const getLikeList = async () => {
	try {
		const response = await api({
			url: '/chat/follower',
			method: 'GET',
		});
		return response.data;
	} catch (error) {
		console.log(error);
	}
};
