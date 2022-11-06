import * as S from './HomePictureResize.style';

import React from 'react';
import Wrapper from '../../../../components/Wrapper';
import { WrapperInner } from '../../../../components/Wrapper/Wrapper';

import ContentRed from '../../../../components/Content/ContentRed/ContentRed';
import HeaderGoBack from '../../../../components/Header/HeaderGoBack/HeaderGoBack';

const HomePictureResize = () => {
	return (
		<Wrapper>
			<HeaderGoBack>
				<S.HeaderGoBackInnerRight>
					fff
					<ContentRed>첨부하기</ContentRed>
				</S.HeaderGoBackInnerRight>
			</HeaderGoBack>
			<WrapperInner></WrapperInner>
		</Wrapper>
	);
};

export default HomePictureResize;
