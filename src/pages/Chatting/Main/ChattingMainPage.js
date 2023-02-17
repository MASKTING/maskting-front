import * as S from './ChattingMainPage.style';
import React from 'react';
import { useState, useRef } from 'react';
import Wrapper, { WrapperInner } from '../../../components/Wrapper/Wrapper';
import PictureCircle from '../../../components/PictureCircle/PictureCircle';
import SideBar from '../../../components/SideBar/SideBar';
import { getChattingRooms } from '../../../api/chatting';
import { getLikeList } from '../../../api/getLikeList';
import { createClient, subscribe } from '../../../api/socketConnect';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import useSocket from '../../../hooks/query/useSocket';
const ChattingMainPage = () => {
	const [chattingRoomList, setChattingRoomList] = useState([]);
	const [likeNumber, setLikeNumber] = useState(0);
	const { client, lastMessage } = useSocket();

	const findRoom = sender => {
		const targetIdx = chattingRoomList.findIndex(roomInfo => roomInfo.roomName === sender);
		return targetIdx;
	};

	const updateLastMessage = (sender, newMessage) => {
		const targetIdx = findRoom(sender);
		const copyRoomList = [...chattingRoomList];
		copyRoomList[targetIdx].lastMessage = newMessage;
		copyRoomList[targetIdx].update = true;
		setChattingRoomList(copyRoomList);
	};

	const initialSetting = async () => {
		const roomList = await getChattingRooms();
		setChattingRoomList(roomList);
		const likeList = await getLikeList();
		setLikeNumber(likeList?.length);
	};

	useEffect(() => {
		initialSetting();
		return () => client?.deactivate();
	}, []);

	useEffect(() => {
		if (lastMessage?.sender !== '') updateLastMessage(lastMessage?.sender, lastMessage?.message);
	}, [lastMessage]);

	const navigate = useNavigate();
	const handleNavigateRequest = () => {
		navigate('request');
	};
	const handleNavigateRoom = e => {
		navigate(`/chatting/room/${e.currentTarget.dataset.roomid}`);
	};
	return (
		<Wrapper titleMessage="채팅">
			<WrapperInner>
				{likeNumber ? (
					<S.NotifyBox onClick={handleNavigateRequest}>
						<S.NotifyPictureBox>
							<S.LikePeopleNumber>{likeNumber}</S.LikePeopleNumber>
							<PictureCircle size="small"></PictureCircle>
						</S.NotifyPictureBox>
						<S.NotifyTextBox>
							<S.NotifyTitle>새로운 대화요청이 도착했습니다</S.NotifyTitle>
							<S.NotifyInfo>여기를 눌러 프로필을 확인해보세요</S.NotifyInfo>
						</S.NotifyTextBox>
					</S.NotifyBox>
				) : null}

				{!!chattingRoomList.length ? (
					<S.ChattingRoomList>
						{chattingRoomList?.map(chattingRoom => (
							<S.ChattingRoomItem
								onClick={handleNavigateRoom}
								data-roomid={chattingRoom?.roomId}
								key={chattingRoom.roomId}
							>
								<S.ChattingProfileBox>
									<PictureCircle src={chattingRoom.profile} size="small"></PictureCircle>
								</S.ChattingProfileBox>
								<S.ChattingMainBox>
									<S.ChattingSender>{chattingRoom.roomName}</S.ChattingSender>
									<S.ChattingMessageBox>
										<S.ChattingMessage>{chattingRoom.lastMessage}</S.ChattingMessage>
										<S.ChattingLastMessage>{` · ${chattingRoom.lastUpdatedAt}`}</S.ChattingLastMessage>
									</S.ChattingMessageBox>

									{chattingRoom.update ? <S.NewChattingDot></S.NewChattingDot> : null}
									<S.RemainingTimeBarText src={'32px'}>
										{parseInt(chattingRoom.remainingTime.split(':')[0])}H
									</S.RemainingTimeBarText>
									<S.RemainingTimeBar
										min="0"
										max="72"
										value={parseInt(chattingRoom.remainingTime.split(':')[0])}
										src={'-18px'}
									></S.RemainingTimeBar>
								</S.ChattingMainBox>
							</S.ChattingRoomItem>
						))}
					</S.ChattingRoomList>
				) : (
					<S.NoChattingRoom>
						<S.NoChattingEmo className="material-icons">chat_bubble</S.NoChattingEmo>
						<S.NoChattingMessage>요청받은 메세지가 없어요</S.NoChattingMessage>
					</S.NoChattingRoom>
				)}
			</WrapperInner>
			<SideBar status="chatting" />
		</Wrapper>
	);
};

export default ChattingMainPage;
