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
import { useQuery } from 'react-query';
import api from '../../../api/api';
const ChattingRequestPage = () => {
	const [feedList, setFeedList] = useState([]);

	const [feedViewState, setFeedViewState] = useState(false);
	const [selectedFeed, setSelectedFeed] = useState(0);
	const { data: userInfo } = useQuery('getProfile', () => api('/api/user'));

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

	if (feedViewState)
		return <ChattingFeedPage setViewState={setFeedViewState} userInfo={feedList[selectedFeed]} />;
	else
		return (
			<Wrapper titleMessage="채팅">
				<WrapperInner>
					<S.NotifyBox>
						<S.NotifyTextBox>
							<S.NotifyInfoIfNoRoom>
								{userInfo?.data.nickname}님의 피드를 추천받고 <br />
								대화를 나누고 싶어하시는 분들이에요
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
									{feedItem?.feed.map((src, idx) => (
										<S.FeedImageItem key={idx} src={src} />
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
