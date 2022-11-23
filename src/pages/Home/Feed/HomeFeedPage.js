import * as S from './HomeFeedPage.style';
import React, { useState } from 'react';
import Wrapper from '../../../components/Wrapper';
import { WrapperInner } from '../../../components/Wrapper/Wrapper';
import HeaderGoBackLeft from '../../../components/Header/HeaderGoBackLeft/HeaderGoBackLeft';
import HeaderGoBackRight from '../../../components/Header/HeaderGoBackRight/HeaderGoBackRight';
import PictureCircle from '../../../components/PictureCircle/PictureCircle';
import SideBar from '../../../components/SideBar/SideBar';
import BigButton from '../../../components/Button/BigButton/BigButton';

const PHOTOLIST = [
	{ id: '1', src: 'https://pbs.twimg.com/profile_images/1374979417915547648/vKspl9Et_400x400.jpg' },
	{ id: '2', src: 'https://pbs.twimg.com/profile_images/1374979417915547648/vKspl9Et_400x400.jpg' },
	{ id: '3', src: 'https://pbs.twimg.com/profile_images/1374979417915547648/vKspl9Et_400x400.jpg' },
	{ id: '4', src: 'https://pbs.twimg.com/profile_images/1374979417915547648/vKspl9Et_400x400.jpg' },
];

const ANSWERLIST = [
	{ id: '1', question: '가장 좋아하는 음식은?', answer: '감자탕' },
	{ id: '2', question: '가장 좋아하는 음식은?', answer: '감자탕' },
	{ id: '3', question: '가장 좋아하는 음식은?', answer: '감자탕' },
	{ id: '4', question: '가장 좋아하는 음식은?', answer: '감자탕' },
	{ id: '5', question: '가장 좋아하는 음식은?', answer: '감자탕' },
	{ id: '6', question: '가장 좋아하는 음식은?', answer: '감자탕' },
	{ id: '7', question: '가장 좋아하는 음식은?', answer: '감자탕' },
];

const HomeFeedPage = () => {
	const [navigateState, setNavigateState] = useState('photo');
	const handlePhotoItem = () => {
		setNavigateState('photo');
	};
	const handleAnswerItem = () => {
		setNavigateState('answer');
	};
	console.log(navigateState);
	return (
		<Wrapper>
			<S.HeaderWrapper>
				<HeaderGoBackLeft>
					<S.HeaderLeftSide className="material-icons">local_activity</S.HeaderLeftSide>30
				</HeaderGoBackLeft>
				<HeaderGoBackRight>
					<S.HeaderRightSide className="material-icons">more_vert</S.HeaderRightSide>
				</HeaderGoBackRight>
			</S.HeaderWrapper>
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
					<S.NavigateItem focus={navigateState === 'photo'} onClick={handlePhotoItem}>
						<S.NavigateItemText>사진</S.NavigateItemText>
					</S.NavigateItem>
					<S.NavigateItem focus={navigateState === 'answer'} onClick={handleAnswerItem}>
						<S.NavigateItemText>답변</S.NavigateItemText>
					</S.NavigateItem>
				</S.NavigateBox>
				{navigateState === 'photo' && (
					<S.MainBoxPhoto>
						{PHOTOLIST.map(photoItem => (
							<S.PhotoItem key={photoItem.id} src={photoItem.src} />
						))}
					</S.MainBoxPhoto>
				)}
				{navigateState === 'answer' && (
					<S.MainBoxAnswer>
						{ANSWERLIST.map(answerItem => (
							<S.AnswerItem key={answerItem.id}>
								<S.AnswerItemQuestion>{answerItem.question}</S.AnswerItemQuestion>
								<S.AnswerItemAnswer>{answerItem.answer}</S.AnswerItemAnswer>
							</S.AnswerItem>
						))}
					</S.MainBoxAnswer>
				)}
			</WrapperInner>
			<BigButton>대화 나눠보기</BigButton>
			<SideBar status="home" />
		</Wrapper>
	);
};

export default HomeFeedPage;
