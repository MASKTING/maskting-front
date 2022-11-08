import { atom } from 'recoil';

const imageState = atom({
	key: 'imageState',
	default: {},
});

export const imageRecoil = atom({
	key: 'imageRecoil',
	default: {
		selectedImage: '',
		feedbackImageList: [],
		cntImage: 2,
	},
});

export default imageState;
