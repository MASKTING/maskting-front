import axios from 'axios';

export const checkNicknameApi = async nickname => {
	const response = await axios({
		method: 'GET',
		url: `${process.env.REACT_APP_SERVER_HOST}/api/user/check-nickname?nickname=${nickname}`,
		headers: {
			'Content-Type': 'application/json',
		},
	});
	return response.data;
};
