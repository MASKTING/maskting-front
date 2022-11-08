import React from 'react';
import * as S from './Button.style';

const NavigateButton = ({ handlePrevBtn, handleNextBtn }) => {
	return (
		<S.NavigateBtnWrapper>
			<S.PrevBtn type="button" onClick={handlePrevBtn}>
				이전
			</S.PrevBtn>
			<S.NextBtn type="button" onClick={handleNextBtn}>
				다음
			</S.NextBtn>
		</S.NavigateBtnWrapper>
	);
};

export { NavigateButton };
