import axios from 'axios';
import { getCookie } from '../cookie';

const api = axios.create({
	headers: {
		'Content-Type': 'application/json',
	},
});

api.interceptors.request.use(
	config => {
		// if (!accesstoken) return config;

		const getAccessToken = async () => {
			// console.log(Date.parse(new Date()), Date.parse(localStorage?.getItem('expiresIn')));
			if (
				!localStorage.getItem('expiresIn') ||
				!localStorage.getItem('accesstoken')
				// ||Date.parse(new Date()) > Date.parse(localStorage?.getItem('expiresIn'))
			) {
				// 만료시간 종료 => accesstoken 재발급
				const response = await axios.post('/api/auth/silent-refresh', {
					Authorization: `Bearer ${getCookie('refreshToken')}`,
				});
				localStorage.setItem('accesstoken', response.headers.accesstoken);
				localStorage.setItem('expiresIn', response.headers.date);
				return response.headers.accesstoken;
			} else {
				return localStorage.getItem('accesstoken');
			}
		};
		const accesstoken = getAccessToken();
		accesstoken.then(value => {
			console.log(value);
			config.headers = {
				'Content-Type': 'application/json',
				accesstoken: value,
			};
		});

		return config;
	},
	error => {
		return Promise.reject(error);
	},
);

export default api;
