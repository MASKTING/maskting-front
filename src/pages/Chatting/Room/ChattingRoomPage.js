import * as S from './ChattingRoomPage.style';
import React from 'react';
import ChattingFinalModal from './Modal/ChattiingFinalModal';
import Wrapper from '../../../components/Wrapper/Wrapper';
import { getChattingRoom, postChatClose } from '../../../api/chatting';
import { RemainingTimeBar, RemainingTimeBarText } from '../Main/ChattingMainPage.style';
import { useRef, useState, useEffect } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router';
import useInterval from '../../../components/Signup/BasicInfo/useInterval';
import Chatting from '../Main/Chatting';
import { createClient, subscribe, publish } from '../../../api/socketConnect';
import { WrapperInner } from '../../../components/Wrapper/Wrapper.style';

const ChattingRoomPage = () => {
	const [chatList, setChatList] = useState([]);
	const [chat, setChat] = useState('');
	const [delay, setDelay] = useState(1000);
	const [hour, setHour] = useState('');
	const [minute, setMinute] = useState('');
	const [second, setSecond] = useState('');
	const [timeOver, setTimeOver] = useState(false);
	const [roomInfo, setRoomInfo] = useState({});
	const nickname = localStorage.getItem('nickname');

	const navigate = useNavigate();
	const { roomId } = useParams();
	const client = useRef({});
	const scrollRef = useRef({});

	const getChattingRoomMethod = async n => {
		const data = await getChattingRoom(roomId);
		setRoomInfo(data);
		const [h, m, s] = data.remainingTime.split(':').map(val => parseInt(val));
		if (h === 0 && m === 0 && s === 0) setDelay(null);
		timeSetting(h, m, s);
		setChatList(data.messages);
	};

	const timeSetting = (h, m, s) => {
		setHour(h);
		setMinute(m);
		setSecond(s);
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
		console.log('채팅방에 연결되었습니다.');
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

	const timeMakerHourMinSec = (hour, minute, second) => {
		const _hour = hour < 10 ? `0${hour}` : hour;
		const _minute = minute < 10 ? `0${minute}` : minute;
		const _second = second < 10 ? `0${second}` : second;

		return `${_hour}:${_minute}:${_second}`;
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

	const timerCallback = () => {
		if (second === 0) setSecond(59);
		else setSecond(second - 1);

		if (second === 0) {
			setMinute(minute - 1);
			if (minute === 0) {
				setHour(hour - 1);
				setMinute(59);
			}
		}

		if (second === 1 && minute === 0 && hour === 0) setDelay(null);
	};

	useInterval(timerCallback, delay);

	useEffect(() => {
		scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
	}, [chatList]);

	useEffect(() => {
		connect();
		return () => {
			postChatClose(roomId);
			disconnect();
		};
	}, [roomId]);

	useEffect(() => {
		if (hour === 0 && minute === 0 && second === 0) setTimeOver(true);
	}, [hour, minute, second]);

	const handleBack = () => {
		navigate(-1);
	};

	return (
		<Wrapper>
			<S.Top>
				<S.TopInner>
					<S.Back className="material-icons" onClick={handleBack}>
						arrow_back_ios
					</S.Back>
					<S.Opponent>{roomInfo.roomName}</S.Opponent>
					<RemainingTimeBarText src={'182px'}>{hour}H</RemainingTimeBarText>
					<RemainingTimeBar min="0" max="72" value={hour} src={'132px'} />
					<S.LeftTime>최종시간까지 {timeMakerHourMinSec(hour, minute, second)} 남았어요</S.LeftTime>
					<S.Menu className="material-icons">more_vert</S.Menu>
				</S.TopInner>
			</S.Top>
			<WrapperInner ref={scrollRef}>
				{/* {timeOver && <ChattingFinalModal roomInfo={roomInfo} />} */}
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

			<S.InputWrapper onSubmit={handleSubmit}>
				<S.InputInner>
					<S.PlusButton className="material-icons">add_circle_outline</S.PlusButton>
					<S.Input type="text" onChange={chatSetting} value={chat} placeholder="메세지 보내기" />
					<S.SendBtn className="material-icons">send</S.SendBtn>
				</S.InputInner>
			</S.InputWrapper>
		</Wrapper>
	);
};

export default ChattingRoomPage;
