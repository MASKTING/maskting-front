import axios from 'axios';
import api from './api';

export const sendLike = async nickname => {
	try {
		const requestData = { nickname: nickname };
		const response = await api({
			headers: {
				'Content-Type': 'application/json',
			},
			url: '/api/like',
			method: 'POST',
			data: JSON.stringify(requestData),
		});

		return response;
	} catch (error) {
		console.log(error);
	}
};
