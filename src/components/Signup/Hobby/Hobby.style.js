import styled from 'styled-components';
import FONTSIZE from '../../../constants/fontsize';
import PALETTE from '../../../constants/palette';

const Content = styled.div`
	display: inline-block;
	top: 15.5rem;
	left: 0rem;
	flex-direction: column;
	position: absolute;
	width: 39rem;
	height: 58.2rem;
	overflow-y: scroll;
	overflow-x: hidden;
	::-webkit-scrollbar {
		display: none;
	}
`;
const Form = styled.form``;
const SmallTitle = styled.h1`
	top: 9.3rem;
	left: 2.4rem;
	position: absolute;
	height: 2rem;
	color: #212121;
	font-family: 'Pretendard';
	font-style: normal;
	font-weight: 500;
	font-size: 1.3rem;
	line-height: 2rem;
	letter-spacing: 0.05rem;
`;
const ErrorMessage = styled.h1`
	top: 9.3rem;
	left: 2.7rem;
	position: absolute;
	height: 2.8rem;
	color: #f45e5f;
	font-family: 'Pretendard';
	font-style: normal;
	font-weight: 500;
	font-size: 1.7rem;
	line-height: 2.8rem;
	letter-spacing: 0.08rem;
`;
const HobbySelectWrapper = styled.button`
	top: 0rem;
	left: 2.4rem;
	position: relative;
	margin-right: ${props => (props.right ? `1.6rem` : null)};
	margin-bottom: 3rem;
	border: none;
	border-radius: 2.4rem;
	cursor: pointer;
`;
const HobbySelectLabel = styled.label`
	display: flex;
	border: none;
	border-radius: 2.4rem;
	color: ${props => (props.focused ? PALETTE.WHITE : PALETTE.BLACK)};
	background: ${props => (props.focused ? PALETTE.PINK600 : PALETTE.BLACK200)};
	position: relative;
	width: 100%;
	height: 4.8rem;
	justify-content: center;
	align-items: center;
	padding: 0 4.2rem;
	cursor: pointer;
`;
const HobbySelectInput = styled.input`
	display: none;
`;

export {
	Content,
	Form,
	SmallTitle,
	ErrorMessage,
	HobbySelectWrapper,
	HobbySelectLabel,
	HobbySelectInput,
};
