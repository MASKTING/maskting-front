import * as S from './ChattingRoomPage.style';
import React from 'react';
import Wrapper from '../../../components/Wrapper/Wrapper';
import { getChattingRoom } from '../../../api/chatting';
import * as StompJs from '@stomp/stompjs';
import { useRef, useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { Client, Stomp } from '@stomp/stompjs';

const ChattingRoomPage = () => {
	// const getChattingRoomMethod = n => {
	// 	getChattingRoom(n);
	// };
	// useEffect(() => {
	// 	getChattingRoomMethod(1);
	// }, []);
	const [chatList, setChatList] = useState([]);
	const [chat, setChat] = useState('');

	const { apply_id } = useParams();
	const client = useRef({});

	const connect = () => {
		client.current = new StompJs.Client({
			brokerURL: 'ws://ec2-3-34-75-204.ap-northeast-2.compute.amazonaws.com:8080/app',
			onConnect: () => {
				console.log('success');
				subscribe();
			},
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

	return (
		<Wrapper>
			<div className={'chat-list'}>{chatList}</div>
			<form onSubmit={event => handleSubmit(event, chat)}>
				<div>
					<input type={'text'} name={'chatInput'} onChange={handleChange} value={chat} />
				</div>
				<input type={'submit'} value={'의견 보내기'} />
			</form>
		</Wrapper>
	);
};

export default ChattingRoomPage;
