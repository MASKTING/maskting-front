import axios from 'axios';
import { useNavigate } from 'react-router';
import { getCookie } from '../cookie';

const api = axios.create({
	headers: {
		'Content-Type': 'application/json',
	},
});

api.interceptors.request.use(
	config => {
		config.headers = {
			'Content-Type': 'application/json',
			accesstoken: localStorage.getItem('accesstoken'),
		};
		return config;
	},
	error => {
		return error;
	},
);

api.interceptors.response.use(
	response => {
		return response;
	},
	async error => {
		if (error?.response?.status === 401) {
			try {
				console.log(getCookie('refreshToken'));
				// const originalRequest = error.config;
				// const response = await axios.post('/api/auth/silent-refresh', {
				// 	Authorization: `Bearer ${getCookie('refreshToken')}`,
				// 	'Content-Type': 'application/json',
				// });
				const response = await axios({
					method: 'post',
					url: '/api/auth/silent-refresh',
					headers: {
						'Content-Type': 'application/json',
						Authorization: `Bearer ${getCookie('refreshToken')}`,
					},
				});
				console.log(response);
				if (response) {
					localStorage.setItem('accesstoken', response.headers.accesstoken);
					localStorage.setItem('expiresIn', response.headers.expiresIn);
					// return api.request(originalRequest);
				}
			} catch (error) {
				// console.log('세션이 만료되었습니다. 다시 로그인해 주시기 바랍니다.');
				// alert('세션이 만료되었습니다. 다시 로그인해 주시기 바랍니다.');
			}
		}
	},
);

export default api;
