import axios from 'axios';
import { useState, useEffect } from 'react';

const LoginAuth = () => {
	// const onLogin = (email, password) => {
	// 	const data = { email, password };
	// 	axios
	// 		.post('/api/auth/silent-refresh', data)
	// 		.then(response => {
	// 			const { accessToken } = response.data;
	// 			console.log('액세스 토큰', accessToken);
	// 			axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
	// 		})
	// 		.catch(error => {
	// 			// 에러 처리
	// 		});
	// };

	// useEffect(() => {
	// 	onLogin();
	// }, []);

	const basicInfo = JSON.parse(localStorage?.getItem('basicInfo'));
	const role = new URL(window.location.href).searchParams.get('role');
	const sort = new URL(window.location.href).searchParams.get('sort');
	const email = new URL(window.location.href).searchParams.get('email');
	const providerId = new URL(window.location.href).searchParams.get('providerId');
	const provider = new URL(window.location.href).searchParams.get('provider');

	useEffect(() => {
		localStorage.setItem(
			'basicInfo',
			JSON.stringify({ ...basicInfo, email, provider, providerId }),
		);
	}, []);

	if (role === 'guest') {
		if (sort === 'true') {
			// 아직 심사 대기 상태인 경우 -> 대기 화면
			window.location.href = `http://localhost:3000//wait`;
		} else {
			// 가입이 필요한 경우
			window.location.href = `http://localhost:3000/basicInfo`;
		}
	} else {
		// 모든 가입 완료한 상태 -> 피드 화면
		// window.location.href = ``;
	}
};

export default LoginAuth;
