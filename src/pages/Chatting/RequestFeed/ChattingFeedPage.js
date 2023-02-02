import * as S from './ChattingFeedPage.style';
import React, { useState } from 'react';
import Wrapper from '../../../components/Wrapper';
import { WrapperInner } from '../../../components/Wrapper/Wrapper';
import HeaderGoBackLeft from '../../../components/Header/HeaderGoBackLeft/HeaderGoBackLeft';
import HeaderGoBackRight from '../../../components/Header/HeaderGoBackRight/HeaderGoBackRight';
import PictureCircle from '../../../components/PictureCircle/PictureCircle';
import SideBar from '../../../components/SideBar/SideBar';
import AcceptModal from './component/Modals/AcceptModal/AcceptModal';
import AcceptNoticeModal from './component/Modals/AcceptNoticeModal/AcceptNoticeModal';
import DeclineModal from './component/Modals/DeclineModal/DeclineModal';
import DeclineNoticeModal from './component/Modals/DeclineNoticeModal/DeclineNoticeModal';
import Carousel from './component/Carousel/Carousel';
import PhotoBox from './component/PhotoBox/PhotoBox';
import cancel from '../../../assets/svg/cancel.svg';

const PHOTOLIST = [
	{ id: '1', src: 'http://img.seoul.co.kr//img/upload/2022/08/23/SSI_20220823175822.jpg' },
	{ id: '2', src: 'https://pbs.twimg.com/profile_images/1374979417915547648/vKspl9Et_400x400.jpg' },
	{
		id: '3',
		src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7mC4Bjo0Qtlf8JC5jnA2YVSajo3inYm3ebA&usqp=CAU',
	},
	{ id: '1', src: 'http://img.seoul.co.kr//img/upload/2022/08/23/SSI_20220823175822.jpg' },
	{ id: '2', src: 'https://pbs.twimg.com/profile_images/1374979417915547648/vKspl9Et_400x400.jpg' },
	{
		id: '3',
		src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7mC4Bjo0Qtlf8JC5jnA2YVSajo3inYm3ebA&usqp=CAU',
	},
];

const ANSWERLIST = [{ id: '1', question: '가장 좋아하는 음식은?', answer: '감자탕' }];

const ChattingFeedPage = ({ userInfo, setViewState }) => {
	const [navigateState, setNavigateState] = useState('photo');
	const [modalState, setModalState] = useState('');
	const [carouselState, setCarouselState] = useState(0);
	const [isRequested, setIsRequested] = useState(false);
	const handlePhotoItem = () => {
		setNavigateState('photo');
	};

	const handleAnswerItem = () => {
		setNavigateState('answer');
	};

	const back = () => {
		setViewState(false);
	};

	const changeModalState = e => {
		setModalState(e.target.dataset.state);
	};

	const modals = {
		accept: (
			<AcceptModal
				userInfo={userInfo}
				changeModalState={changeModalState}
				setIsRequested={setIsRequested}
			></AcceptModal>
		),
		acceptNotice: (
			<AcceptNoticeModal
				userInfo={userInfo}
				changeModalState={changeModalState}
				back={back}
			></AcceptNoticeModal>
		),
		decline: <DeclineModal userInfo={userInfo} changeModalState={changeModalState}></DeclineModal>,
		declineNotice: <DeclineNoticeModal userInfo={userInfo} back={back}></DeclineNoticeModal>,
	};

	return (
		<Wrapper>
			{modals[modalState]}
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
					<S.NavigateItem
						focus={navigateState === 'photo' || navigateState === 'carousel'}
						onClick={handlePhotoItem}
					>
						<S.NavigateItemText>사진</S.NavigateItemText>
					</S.NavigateItem>
					<S.NavigateItem focus={navigateState === 'answer'} onClick={handleAnswerItem}>
						<S.NavigateItemText>답변</S.NavigateItemText>
					</S.NavigateItem>
				</S.NavigateBox>

				{navigateState === 'photo' && (
					<PhotoBox
						setNavigateState={setNavigateState}
						setCarouselState={setCarouselState}
						feedList={PHOTOLIST}
					></PhotoBox>
				)}
				{navigateState === 'carousel' && (
					<Carousel
						setNavigateState={setNavigateState}
						carouselState={carouselState}
						feedList={PHOTOLIST}
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
				<S.BigButton color="gray">대화요청을 전송했어요</S.BigButton>
			) : (
				<S.BigButton onClick={changeModalState} data-state={'accept'}>
					요청 수락하기
				</S.BigButton>
			)}
			<S.DeclineBox data-state={'decline'} onClick={changeModalState}>
				<img src={cancel}></img> &nbsp;거절할래요
			</S.DeclineBox>
			<SideBar status="chatting" />
		</Wrapper>
	);
};

export default ChattingFeedPage;
