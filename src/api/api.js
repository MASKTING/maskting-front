import axios from 'axios';

const api = axios.create({
	headers: {
		'Content-Type': 'application/json',
	},
});

api.interceptors.request.use(
	config => {
		config.headers = {
			...config.headers,
			accesstoken: localStorage.getItem('accesstoken'),
		};
		return config;
	},
	error => {
		Promise.reject(error);
	},
);

api.interceptors.response.use(
	response => {
		return response;
	},
	async error => {
		if (error?.response?.status === 401) {
			try {
				const originalRequest = error.config;
				const response = await axios({
					method: 'post',
					url: '/api/auth/silent-refresh',
				});
				if (response) {
					localStorage.setItem('accesstoken', response.headers.accesstoken);
					api.defaults.headers.common['accesstoken'] = response.headers.accesstoken;
					return api.request(originalRequest);
				}
			} catch (error) {
				alert('세션이 만료되었습니다. 다시 로그인해 주시기 바랍니다.');
			}
		}
	},
);

export default api;
