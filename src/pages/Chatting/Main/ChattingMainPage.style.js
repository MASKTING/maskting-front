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

const ChattingRoomList = styled.section`
	margin-top: 1rem;
`;
const ChattingRoomItem = styled.article`
	width: 34.2rem;
	height: 7.4rem;
	display: flex;
	margin-top: 0.2rem;
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
	font-size: 1.6rem;
	font-weight: 700;
`;

const NoChattingRoom = styled.div`
	height: 55rem;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;
const NoChattingEmo = styled.div`
	font-size: 5rem;
`;
const NoChattingMessage = styled.div`
	font-size: 1.1rem;
	font-weight: bold;
	margin-top: 2rem;
`;

const ChattingMessage = styled.div`
	font-size: 13px;
	color: #757575;
	font-weight: 500;
`;
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
	NoChattingRoom,
	NoChattingEmo,
	NoChattingMessage,
};
