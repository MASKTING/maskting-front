import React from 'react';
import * as S from './Wrapper.style';

const Wrapper = ({ children, titleMessage }) => {
	return (
		<S.Wrapper>
			<S.TitleWrapper>
				<S.Title>{titleMessage}</S.Title>
			</S.TitleWrapper>
			{children}
		</S.Wrapper>
	);
};

export default Wrapper;
