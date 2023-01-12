import api from './api';

export const getProfile = async () => {
	try {
		const response = await api('/api/user');
		return response.data;
	} catch (error) {
		console.log(error);
	}
};
