import axios, { AxiosInstance } from 'axios';
import { Cookies } from 'react-cookie';

const SERVER_ADDRESS = 'http://ec2-3-34-75-204.ap-northeast-2.compute.amazonaws.com:8080';
export const customAxios = axios.create({
	baseURL: `${SERVER_ADDRESS}`, // 기본 서버 주소 입력
	headers: {
		accessToken: localStorage.getItem('accessToken'),
	},
});
