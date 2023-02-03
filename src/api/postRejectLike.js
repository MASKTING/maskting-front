import api from './api';

export const postRejectLike = async nickname => {
	try {
		const response = await api({
			url: `/chat/reject/${nickname}`,
			method: 'POST',
		});

		return response;
	} catch (error) {
		console.log(error);
	}
};
