import * as SockJS from 'sockjs-client';
import * as StompJs from '@stomp/stompjs';
/**
 * 소켓을 생성하는 함수
 * @param {String} endpoint
 * @returns
 */
const createClient = endpoint => {
	const client = new StompJs.Client({
		brokerURL: `ws://maskting.site${endpoint}`,
	});

	client.webSocketFactory = () => {
		const socketIn = new SockJS(`https://maskting.site${endpoint}`);
		return socketIn;
	};

	return client;
};

/**
 * 특정 방을 구독하는 함수
 * @param {StompJsClient} client
 * @param {Number} roomId
 * @param {Function} subscribeCallback
 *
 */
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
