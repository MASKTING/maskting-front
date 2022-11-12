import React from 'react';
import * as S from './PictureCircle.style';

const PICTURESIZE = {
	small: '5rem',
	midium: '7.8rem',
	large: '10rem',
};

const PictureCircle = props => {
	return (
		<S.PictureCircle
			size={PICTURESIZE[props.size]}
			src={
				props.src ? props.src : 'http://news.samsungdisplay.com/wp-content/uploads/2018/08/8.jpg'
			}
			css={props.css}
		/>
	);
};

export default PictureCircle;
