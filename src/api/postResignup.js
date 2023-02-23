import api from './api';

export const postResignup = async data => {
	try {
		const response = await api({
			headers: {
				'Content-Type': 'multipart/form-data',
			},
			url: '/api/user/re-signup',
			method: 'POST',
			data: data,
		});

		return response;
	} catch (error) {
		console.log(error);
	}
};
