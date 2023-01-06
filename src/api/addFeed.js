import axios from 'axios';
import api from './api';

export const addFeed = async feed => {
	try {
		const formData = new FormData();
		formData.append('feed', feed);
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
