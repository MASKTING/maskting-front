import * as S from './ChattingRoomPage.style';
import React from 'react';
import * as SockJS from 'sockjs-client';
import Wrapper from '../../../components/Wrapper/Wrapper';
import { getChattingRoom, postChatClose } from '../../../api/chatting';
import { RemainingTimeBar, RemainingTimeBarText } from '../Main/ChattingMainPage.style';
import * as StompJs from '@stomp/stompjs';
import { useRef, useState, useEffect } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router';
import Chatting from '../Main/Chatting';
import { createClient, subscribe, publish } from '../../../api/socketConnect';
import { WrapperInner } from '../../../components/Wrapper/Wrapper.style';
import styled from 'styled-components';

const Top = styled.header`
	position: absolute;
	top: 4rem;
	width: 100%;
	height: 5rem;
`;
const TopInner = styled.div`
	position: relative;
`;
const Back = styled.div`
	position: absolute;
	left: 2rem;
	top: 1.2rem;
`;
const Opponent = styled.div`
	position: absolute;
	left: 5rem;
	top: 0.5rem;
	font-size: 1.7rem;
	font-weight: bold;
`;
const TakenTime = styled.div`
	position: absolute;
	left: 16rem;
	background-color:#FDD4D6
	/* width:3.9rem;height:2rem; */

	font-size: 1.7rem;
	font-weight: bold;
	color: #9e9e9e;
	top:1.2rem;
`;
const LeftTime = styled.div`
	position: absolute;
	left: 5rem;
	top: 3rem;
	font-size: 1.1rem;
`;
const Menu = styled.div`
	position: absolute;
	top: 1.2rem;
	right: 2rem;
`;

const InputWrapper = styled.div`
	position: absolute;
	bottom: 0;
	width: 100%;
`;
const InputInner = styled.div`
width:100%
	position: relative;
	display: flex;
	justify-content: center;
`;
const PlusButton = styled.div`
	position: absolute;
	left: 2rem;
	top: 0.5rem;
`;
const Input = styled.input`
	background-color: #e0e0e0;
	border-radius: 1.6rem;
	border: none;
	width: 25.4rem;
	height: 3.2rem;
	padding: 0 1.5rem;

	&::placeholder {
		color: #9e9e9e;
	}
`;

const SendBtn = styled.div`
	position: absolute;
	right: 2rem;
	top: 0.5rem;
`;

const ChattingRoomPage = () => {
	const [chatList, setChatList] = useState([]);
	const [chat, setChat] = useState('');
	const [roomInfo, setRoomInfo] = useState({});
	const nickname = localStorage.getItem('nickname');

	const navigate = useNavigate();
	const { roomId } = useParams();
	const client = useRef({});
	const scrollRef = useRef({});

	const getChattingRoomMethod = async n => {
		const data = await getChattingRoom(roomId);
		setRoomInfo(data);
		setChatList(data.messages);
	};
	useEffect(() => {
		getChattingRoomMethod(roomId);
	}, []);

	const connect = () => {
		client.current = createClient('/app');
		client.current.onConnect = onConnected;
		client.current.activate();
	};

	const chatSetting = e => {
		setChat(e.target.value);
	};

	const sendChat = () => {
		if (!client.current.connected) return;
		publish(client.current, roomId, nickname, chat);
	};

	const chatListSetting = () => {
		const newMessage = { content: chat, nickname: nickname, createdAt: timeMaker() };
		setChatList(chatList => [...chatList, newMessage]);
		setChat('');
	};

	const onConnected = () => {
		subscribe(client.current, roomId, subscribeCallback);
	};

	const timeMaker = () => {
		const today = new Date();
		const AMPM = today.getHours() >= 12 ? '오후' : '오전';
		let curHour = today.getHours() > 12 ? today.getHours() % 12 : today.getHours();
		curHour = curHour === 0 ? 12 : curHour;
		const curMinutes = today.getMinutes() < 10 ? `0${today.getMinutes()}` : today.getMinutes();
		return `${AMPM} ${curHour}:${curMinutes}`;
	};

	const subscribeCallback = response => {
		const receivedBody = JSON.parse(response.body);
		const receivedMessage = receivedBody.message;
		if (receivedBody.sender !== nickname) {
			const newMessage = {
				content: receivedMessage,
				nickname: receivedBody.sender,
				createdAt: timeMaker(),
			};
			setChatList(chatList => [...chatList, newMessage]);
		}
	};

	const disconnect = () => {
		client.current.deactivate();
	};

	const handleSubmit = event => {
		event.preventDefault();
		if (chat !== '') {
			sendChat();
			chatListSetting();
		}
	};

	useEffect(() => {
		scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
	}, [chatList]);

	useEffect(() => {
		connect();
		return () => {
			postChatClose(roomId);
			disconnect();
		};
	}, []);

	const handleBack = () => {
		navigate(-1);
	};

	return (
		<Wrapper>
			<Top>
				<TopInner>
					<Back className="material-icons" onClick={handleBack}>
						arrow_back_ios
					</Back>
					<Opponent>{roomInfo.roomName}</Opponent>
					<RemainingTimeBarText src={'182px'}>{roomInfo.remainingTime}H</RemainingTimeBarText>
					<RemainingTimeBar
						min="0"
						max="72"
						value={roomInfo.remainingTime}
						src={'132px'}
					></RemainingTimeBar>
					<LeftTime>최종시간까지 {roomInfo.remainingTime}시간 남았어요</LeftTime>
					<Menu className="material-icons">more_vert</Menu>
				</TopInner>
			</Top>
			<WrapperInner ref={scrollRef}>
				{chatList?.map((chatItem, idx) => {
					return chatItem.nickname == nickname ? (
						<Chatting message={chatItem.content} isMy date={chatItem.createdAt} key={idx} />
					) : (
						<Chatting
							message={chatItem.content}
							src={roomInfo?.profile}
							date={chatItem.createdAt}
							key={idx}
						/>
					);
				})}
			</WrapperInner>
			{/* <div className={'chat-list'}>{chatList}</div>
			<form onSubmit={event => handleSubmit(event, chat)}>
				<div>
					<input type={'text'} name={'chatInput'} onChange={handleChange} value={chat} />
				</div>
				<input type={'submit'} value={'의견 보내기'} />
			</form> */}

			<InputWrapper>
				<InputInner>
					<PlusButton className="material-icons">add_circle</PlusButton>
					<Input type="text" onChange={chatSetting} value={chat} placeholder="메세지 보내기" />
					<SendBtn className="material-icons" onClick={handleSubmit}>
						send
					</SendBtn>
				</InputInner>
			</InputWrapper>
		</Wrapper>
	);
};

export default ChattingRoomPage;
