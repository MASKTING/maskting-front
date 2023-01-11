import { useSearchParams } from 'react-router-dom';

const LoginAuth = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	const email = searchParams.getAll('email')[0];
	const provider = searchParams.getAll('provider')[0];
	const role = searchParams.getAll('role')[0];
	const sort = searchParams.getAll('sort')[0];
	const providerId = searchParams.getAll('providerId')[0];
	localStorage.setItem(
		'basicInfo',
		JSON.stringify({
			provider: provider,
			providerId: providerId,
			email: email,
		}),
	);

	if (role === 'guest') {
		if (sort === 'true') {
			// 아직 심사 대기 상태인 경우 -> 대기 화면
			window.location.href = `http://localhost:3000/wait`;
		} else {
			// 가입이 필요한 경우
			// window.location.href = `http://localhost:3000/signup/basicInfo`;
		}
	} else {
		// 모든 가입 완료한 상태 -> 피드 화면
		window.location.href = `http://localhost:3000/home`;
	}
};

export default LoginAuth;
