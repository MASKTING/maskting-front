import styled from 'styled-components';
import PALETTE from '../../../constants/palette';

export const MainHeader = styled.header`
	position: absolute;
	left: 0;
	right: 0;
	top: 3rem;
	margin: auto;
	width: 34.2rem;
	height: 2.4rem;
	display: flex;
	justify-content: space-between;
	color: ${PALETTE.BLACK600};
`;

export const TicketSection = styled.article`
	display: flex;
	align-items: center;
	font-size: 1.5rem;
	cursor: pointer;
`;

export const TicketIcon = styled.span``;
export const TicketInfo = styled.p`
	margin-left: 0.5em;
`;

export const NotificationSection = styled.article`
	cursor: pointer;
`;

export const NotificationIcon = styled.span``;
