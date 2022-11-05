import * as S from './MainHeader.style';

import React from 'react';

const MainHeader = () => {
	return (
		<S.MainHeader>
			<S.TicketSection>
				<S.TicketIcon className="material-icons">local_activity</S.TicketIcon>
				<S.TicketInfo>30</S.TicketInfo>
			</S.TicketSection>
			<S.NotificationSection>
				<S.NotificationIcon className="material-icons">notifications</S.NotificationIcon>
			</S.NotificationSection>
		</S.MainHeader>
	);
};

export default MainHeader;
