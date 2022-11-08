import * as S from './HomeFeedPage.style';
import React from 'react';
import Wrapper from '../../../components/Wrapper';
import { WrapperInner } from '../../../components/Wrapper/Wrapper';
import HeaderGoBackLeft from '../../../components/Header/HeaderGoBackLeft/HeaderGoBackLeft';
import HeaderGoBackRight from '../../../components/Header/HeaderGoBackRight/HeaderGoBackRight';
import PictureCircle from '../../../components/PictureCircle/PictureCircle';

const HomeFeedPage = () => {
	return (
		<Wrapper>
			<HeaderGoBackLeft>ss</HeaderGoBackLeft>
			<HeaderGoBackRight>ss</HeaderGoBackRight>
			<WrapperInner>
				<S.ProfileBox>
					<S.ProfileImage>
						<PictureCircle size="large" />
					</S.ProfileImage>
					<S.ProfileInfo>
						<S.ProfileNickname>분당청소요정</S.ProfileNickname>
						<S.ProfileIntroduce>
							베이킹과 라이딩을 좋아하고 <br />
							청소를 잘해요
						</S.ProfileIntroduce>
					</S.ProfileInfo>
				</S.ProfileBox>
				<S.NavigateBox>
					<S.NavigateItem></S.NavigateItem>
					<S.NavigateItem></S.NavigateItem>
				</S.NavigateBox>
				<S.MainBox></S.MainBox>
			</WrapperInner>
		</Wrapper>
	);
};

export default HomeFeedPage;
