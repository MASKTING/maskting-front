import React from 'react';
import * as S from './PhotoBox.style';

const PhotoBox = ({ feedList, setNavigateState, setCarouselState }) => {
	const handleState = e => {
		setNavigateState('carousel');
		setCarouselState(e.target.dataset.key);
	};

	return (
		<S.MainBoxPhoto>
			{feedList?.map((src, idx) => (
				<S.PhotoItem key={idx} data-key={idx} src={src} onClick={handleState} />
			))}
		</S.MainBoxPhoto>
	);
};

export default PhotoBox;
