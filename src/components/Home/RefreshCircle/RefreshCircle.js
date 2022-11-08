import * as S from './RefreshCircle.style';
import React from 'react';

const RefreshCircle = () => {
	return (
		<S.RefreshCircle>
			<S.RefreshCircleInner className="material-icons">autorenew</S.RefreshCircleInner>
		</S.RefreshCircle>
	);
};

export default RefreshCircle;
