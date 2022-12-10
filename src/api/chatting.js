import api from './api';

export const getChattingRoom = async () => {
	try {
		const response = await api({
			url: '/chat/rooms',
		});
		return response.data;
	} catch (error) {
		console.log(error);
	}
};
