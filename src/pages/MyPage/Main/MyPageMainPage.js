import * as S from './MyPageMainPage.style';
import React, { useState } from 'react';
import Wrapper from '../../../components/Wrapper';
import { WrapperInner } from '../../../components/Wrapper/Wrapper';
import HeaderGoBackLeft from '../../../components/Header/HeaderGoBackLeft/HeaderGoBackLeft';
import HeaderGoBackRight from '../../../components/Header/HeaderGoBackRight/HeaderGoBackRight';
import PictureCircle from '../../../components/PictureCircle/PictureCircle';
import SideBar from '../../../components/SideBar/SideBar';
import PhotoBox from '../../../components/Carousel/PhotoBox/PhotoBox';
import Carousel from '../../../components/Carousel/Carousel';
import { useQuery } from 'react-query';
import api from '../../../api/api';

const ANSWERLIST = [
	{ id: '1', question: '가장 좋아하는 음식은?', answer: '감자탕' },
	{ id: '2', question: '가장 좋아하는 음식은?', answer: '감자탕' },
	{ id: '3', question: '가장 좋아하는 음식은?', answer: '감자탕' },
	{ id: '4', question: '가장 좋아하는 음식은?', answer: '감자탕' },
	{ id: '5', question: '가장 좋아하는 음식은?', answer: '감자탕' },
	{ id: '6', question: '가장 좋아하는 음식은?', answer: '감자탕' },
	{ id: '7', question: '가장 좋아하는 음식은?', answer: '감자탕' },
];

const MyPageMainPage = () => {
	const [navigateState, setNavigateState] = useState('photo');
	const [carouselState, setCarouselState] = useState(0);
	const { data: userInfo } = useQuery('getProfile', () => api('/api/user'));
	const { data: feedList } = useQuery('getFeedList', () => api('/api/feed'));

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
						<PictureCircle size="large" src={userInfo?.data?.profile} />
					</S.ProfileImage>
					<S.ProfileInfo>
						<S.ProfileNickname>{userInfo?.data?.nickname}</S.ProfileNickname>
						<S.ProfileIntroduce>{feedList?.data?.bio}</S.ProfileIntroduce>
					</S.ProfileInfo>
				</S.ProfileBox>
				<S.NavigateBox>
					<S.NavigateItem
						focus={navigateState === 'photo'}
						onClick={() => {
							setNavigateState('photo');
						}}
					>
						<S.NavigateItemText>사진</S.NavigateItemText>
					</S.NavigateItem>
					<S.NavigateItem
						focus={navigateState === 'answer'}
						onClick={() => {
							setNavigateState('answer');
						}}
					>
						<S.NavigateItemText>답변</S.NavigateItemText>
					</S.NavigateItem>
				</S.NavigateBox>
				{navigateState === 'photo' && (
					<PhotoBox
						feedList={feedList?.data?.feeds}
						setNavigateState={setNavigateState}
						setCarouselState={setCarouselState}
					/>
				)}
				{navigateState === 'carousel' && (
					<Carousel
						feedList={feedList?.data?.feeds}
						setNavigateState={setNavigateState}
						carouselState={carouselState}
					/>
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

			<SideBar status="myPage" />
		</Wrapper>
	);
};

export default MyPageMainPage;
