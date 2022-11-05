import React from 'react';
import { MainButton } from '../../../components/Button/Button';
import Panel from '../../../components/Panel/Panel';
import SideBar from '../../../components/SideBar/SideBar';
import Wrapper from '../../../components/Wrapper/Wrapper';
import PictureCircle from '../../../components/PictureCircle/PictureCircle';
import * as S from './HomeMainPage.style';
import RefreshCircle from '../../../components/RefreshCircle/RefreshCircle';
import MainHeader from '../../../components/MainHeader/MainHeader';

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
	return (
		<Wrapper>
			<MainHeader />
			<Panel size="small">
				<S.PanelInfoInner>
					<PictureCircle size="midium" />
					<S.InfoBig>사진을 추가해보세요</S.InfoBig>
					<S.InfoSmall>@@@님의 내적매력을 피드에 담아보세요</S.InfoSmall>
					<MainButton size="small" message="사진 추가하기" />
				</S.PanelInfoInner>
			</Panel>
			<Panel size="midium">
				<S.PanelFeedInner>
					<S.FeedProfile>
						<PictureCircle size="small" />
						<S.FeedProfileInfo>분당청소요정</S.FeedProfileInfo>
					</S.FeedProfile>
					<S.FeedInfo>
						<S.InfoSmall>베이킹과 라이딩을 좋아하고 청소를 잘해요💫</S.InfoSmall>
					</S.FeedInfo>
					<S.FeedImageList>
						{FEEDLIST.map(FeedItem => (
							<S.FeedImageItem key={FeedItem.id} src={FeedItem.src} />
						))}
					</S.FeedImageList>
				</S.PanelFeedInner>
			</Panel>
			<Panel size="midium"></Panel>
			<SideBar status="home" />
			<RefreshCircle />
		</Wrapper>
	);
};

export default HomeMainPage;
