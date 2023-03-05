import api from './api';

export const getProfile = async () => {
	try {
		const response = await api('https://maskting.site/api/user');
		return response;
	} catch (error) {
		console.log(error);
	}
};
