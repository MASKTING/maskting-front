import axios from 'axios';
import api from './api';

export const postPhoneAuthCheck = async phoneData => {
	try {
		const response = await axios({
			headers: {
				'Content-Type': 'application/json',
			},
			url: `${process.env.REACT_APP_SERVER_HOST}/api/user/check-sms`,
			method: 'POST',
			data: JSON.stringify(phoneData),
		});

		return response;
	} catch (error) {
		console.log(error);
	}
};
