import * as S from './ChattingRequestPage.style';
import { useState } from 'react';
import Wrapper from '../../../components/Wrapper';
import { WrapperInner } from '../../../components/Wrapper/Wrapper';
import { getLikeList } from '../../../api/getLikeList';
import SideBar from '../../../components/SideBar/SideBar';
import Panel from '../../../components/Panel/Panel';
import PictureCircle from '../../../components/PictureCircle/PictureCircle';
import ChattingFeedPage from '../RequestFeed/ChattingFeedPage';
import { useEffect } from 'react';
const ChattingRequestPage = () => {
	const [feedList, setFeedList] = useState([]);

	const [feedViewState, setFeedViewState] = useState(false);
	const [selectedFeed, setSelectedFeed] = useState(0);

	const init = async () => {
		const feedList = await getLikeList();

		setFeedList(feedList);
	};

	useEffect(() => {
		init();
	}, []);

	const handleFeedButton = e => {
		setSelectedFeed(parseInt(e.currentTarget.id));
		setFeedViewState(true);
	};

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

	if (feedViewState)
		return (
			<ChattingFeedPage
				setViewState={setFeedViewState}
				userInfo={feedList[selectedFeed]}
			></ChattingFeedPage>
		);
	else
		return (
			<Wrapper titleMessage="채팅">
				<WrapperInner>
					<S.NotifyBox>
						<S.NotifyTextBox>
							<S.NotifyInfoIfNoRoom>
								분당청소요정님의 피드를 추천받고 대화를 나누고 싶어하시는 분들이에요
							</S.NotifyInfoIfNoRoom>
						</S.NotifyTextBox>
					</S.NotifyBox>
					{feedList.map((feedItem, idx) => (
						<Panel size="midium" key={idx}>
							<S.PanelFeedInner onClick={handleFeedButton} id={idx}>
								<S.FeedProfile>
									<PictureCircle src={feedItem.profile} size="small" />
									<S.FeedProfileInfo>{feedItem.nickname}</S.FeedProfileInfo>
								</S.FeedProfile>
								<S.FeedInfo>
									<S.InfoMidium>{feedItem.bio}</S.InfoMidium>
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
				<SideBar status="chatting" />
			</Wrapper>
		);
};

export default ChattingRequestPage;
