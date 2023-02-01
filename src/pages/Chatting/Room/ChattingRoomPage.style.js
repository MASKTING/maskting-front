import styled from 'styled-components';

const Top = styled.header`
	position: absolute;
	top: 4rem;
	width: 100%;
	height: 5rem;
`;
const TopInner = styled.div`
	position: relative;
`;
const Back = styled.div`
	position: absolute;
	left: 2rem;
	top: 1.2rem;
`;
const Opponent = styled.div`
	position: absolute;
	left: 5rem;
	top: 0.5rem;
	font-size: 1.7rem;
	font-weight: bold;
`;
const TakenTime = styled.div`
	position: absolute;
	left: 16rem;
	background-color:#FDD4D6
	/* width:3.9rem;height:2rem; */

	font-size: 1.7rem;
	font-weight: bold;
	color: #9e9e9e;
	top:1.2rem;
`;
const LeftTime = styled.div`
	position: absolute;
	left: 5rem;
	top: 3rem;
	font-size: 1.1rem;
`;
const Menu = styled.div`
	position: absolute;
	top: 1.2rem;
	right: 2rem;
`;

const InputWrapper = styled.div`
	position: absolute;
	bottom: 0;
	width: 100%;
`;
const InputInner = styled.div`
width:100%
	position: relative;
	display: flex;
	justify-content: center;
`;
const PlusButton = styled.div`
	position: absolute;
	left: 2rem;
	top: 0.5rem;
`;
const Input = styled.input`
	background-color: #e0e0e0;
	border-radius: 1.6rem;
	border: none;
	width: 25.4rem;
	height: 3.2rem;
	padding: 0 1.5rem;

	&::placeholder {
		color: #9e9e9e;
	}
`;

const SendBtn = styled.div`
	position: absolute;
	right: 2rem;
	top: 0.5rem;
`;

export {
	Top,
	TopInner,
	Back,
	Opponent,
	TakenTime,
	LeftTime,
	Menu,
	InputWrapper,
	InputInner,
	PlusButton,
	Input,
	SendBtn,
};
