import api from './api';

export const getOriginalMaskImage = async () => {
	try {
		const response = await api('/chat/profiles');
		return response.data;
	} catch (error) {
		console.log(error);
	}
};
