import React, { useState } from 'react';
import Panel from '../../../components/Panel/Panel';
import SideBar from '../../../components/SideBar/SideBar';
import Wrapper, { WrapperInner } from '../../../components/Wrapper/Wrapper';
import PictureCircle from '../../../components/PictureCircle/PictureCircle';
import * as S from './HomeMainPage.style';
import RefreshCircle from '../../../components/RefreshCircle/RefreshCircle';
import MainHeader from '../../../components/Home/MainHeader/MainHeader';
import Modal from '../../../components/Modal/Modal';
import { useNavigate } from 'react-router-dom';
import MainButton from '../../../components/Button/MainButton/MainButton';

const FEEDLIST = [
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

const HomeMainPage = () => {
	const navigate = useNavigate();
	const [isModal, setIsModal] = useState(false);
	const turnOnModal = () => {
		setIsModal(true);
	};
	const turnOffModal = () => {
		setIsModal(false);
	};
	const navigatePicture = () => {
		navigate('picture');
	};
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
							<MainButton size="small" onClick={navigatePicture}>
								새로 추천받기
							</MainButton>
							<MainButton size="small" onClick={turnOffModal} color="white">
								취소
							</MainButton>
						</S.ModalInner>
					</Modal>
				)}

				<MainHeader />
				<Panel size="small">
					<S.PanelInfoInner>
						<PictureCircle size="midium" />
						<S.InfoBig>사진을 추가해보세요</S.InfoBig>
						<S.InfoMidium>@@@님의 내적매력을 피드에 담아보세요</S.InfoMidium>
						<MainButton size="small" onClick={turnOnModal}>
							사진 추가하기
						</MainButton>
					</S.PanelInfoInner>
				</Panel>
				<Panel size="midium">
					<S.PanelFeedInner>
						<S.FeedProfile>
							<PictureCircle size="small" />
							<S.FeedProfileInfo>분당청소요정</S.FeedProfileInfo>
						</S.FeedProfile>
						<S.FeedInfo>
							<S.InfoMidium>베이킹과 라이딩을 좋아하고 청소를 잘해요💫</S.InfoMidium>
						</S.FeedInfo>
						<S.FeedImageList>
							{FEEDLIST.map(FeedItem => (
								<S.FeedImageItem key={FeedItem.id} src={FeedItem.src} />
							))}
						</S.FeedImageList>
					</S.PanelFeedInner>
				</Panel>
				<Panel size="midium"></Panel>
			</WrapperInner>
			<SideBar status="home" />
			<RefreshCircle />
		</Wrapper>
	);
};

export default HomeMainPage;
