import * as S from './RefreshCircle.style';
import React from 'react';

const RefreshCircle = ({ onClick }) => {
	return (
		<S.RefreshCircle>
			<S.RefreshCircleInner className="material-icons" onClick={onClick}>
				autorenew
			</S.RefreshCircleInner>
		</S.RefreshCircle>
	);
};

export default RefreshCircle;
