import React, { useEffect } from 'react';
import { useState } from 'react';
import { createClient, subscribe, publish } from '../../api/socketConnect';
import { getChattingRooms } from '../../api/chatting';

const useSocket = () => {
	const [lastMessage, setLastMessage] = useState({ sender: '', roomId: '', message: 'sad' });
	const [client, setClient] = useState(createClient());

	const connect = async () => {
		const roomList = await getChattingRooms();

		const roomId = roomList.map(roomInfo => roomInfo.roomId);

		const subscribeCallback = response => {
			setLastMessage(JSON.parse(response.body));
		};

		const onConnected = () => {
			roomId.forEach(id => {
				client.subscribe(`/sub/chat/room/${id}`, subscribeCallback);
			});
		};

		client.onConnect = onConnected;
		client.activate();
	};

	useEffect(() => {
		connect();
		return () => client.deactivate();
	}, []);

	return { client, lastMessage };
};

export default useSocket;
