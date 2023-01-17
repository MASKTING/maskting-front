import api from './api';

export const getRejection = async () => {
	try {
		const response = await api('/api/user/rejection');
		return response;
	} catch (error) {
		console.log(error);
	}
};
