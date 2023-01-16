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
const ModalInner = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 90%;
	padding: 2rem 0;
`;
const Title = styled.div`
	font-size: 1.7rem;
	font-weight: bold;
	display: flex;
	justify-content: center;
	text-align: center;
	line-height: 2.6rem;
`;
const Info = styled.div`
	color: #9e9e9e;
	font-size: 1.1rem;
	margin: 1.5rem 1rem;
	line-height: 1.8rem;
	text-align: center;
`;
const HomeFeedPage = ({ userInfo, setViewState }) => {
	const [navigateState, setNavigateState] = useState('photo');
	const [isModal, setIsModal] = useState(false);
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

	return (
		<Wrapper>
			{isModal && (
				<Modal width="32.1" height="25.2" onCloseModal={handleCloseModal}>
					<ModalInner>
						<Title>
							분당청소요정에게 <br />
							티켓을 사용해서 <br />
							대화를 요청하시겠어요?
						</Title>
						<Info>상대방이 대화 요청을 수락할 경우 알림을 보내드려요 잔여 티켓: 30장</Info>
						<SmallButton onClick={handleRequestConfirm}>요청하기</SmallButton>
						<SmallButton color="white" onClick={handleCloseModal}>
							취소
						</SmallButton>
					</ModalInner>
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
