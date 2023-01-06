import styled from 'styled-components';
import FONTSIZE from '../../../constants/fontsize';
import PALETTE from '../../../constants/palette';

const NotifyBox = styled.section`
	display: flex;
	justify-content: center;
	width: 34.2rem;
	height: 10rem;
	border-radius: 2rem;
	background-color: ${PALETTE.BLACK200};
	display: flex;
	align-items: center;
`;

const NotifyTextBox = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	height: 5rem;
	text-indent: 1rem;
	line-height: 2.5rem;
`;

const NotifyInfoIfNoRoom = styled.p`
	font-size: ${FONTSIZE.infoText};
	display: flex;
	justify-content: center;
	font-size: 1.3rem;
	text-align: center;
	padding: 6rem;
	font-weight: 700;
`;

export { NotifyBox, NotifyTextBox, NotifyInfoIfNoRoom };
