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

const ChattingMessageBox = styled.div`
	display: flex;
	flex-direction: row;
	position: relative;
`;

const ChattingMessage = styled.div`
	height: fit-content;
	width: 100px;
	font-size: 13px;
	color: #757575;
	font-weight: 500;
	text-overflow: ellipsis;
	overflow: hidden;
	white-space: nowrap;
`;

const ChattingLastMessage = styled.div`
	position: absolute;
	font-size: 13px;
	color: #757575;
	font-weight: 500;
	left: 95px;
`;

const NewChattingDot = styled.div`
	position: absolute;
	border-radius: 1rem;
	width: 12px;
	height: 12px;
	right: 88px;
	background: #f45e5f;
`;

const RemainingTimeBarText = styled.div`
	position: absolute;
	width: 48px;
	height: 28px;
	right: ${props => props.src};

	font-family: 'Pretendard';
	font-style: normal;
	font-weight: 700;
	font-size: 17px;
	line-height: 28px;
	text-align: center;
	color: #9e9e9e;
	z-index: 1;
`;

const RemainingTimeBar = styled.progress`
	appearance: none;
	position: absolute;
	margin-bottom: 17px;
	right: ${props => props.src};
	&::-webkit-progress-bar {
		background: #f0f0f0;
		border-radius: 12px;
		border: 1px solid #eeeeee;
		height: 28px;
		width: 48px;
		overflow: hidden;
	}

	&::-webkit-progress-value {
		background: #fdd4d6;
		border-radius: 0px;
		height: 28px;
		width: 48px;
	}
`;

const LikePeopleNumber = styled.div`
	position: absolute;
	width: 15px;
	height: 45px;
	left: 67px;
	z-index: 1;
	/* Title 1 */

	font-family: 'Pretendard';
	font-style: normal;
	font-weight: 700;
	font-size: 30px;
	line-height: 45px;
	/* identical to box height, or 150% */

	letter-spacing: 1px;

	/* Pink/500 */

	color: #f67677;
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
	NewChattingDot,
	ChattingLastMessage,
	ChattingMessageBox,
	RemainingTimeBarText,
	RemainingTimeBar,
	LikePeopleNumber,
};
