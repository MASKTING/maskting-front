import api from './api';

export const getChattingRooms = async () => {
	try {
		const response = await api({
			url: '/chat/rooms',
		});
		return response.data;
	} catch (error) {
		console.log(error);
	}
};

export const getChattingRoom = async n => {
	try {
		const response = await api({
			url: `/chat/room/${n}`,
		});
		return response.data;
	} catch (error) {
		console.log(error);
	}
};

export const postChatClose = async roomId => {
	try {
		const response = await api({
			url: `/chat/room/${roomId}/out`,
			method: 'POST',
		});
		return response.data;
	} catch (error) {
		console.log(error);
	}
};
