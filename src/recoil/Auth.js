import { atom } from 'recoil';

export const AuthInfo = atom({
	key: 'AuthInfo',
	default: {
		accesstoken: '',
	},
});
