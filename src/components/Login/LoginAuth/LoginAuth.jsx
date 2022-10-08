import { useEffect } from 'react';

const LoginAuth = () => {
	const getKakao = async () => {};

	const role = new URL(window.location.href).searchParams.get('role');
	const sort = new URL(window.location.href).searchParams.get('sort');

	if (role === 'guest') {
		if (sort === 'true') {
			// 아직 심사 대기 상태인 경우 -> 대기 화면
			// window.location.href = ``;
		} else {
			// 가입이 필요한 경우
			window.location.href = `http://localhost:3000/basicInfo`;
		}
	} else {
		// 모든 가입 완료한 상태 -> 피드 화면
		// window.location.href = ``;
	}

	useEffect(() => {
		getKakao();
	}, []);
};

export default LoginAuth;
