import { atom } from 'recoil';

const imageState = atom({
	key: 'imageState',
	default: {},
});

export const imageRecoil = atom({
	key: 'imageRecoil',
	default: {
		originalImage: '',
		maskedImage: '',
	},
});

export default imageState;
