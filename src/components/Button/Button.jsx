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

const BUTTONSIZE = {
	small: ['10.6rem', '4rem', '0.8rem'],
	big: ['34.2rem', '5.8rem', '1.6rem'],
};
// 순서대로 width, height, border-radius

const MainButton = props => {
	return (
		<S.MainButton
			size={BUTTONSIZE[props.size]}
			type="button"
			onClick={props.onClick}
			color={props.color}
		>
			{props.message}
		</S.MainButton>
	);
};

export { NavigateButton, MainButton };
