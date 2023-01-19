import axios from 'axios';
import api from './api';

export const addFeed = async formData => {
	try {
		const response = await api({
			headers: {
				'Content-Type': 'multipart/form-data',
			},
			url: '/api/feed',
			method: 'POST',
			data: formData,
		});

		return response;
	} catch (error) {
		console.log(error);
	}
};
