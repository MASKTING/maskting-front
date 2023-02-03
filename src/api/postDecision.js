import api from './api';

export const postDecision = async (decision, roomId) => {
	try {
		const response = await api({
			headers: {
				'Content-Type': 'application/json',
			},
			url: `/chat/room/${roomId}/decision`,
			method: 'POST',
			data: JSON.stringify(decision),
		});

		return response;
	} catch (error) {
		console.log(error);
	}
};
