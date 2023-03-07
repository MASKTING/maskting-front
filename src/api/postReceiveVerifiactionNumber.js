import axios from 'axios';
import api from './api';

export const postReceiveVerificationNumber = async phoneNumber => {
	try {
		const formData = new FormData();
		formData.append('phoneNumber', phoneNumber);
		const response = await axios({
			headers: {
				'Content-Type': 'multipart/form-data',
			},
			url: `${process.env.REACT_APP_SERVER_HOST}/api/user/sms`,
			method: 'POST',
			data: formData,
		});

		return response;
	} catch (error) {
		console.log(error);
	}
};
