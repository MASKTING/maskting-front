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
			// 심사 중 -> /signup/wait
			// window.location.href = `http://localhost:3000/wait`;
		} else {
			// 심사 거절 -> /signup/basicInfo
			// window.location.href = `http://localhost:3000/signup/basicInfo`;
		}
	} else {
		// 가입 완료 -> /home
		// window.location.href = `http://localhost:3000/signup/home`;
		// console.log('로그인에 성공하였습니다.');
	}
};
// http://www.maskting.site/oauth2/redirect?role=guest&sort=false&providerId=2493698225

export default LoginAuth;
