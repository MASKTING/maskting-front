import React from 'react';
import * as S from './Wrapper.style';

const Wrapper = ({ children, titleMessage, titleWidth }) => {
	return (
		<S.Wrapper>
			<S.TitleWrapper>
				<S.Title titleWidth={titleWidth}>{titleMessage}</S.Title>
			</S.TitleWrapper>
			{children}
		</S.Wrapper>
	);
};

const WrapperInner = props => {
	return <S.WrapperInner>{props.children}</S.WrapperInner>;
};

export default Wrapper;
