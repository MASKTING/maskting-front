import * as S from './SideBar.style';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const SIDEBARITEMS = [
	{
		id: '1',
		icon: 'home',
		message: '홈',
		status: 'home',
	},
	{
		id: '2',
		icon: 'local_activity',
		message: '티켓',
		status: 'ticket',
	},
	{
		id: '3',
		icon: 'chat_bubble',
		message: '채팅',
		status: 'chatting',
	},
	{
		id: '4',
		icon: 'person',
		message: '마이 페이지',
		status: 'myPage',
	},
];

const SideBar = props => {
	const navigate = useNavigate();
	return (
		<S.SideBarList>
			{SIDEBARITEMS.map(SideBarItem => (
				<S.SideBarItem
					className="material-icons"
					key={SideBarItem.id}
					onClick={() => {
						navigate('/' + SideBarItem.status);
					}}
				>
					<S.SideBarItemIcon focus={props.status === SideBarItem.status}>
						{SideBarItem.icon}
					</S.SideBarItemIcon>
					<S.SideBarItemMessage focus={props.status === SideBarItem.status}>
						{SideBarItem.message}
					</S.SideBarItemMessage>
				</S.SideBarItem>
			))}
		</S.SideBarList>
	);
};

export default SideBar;
