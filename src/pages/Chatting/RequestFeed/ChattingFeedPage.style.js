import styled, { keyframes } from 'styled-components';
import FONTSIZE from '../../../constants/fontsize';
import PALETTE from '../../../constants/palette';

export const HeaderWrapper = styled.div`
	color: ${PALETTE.BLACK600};
	font-size: 1.5rem;
`;

export const HeaderLeftSide = styled.span`
	padding: 0 0.5rem 0 0;
`;

export const HeaderRightSide = styled.span`
	cursor: pointer;
`;

export const ProfileBox = styled.section`
	display: flex;
	padding: 1rem;
`;
export const ProfileImage = styled.article`
	flex-grow: 4;
	display: flex;
	justify-content: center;
	align-items: center;
`;
export const ProfileInfo = styled.article`
	flex-grow: 6;
`;
export const ProfileNickname = styled.p`
	font-size: ${FONTSIZE.subTitle};
	line-height: 4rem;
	font-weight: 700;
`;
export const ProfileIntroduce = styled.p`
	font-size: ${FONTSIZE.infoText};
	line-height: 2rem;
	font-weight: 700;
`;

export const NavigateBox = styled.nav`
	display: flex;
	width: 100%;
	height: 4rem;
`;
export const NavigateItem = styled.div`
	margin-bottom: 1rem;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-grow: 1;
	border-bottom: ${props => props.focus && `4px ${PALETTE.PINK600} solid`};
	cursor: pointer;
`;
export const NavigateItemText = styled.div`
	font-weight: 700;
`;

export const MainBoxAnswer = styled.section``;

export const AnswerItem = styled.article`
	background-color: ${PALETTE.PINK50};
	padding: 2rem 3rem;
	margin-bottom: 1.5rem;
`;

export const AnswerItemQuestion = styled.p`
	font-size: ${FONTSIZE.text};
	font-weight: 700;
	margin-bottom: 1rem;
`;
export const AnswerItemAnswer = styled.p`
	text-indent: 2rem;
`;

export const ModalInner = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 90%;
	padding: 2rem 0;
`;
export const Title = styled.div`
	font-size: 1.7rem;
	font-weight: bold;
	display: flex;
	justify-content: center;
	text-align: center;
	line-height: 2.6rem;
`;
export const Info = styled.div`
	color: #9e9e9e;
	font-size: 1.1rem;
	margin: 1.5rem 1rem;
	line-height: 1.8rem;
	text-align: center;
`;

export const DeclineBox = styled.div`
	position: relative;

	/* Body 2 */
	z-index: 1;
	font-family: 'Pretendard-Regular';
	font-style: normal;
	font-weight: 500;
	font-size: 13px;
	line-height: 20px;
	/* identical to box height, or 154% */
	left: 50%;
	transform: translateX(-50%);
	letter-spacing: 0.5px;
	/* Black/600 */

	color: #757575;
	bottom: 135px;
	width: fit-content;
	height: fit-content;
	display: flex;
	flex-direction: row;
	align-items: center;
	cursor: pointer;
`;

export const BigButton = styled.button`
	position: relative;
	bottom: 15rem;
	left: 50%;
	transform: translateX(-50%);
	margin: auto;
	width: 34.2rem;
	height: 5.8rem;
	border: none;
	background-color: ${props => (props.color === 'gray' ? PALETTE.BLACK300 : PALETTE.PINK600)};
	border-radius: 1.6rem;
	color: ${props => (props.color === 'gray' ? PALETTE.BLACK600 : PALETTE.BLACK50)};
	cursor: pointer;
	font-weight: 700;
`;
