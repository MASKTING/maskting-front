import api from './api';

export const getPartner = async () => {
	try {
		const response = await api({
			url: '/api/partner',
			method: 'GET',
		});
		return response.data;
	} catch (error) {
		console.log(error);
	}
};
