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

const NotifyPictureBox = styled.div`
	width: 5rem;
	height: 5rem;
`;

const NotifyTextBox = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	height: 5rem;
	text-indent: 1rem;
	line-height: 2.5rem;
`;

const NotifyTitle = styled.p`
	font-size: 1.5rem;

	font-weight: 700;
`;
const NotifyInfo = styled.p`
	font-size: ${FONTSIZE.infoText};
`;

const ChattingRoomList = styled.section``;
const ChattingRoomItem = styled.article`
	width: 34.2rem;
	height: 7.4rem;
	display: flex;
`;
const ChattingProfileBox = styled.div`
	flex-grow: 1.4;
	display: flex;
	justify-content: center;
	align-items: center;
`;
const ChattingMainBox = styled.div`
	flex-grow: 8.6;
	display: flex;
	flex-direction: column;
	justify-content: center;
	line-height: 2.5rem;
`;
const ChattingSender = styled.div`
	font-size: 1.8rem;
	font-weight: 700;
`;
const ChattingMessage = styled.div``;
export {
	NotifyBox,
	NotifyTitle,
	NotifyTextBox,
	NotifyInfo,
	NotifyPictureBox,
	ChattingRoomList,
	ChattingRoomItem,
	ChattingProfileBox,
	ChattingMainBox,
	ChattingSender,
	ChattingMessage,
};
