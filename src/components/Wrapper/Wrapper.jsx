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

export default Wrapper;
