import * as SockJS from 'sockjs-client';
import * as StompJs from '@stomp/stompjs';

const createClient = endpoint => {
	const client = new StompJs.Client({
		brokerURL: `ws://localhost:8080${endpoint}`,
	});

	client.webSocketFactory = () => {
		const socketIn = new SockJS(`http://localhost:8080${endpoint}`);
		return socketIn;
	};

	return client;
};

const subscribe = (client, roomId, subscribeCallback) => {
	client.subscribe(`/sub/chat/room/${roomId}`, subscribeCallback);
};

const publish = (client, roomId, nickname, chat) => {
	client.publish({
		destination: '/pub/chat/message',
		body: JSON.stringify({
			roomId: roomId,
			sender: nickname,
			message: `${chat}`,
		}),
	});
};

export { createClient, subscribe, publish };
