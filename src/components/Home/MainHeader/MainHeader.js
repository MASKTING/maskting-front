import * as S from './MainHeader.style';

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import WaitingModal from '../../common/WaitingModal';
import ticketIcon from '../../../assets/svg/icon_ticket.svg';

const MainHeader = () => {
	const navigate = useNavigate();
	const [isWaitingModal, setIsWaitingModal] = useState(false);
	return (
		<S.MainHeader>
			{isWaitingModal && (
				<WaitingModal
					isModal={WaitingModal}
					onCloseModal={() => {
						setIsWaitingModal(false);
					}}
				/>
			)}
			<S.TicketSection>
				<img
					src={ticketIcon}
					alt="티켓"
					onClick={() => {
						navigate('/ticket');
					}}
				/>
				<S.TicketInfo>30</S.TicketInfo>
			</S.TicketSection>
			<S.NotificationSection>
				<S.NotificationIcon
					className="material-icons"
					onClick={() => {
						// navigate('notification');
						setIsWaitingModal(true);
					}}
				>
					notifications
				</S.NotificationIcon>
			</S.NotificationSection>
		</S.MainHeader>
	);
};

export default MainHeader;
