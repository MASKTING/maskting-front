import api from './api';

export const getMatchedPartnerProfile = async roomId => {
	try {
		const response = await api({
			url: `/chat/room/${roomId}/matching`,
			method: 'GET',
		});

		return response.data;
	} catch (error) {
		console.log(error);
	}
};
