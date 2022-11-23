import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Panel from '../../../components/Panel/Panel';
import SideBar from '../../../components/SideBar/SideBar';
import Wrapper, { WrapperInner } from '../../../components/Wrapper/Wrapper';
import PictureCircle from '../../../components/PictureCircle/PictureCircle';
import * as S from './HomeMainPage.style';
import MainHeader from '../../../components/Home/MainHeader/MainHeader';
import Modal from '../../../components/Modal/Modal';
import { useNavigate } from 'react-router-dom';
import SmallButton from '../../../components/Button/SmallButton/SmallButton';
import RefreshCircle from '../../../components/Home/RefreshCircle/RefreshCircle';
import { useRecoilState } from 'recoil';
import { AuthInfo } from '../../../recoil/Auth';
import api, { getAccessToken, getAccessToken2 } from '../../../api/api';
import { getProfile } from '../../../api/getProfile';
import { useQuery } from 'react-query';

const FEEDPHOTOLIST = [
	{
		id: '1',
		src: 'http://news.samsungdisplay.com/wp-content/uploads/2018/08/8.jpg',
	},
	{
		id: '2',
		src: 'http://news.samsungdisplay.com/wp-content/uploads/2018/08/8.jpg',
	},
	{
		id: '3',
		src: 'http://news.samsungdisplay.com/wp-content/uploads/2018/08/8.jpg',
	},
	{
		id: '4',
		src: 'http://news.samsungdisplay.com/wp-content/uploads/2018/08/8.jpg',
	},
	{
		id: '5',
		src: 'http://news.samsungdisplay.com/wp-content/uploads/2018/08/8.jpg',
	},
	{
		id: '6',
		src: 'http://news.samsungdisplay.com/wp-content/uploads/2018/08/8.jpg',
	},
];

const FEEDLIST = [
	{
		id: '1',
		src: 'http://news.samsungdisplay.com/wp-content/uploads/2018/08/8.jpg',
		nickname: '분당청소요정',
		info: '베이킹과 라이딩을 좋아하고 청소를 잘해요💫',
	},
	{
		id: '2',
		src: 'http://news.samsungdisplay.com/wp-content/uploads/2018/08/8.jpg',
		nickname: '분당청소요정',
		info: '베이킹과 라이딩을 좋아하고 청소를 잘해요💫',
	},
	{
		id: '3',
		src: 'http://news.samsungdisplay.com/wp-content/uploads/2018/08/8.jpg',
		nickname: '분당청소요정',
		info: '베이킹과 라이딩을 좋아하고 청소를 잘해요💫',
	},
];

const HomeMainPage = () => {
	const navigate = useNavigate();
	const [isModal, setIsModal] = useState(false);
	const [userInfo, setUserInfo] = useState({ nickname: '', imageData: '' });

	const turnOnModal = () => {
		setIsModal(true);
	};
	const turnOffModal = () => {
		setIsModal(false);
	};
	const navigatePicture = () => {
		navigate('picture');
	};
	const handleFeedButton = () => {
		navigate(`feed`);
	};

	useEffect(() => {
		getProfile().then(response => {
			setUserInfo({
				profile: response.profile,
				nickname: response.nickname,
			});
		});
	}, []);

	return (
		<Wrapper>
			<WrapperInner>
				{isModal && (
					<Modal width={27.8} height={23.5} isModal={isModal} onCloseModal={turnOffModal}>
						<S.ModalInner>
							<S.InfoBig>티켓을 사용해서</S.InfoBig>
							<S.InfoBig>새로운 매칭 상대를</S.InfoBig>
							<S.InfoBig>추천 받아보시겠어요?</S.InfoBig>
							<S.InfoSmall>잔여 티켓:30장</S.InfoSmall>
							<SmallButton onClick={navigatePicture}>새로 추천받기</SmallButton>
							<SmallButton size="small" onClick={turnOffModal} color="white">
								취소
							</SmallButton>
						</S.ModalInner>
					</Modal>
				)}

				<MainHeader />
				<Panel size="small">
					<S.PanelInfoInner>
						<PictureCircle size="midium" src={userInfo.profile} />
						<S.InfoBig>사진을 추가해보세요</S.InfoBig>
						<S.InfoMidium>{userInfo.nickname}님의 내적매력을 피드에 담아보세요</S.InfoMidium>
						<SmallButton size="small" onClick={turnOnModal}>
							사진 추가하기
						</SmallButton>
					</S.PanelInfoInner>
				</Panel>
				{FEEDLIST.map(feedItem => (
					<Panel size="midium" key={feedItem.id}>
						<S.PanelFeedInner onClick={handleFeedButton} id={feedItem.id}>
							<S.FeedProfile>
								<PictureCircle size="small" />
								<S.FeedProfileInfo>{feedItem.nickname}</S.FeedProfileInfo>
							</S.FeedProfile>
							<S.FeedInfo>
								<S.InfoMidium>{feedItem.info}</S.InfoMidium>
							</S.FeedInfo>
							<S.FeedImageList>
								{FEEDPHOTOLIST.map(FeedItem => (
									<S.FeedImageItem key={FeedItem.id} src={FeedItem.src} />
								))}
							</S.FeedImageList>
						</S.PanelFeedInner>
					</Panel>
				))}
			</WrapperInner>
			<SideBar status="home" />
			<RefreshCircle />
		</Wrapper>
	);
};

export default HomeMainPage;
