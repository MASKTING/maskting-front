import api from './api';

export const silentRefresh = async () => {
	try {
		const response = await axios({
			method: 'post',
			url: '/api/auth/silent-refresh',
		});

		if (response) api.defaults.headers.common['accesstoken'] = response.headers.accesstoken;
	} catch (error) {
		console.log(error);
	}
};
