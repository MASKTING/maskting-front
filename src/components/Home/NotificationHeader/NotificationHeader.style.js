import styled from 'styled-components';
import FONTSIZE from '../../../constants/fontsize';

export const NotificationHeader = styled.header`
	position: absolute;
	top: 5rem;
	font-size: ${FONTSIZE.text};
	font-weight: 700;
	cursor: pointer;
	display: flex;
	justify-content: center;
	align-items: center;
`;
export const BackInco = styled.span`
	font-size: ${FONTSIZE.infoText};
`;
