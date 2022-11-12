import axios from 'axios';
import { getCookie } from '../cookie';

export const getAccessToken = async () => {
	const response = await axios.post('/api/auth/silent-refresh', {
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${getCookie('refreshToken')}`,
		},
	});
	localStorage.setItem('accesstoken', response.headers.accesstoken);
	localStorage.setItem('expiresIn', response.headers.date);
};
