import { atom } from 'recoil';

const imageState = atom({
	key: 'imageState',
	default: {},
});

export const imageRecoil = atom({
	key: 'imageRecoil',
	default: {
		feedbackImage: '',
	},
});

export default imageState;
