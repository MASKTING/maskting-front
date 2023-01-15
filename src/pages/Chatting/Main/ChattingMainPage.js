import * as S from './ChattingMainPage.style';
import React from 'react';
import { useState, useRef } from 'react';
import Wrapper, { WrapperInner } from '../../../components/Wrapper/Wrapper';
import PictureCircle from '../../../components/PictureCircle/PictureCircle';
import SideBar from '../../../components/SideBar/SideBar';
import { getChattingRooms } from '../../../api/chatting';
import { createClient, subscribe } from '../../../api/socketConnect';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const ChattingMainPage = () => {
	const [chattingRoomList, setChattingRoomList] = useState([]);
	const [roomIdList, setRoomIdList] = useState([]);
	const client = useRef({});

	const connect = () => {
		client.current = createClient('/app');
		client.current.onConnect = onConnected;
		client.current.activate();
	};

	const onConnected = () => {
		roomIdList.forEach(roomId => {
			subscribe(client.current, roomId, subscribeCallback);
		});
	};

	const findRoom = sender => {
		const targetIdx = chattingRoomList.findIndex(roomInfo => roomInfo.roomName === sender);
		return targetIdx;
	};

	const updateLastMessage = (sender, newMessage) => {
		const targetIdx = findRoom(sender);
		const copyRoomList = [...chattingRoomList];
		copyRoomList[targetIdx].lastMessage = newMessage;
		setChattingRoomList(copyRoomList);
	};

	const subscribeCallback = response => {
		const responseBody = JSON.parse(response.body);
		updateLastMessage(responseBody.sender, responseBody.message);
	};

	const initialSetting = async () => {
		const data = await getChattingRooms();
		setChattingRoomList(data);
		const newRoomIdList = [];
		data.forEach(roomInfo => {
			newRoomIdList.push(roomInfo.roomId);
		});
		setRoomIdList(newRoomIdList);
	};

	useEffect(() => {
		initialSetting();
	}, []);

	useEffect(() => {
		connect();
		return () => client.current.deactivate();
	}, [roomIdList]);

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
				<S.NotifyBox onClick={handleNavigateRequest}>
					<S.NotifyPictureBox>
						<PictureCircle size="small"></PictureCircle>
					</S.NotifyPictureBox>
					<S.NotifyTextBox>
						<S.NotifyTitle>새로운 대화요청이 도착했습니다</S.NotifyTitle>
						<S.NotifyInfo>여기를 눌러 프로필을 확인해보세요</S.NotifyInfo>
					</S.NotifyTextBox>
				</S.NotifyBox>
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
									<S.ChattingMessage>
										{chattingRoom.lastMessage + ` · ${chattingRoom.lastUpdatedAt}`}
									</S.ChattingMessage>
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
