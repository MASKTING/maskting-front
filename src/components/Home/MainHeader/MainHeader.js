import * as S from './MainHeader.style';

import React from 'react';
import { useNavigate } from 'react-router-dom';

const MainHeader = () => {
	const navigate = useNavigate();
	const navigateNotification = () => {
		navigate('notification');
	};
	return (
		<S.MainHeader>
			<S.TicketSection>
				<S.TicketIcon className="material-icons">local_activity</S.TicketIcon>
				<S.TicketInfo>30</S.TicketInfo>
			</S.TicketSection>
			<S.NotificationSection>
				<S.NotificationIcon className="material-icons" onClick={navigateNotification}>
					notifications
				</S.NotificationIcon>
			</S.NotificationSection>
		</S.MainHeader>
	);
};

export default MainHeader;
