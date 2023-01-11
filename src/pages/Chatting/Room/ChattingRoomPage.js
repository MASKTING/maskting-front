import * as S from './ChattingRoomPage.style';
import React from 'react';
import * as SockJS from 'sockjs-client';
import Wrapper from '../../../components/Wrapper/Wrapper';
import { getChattingRoom } from '../../../api/chatting';
import * as StompJs from '@stomp/stompjs';
import { useRef, useState, useEffect } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router';
import { Client, Stomp } from '@stomp/stompjs';
import Chatting from '../Main/Chatting';
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
	// const getChattingRoomMethod = n => {
	// 	getChattingRoom(n);
	// };
	// useEffect(() => {
	// 	getChattingRoomMethod(1);
	// }, []);
	const [chatList, setChatList] = useState([]);
	const [chat, setChat] = useState('');
	const navigate = useNavigate();
	const { apply_id } = useParams();
	const client = useRef({});

	const connect = () => {
		client.current = new StompJs.Client({
			brokerURL: 'ws://localhost:8080/app',
			connectHeaders: {
				login: 'user',
				passcode: 'password',
			},
			debug: function (str) {
				console.log(str);
			},
			reconnectDelay: 5000,
			heartbeatIncoming: 4000,
			heartbeatOutgoing: 4000,
		});

		client.current.activate();
	};

	const publish = chat => {
		if (!client.current.connected) return;
		client.current.publish({
			destination: '/pub/chat',
			body: JSON.stringify({
				applyId: apply_id,
				chat: chat,
			}),
		});

		setChat('');
	};

	const subscribe = () => {
		client.current.subscribe('/sub/chat/' + apply_id, body => {
			const json_body = JSON.parse(body.body);
			setChatList(_chat_list => [..._chat_list, json_body]);
		});
	};

	const disconnect = () => {
		client.current.deactivate();
	};

	const handleChange = event => {
		// 채팅 입력 시 state에 값 설정
		setChat(event.target.value);
	};

	const handleSubmit = (event, chat) => {
		// 보내기 버튼 눌렀을 때 publish
		event.preventDefault();

		publish(chat);
	};

	useEffect(() => {
		connect();
		return () => disconnect();
	}, []);
	const handleBack = () => {
		navigate(-1);
	};

	const handleSend = () => {
		// 전송 API
	};

	return (
		<Wrapper>
			<Top>
				<TopInner>
					<Back className="material-icons" onClick={handleBack}>
						arrow_back_ios
					</Back>
					<Opponent>분당청소요정</Opponent>
					<TakenTime>36h</TakenTime>
					<LeftTime>최종시간까지 HH시간 남았어요</LeftTime>
					<Menu className="material-icons">more_vert</Menu>
				</TopInner>
			</Top>
			<WrapperInner>
				<Chatting message="안녕하세요?" isMy date="오전 10:36" />
				<Chatting message="안녕하세요?" isMy date="오전 10:36" />
				<Chatting message="안녕하세요?" isMy date="오전 10:36" />
				<Chatting message="혹시 닭갈비 좋아시나요" isMy date="오전 10:36" />
				<Chatting message="혹시 닭갈비 좋아시나요혹시 닭갈비 좋아시나요" isMy date="오전 10:36" />
				<Chatting message="혹시 닭갈비 좋아시나요혹시 닭갈비 좋아시나요" date="오전 10:36" />
				<Chatting message="혹시 닭갈비 좋아시나요혹시 닭갈비 좋아시나요" date="오전 10:36" />
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
					<Input type="text" placeholder="메세지 보내기" />
					<SendBtn className="material-icons" onClick={handleSend}>
						send
					</SendBtn>
				</InputInner>
			</InputWrapper>
		</Wrapper>
	);
};

export default ChattingRoomPage;
