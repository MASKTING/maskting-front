import * as S from './HomeFeedPage.style';
import React, { useState } from 'react';
import Wrapper from '../../../components/Wrapper';
import { WrapperInner } from '../../../components/Wrapper/Wrapper';
import HeaderGoBackLeft from '../../../components/Header/HeaderGoBackLeft/HeaderGoBackLeft';
import HeaderGoBackRight from '../../../components/Header/HeaderGoBackRight/HeaderGoBackRight';
import PictureCircle from '../../../components/PictureCircle/PictureCircle';
import SideBar from '../../../components/SideBar/SideBar';
import BigButton from '../../../components/Button/BigButton/BigButton';
import Modal from '../../../components/Modal/Modal';
import styled from 'styled-components';
import SmallButton from '../../../components/Button/SmallButton/SmallButton';
import { sendLike } from '../../../api/sendLike';
import Carousel from '../../../components/Carousel/Carousel';
import PhotoBox from '../../../components/Carousel/PhotoBox/PhotoBox';

const ANSWERLIST = [{ id: '1', question: '가장 좋아하는 음식은?', answer: '감자탕' }];

const HomeFeedPage = ({ userInfo, setViewState }) => {
	const [navigateState, setNavigateState] = useState('photo');
	const [isModal, setIsModal] = useState(false);
	const [carouselState, setCarouselState] = useState(0);
	const [isRequested, setIsRequested] = useState(false);
	const handlePhotoItem = () => {
		setNavigateState('photo');
	};
	const handleAnswerItem = () => {
		setNavigateState('answer');
	};

	const handleRequest = () => {
		setIsModal(true);
	};
	const handleCloseModal = () => {
		setIsModal(false);
	};
	const handleRequestConfirm = async () => {
		const data = await sendLike(userInfo.nickname);
		console.log(userInfo.nickname);
		setIsRequested(true);
		setIsModal(false);
	};
	const back = () => {
		setViewState(false);
	};

	console.log(userInfo);

	return (
		<Wrapper>
			{isModal && (
				<Modal width="32.1" height="25.2" onCloseModal={handleCloseModal}>
					<S.ModalInner>
						<S.Title>
							분당청소요정에게 <br />
							티켓을 사용해서 <br />
							대화를 요청하시겠어요?
						</S.Title>
						<S.Info>상대방이 대화 요청을 수락할 경우 알림을 보내드려요 잔여 티켓: 30장</S.Info>
						<SmallButton onClick={handleRequestConfirm}>요청하기</SmallButton>
						<SmallButton color="white" onClick={handleCloseModal}>
							취소
						</SmallButton>
					</S.ModalInner>
				</Modal>
			)}
			<S.HeaderWrapper>
				<HeaderGoBackLeft onClick={back}>
					<S.HeaderLeftSide className="material-icons">local_activity</S.HeaderLeftSide>30
				</HeaderGoBackLeft>
				<HeaderGoBackRight>
					<S.HeaderRightSide className="material-icons">more_vert</S.HeaderRightSide>
				</HeaderGoBackRight>
			</S.HeaderWrapper>
			<WrapperInner>
				<S.ProfileBox>
					<S.ProfileImage>
						<PictureCircle src={userInfo?.profile} size="large" />
					</S.ProfileImage>
					<S.ProfileInfo>
						<S.ProfileNickname>{userInfo?.nickname}</S.ProfileNickname>
						<S.ProfileIntroduce>{userInfo?.bio}</S.ProfileIntroduce>
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
					<PhotoBox
						setCarouselState={setCarouselState}
						setNavigateState={setNavigateState}
						feedList={userInfo?.feed}
					></PhotoBox>
				)}
				{navigateState === 'carousel' && (
					<Carousel
						setNavigateState={setNavigateState}
						feedList={userInfo?.feed}
						carouselState={carouselState}
					></Carousel>
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
			{isRequested ? (
				<BigButton color="gray">대화요청을 전송했어요</BigButton>
			) : (
				<BigButton onClick={handleRequest}>대화 나눠보기</BigButton>
			)}

			<SideBar status="home" />
		</Wrapper>
	);
};

export default HomeFeedPage;
