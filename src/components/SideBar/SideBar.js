import * as S from './SideBar.style';
import React from 'react';

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
	return (
		<S.SideBarWrapper>
			{SIDEBARITEMS.map(SideBarItem => (
				<S.SideBarItem className="material-icons" key={SideBarItem.id}>
					<S.SideBarItemIcon focus={props.status === SideBarItem.status}>
						{SideBarItem.icon}
					</S.SideBarItemIcon>
					<S.SideBarItemMessage focus={props.status === SideBarItem.status}>
						{SideBarItem.message}
					</S.SideBarItemMessage>
				</S.SideBarItem>
			))}
		</S.SideBarWrapper>
	);
};

export default SideBar;
