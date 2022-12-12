import * as S from './ChattingMainPage.style';
import React from 'react';
import Wrapper, { WrapperInner } from '../../../components/Wrapper/Wrapper';
import PictureCircle from '../../../components/PictureCircle/PictureCircle';
import SideBar from '../../../components/SideBar/SideBar';
import { getChattingRoom } from '../../../api/chatting';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const CHATTINGROOMLIST = [
	{ id: 1, sender: '분당청소요정', message: '안녕하세요?' },
	{ id: 2, sender: '분당청소요정', message: '안녕하세요?' },
	{ id: 3, sender: '분당청소요정', message: '안녕하세요?' },
	{ id: 4, sender: '분당청소요정', message: '안녕하세요?' },
	{ id: 5, sender: '분당청소요정', message: '안녕하세요?' },
	{ id: 6, sender: '분당청소요정', message: '안녕하세요?' },
	{ id: 7, sender: '분당청소요정', message: '안녕하세요?' },
	{ id: 8, sender: '분당청소요정', message: '안녕하세요?' },
	{ id: 9, sender: '분당청소요정', message: '안녕하세요?' },
];

const ChattingMainPage = () => {
	const getchattingRoomMethod = async () => {
		const chattingRoomList = await getChattingRoom();
		console.log(chattingRoomList);
	};

	useEffect(() => {
		getchattingRoomMethod();
	}, []);

	const navigate = useNavigate();
	const handleNavigateRequest = () => {
		navigate('request');
	};
	const handleNavigateRoom = () => {
		navigate('room');
	};
	return (
		<Wrapper titleMessage="채팅">
			<WrapperInner>
				<S.NotifyBox onClick={handleNavigateRequest}>
					<S.NotifyPictureBox>
						<PictureCircle size="small"></PictureCircle>
					</S.NotifyPictureBox>
					<S.NotifyTextBox>
						<S.NotifyTitle>새로운 대화요청이 도착했습니다</S.NotifyTitle>
						<S.NotifyInfo>여기를 눌러 프로필을 확인해보세요</S.NotifyInfo>
					</S.NotifyTextBox>
				</S.NotifyBox>
				<S.ChattingRoomList>
					{CHATTINGROOMLIST.map(chattingRoom => (
						<S.ChattingRoomItem onClick={handleNavigateRoom} key={chattingRoom.id}>
							<S.ChattingProfileBox>
								<PictureCircle size="small"></PictureCircle>
							</S.ChattingProfileBox>
							<S.ChattingMainBox>
								<S.ChattingSender>{chattingRoom.sender}</S.ChattingSender>
								<S.ChattingMessage>{chattingRoom.message}</S.ChattingMessage>
							</S.ChattingMainBox>
						</S.ChattingRoomItem>
					))}
				</S.ChattingRoomList>
			</WrapperInner>
			<SideBar status="chatting" />
		</Wrapper>
	);
};

export default ChattingMainPage;
