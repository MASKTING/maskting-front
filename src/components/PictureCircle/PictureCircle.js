import React from 'react';
import * as S from './PictureCircle.style';

const PICTURESIZE = {
	small: '5rem',
	midium: '7.8rem',
};

const PictureCircle = props => {
	return (
		<S.PictureCircle
			size={PICTURESIZE[props.size]}
			src="http://news.samsungdisplay.com/wp-content/uploads/2018/08/8.jpg"
		/>
	);
};

export default PictureCircle;
