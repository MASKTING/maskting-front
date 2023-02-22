import { atom } from 'recoil';

const imageState = atom({
	key: 'imageState',
	default: {},
});

const imageUrlState = atom({
	key: 'imageUrlState',
	default: {},
});

export const imageRecoil = atom({
	key: 'imageRecoil',
	default: {
		originalImage: '',
		maskedImage: '',
	},
});

export { imageState, imageUrlState };
