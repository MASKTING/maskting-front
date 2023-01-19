import * as S from './HomePictureInfo.style';

import React from 'react';
import Wrapper, { WrapperInner } from '../../../../components/Wrapper/Wrapper';
import HeaderGoBackLeft from '../../../../components/Header/HeaderGoBackLeft/HeaderGoBackLeft';
import ContentTitle from '../../../../components/Content/Title/ContentTitle';
import ContentInfo from '../../../../components/Content/Info/ContentInfo';
import MainButton from '../../../../components/Button/MainButton/MainButton';
import SideBar from '../../../../components/SideBar/SideBar';
import { useNavigate } from 'react-router-dom';
import BigButton from '../../../../components/Button/BigButton/BigButton';
import { useGetProfile } from './../../../../hooks/query/useGetProfile';

const HomePictureInfo = () => {
	const navigate = useNavigate();
	const navigatePictureAdd = () => {
		navigate('add');
	};
	const { userInfo } = useGetProfile();
	return (
		<Wrapper>
			<HeaderGoBackLeft />
			<WrapperInner>
				<ContentTitle>
					{userInfo?.nickname}님의 <br />
					내적매력을 피드에 담아보세요
				</ContentTitle>
				<ContentInfo>
					<br />
					<br />
					관심사, 취미 등 좋아하는 것들로 가득 담아 <br />
					자신의 내면을 표현할 수 있는 사진들을 추가해보세요! <br />
					<br />
					다음과 같은 사진은 통보없이 삭제될 수 있습니다 <br />
					사람의 얼굴이 드러나는 사진 <br />
					과도하게 선정적인 사진
				</ContentInfo>

				<SideBar status="home" />
			</WrapperInner>
			<BigButton onClick={navigatePictureAdd}>확인했어요</BigButton>
		</Wrapper>
	);
};

export default HomePictureInfo;
