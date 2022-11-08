import styled from 'styled-components';
import FONTSIZE from '../../../constants/fontsize';

export const PanelInnner = styled.article`
	width: 100%;
	height: 100%;
	display: flex;
`;
export const NotificationInfo = styled.p`
	margin-left: 2rem;
	display: flex;
	flex-direction: column;
	span {
		/* margin: 0.5rem 0; */
		line-height: 2.5rem;
	}
`;
export const NotificationTitle = styled.span`
	font-size: ${FONTSIZE.bigText};
	font-weight: 700;
`;
export const NotificationContent = styled.span`
	font-size: ${FONTSIZE.smallText};
`;
export const NotificationDetail = styled.span``;
