import api from './api';

export const postPhoneAuthCheck = async phoneData => {
	try {
		const response = await api({
			headers: {
				'Content-Type': 'application/json',
			},
			url: '/api/user/check-sms',
			method: 'POST',
			data: JSON.stringify(phoneData),
		});

		return response;
	} catch (error) {
		console.log(error);
	}
};
