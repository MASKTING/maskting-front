import styled from 'styled-components';

// COMMON
const Wrapper = styled.div`
	width: 39rem;
	height: 77.7rem;
`;
const TitleWrapper = styled.div`
	top: 0rem;
	left: 0rem;
	position: absolute;
	width: 39rem;
	height: 12rem;
`;
const Title = styled.h1`
	top: 2rem;
	left: 2.4rem;
	position: absolute;
	width: 20rem;
	height: 8rem;
	color: #212121;
	font-family: 'Pretendard';
	font-style: normal;
	font-weight: 700;
	font-size: 2.6rem;
	line-height: 4rem;
	letter-spacing: 0.1rem;
`;
const Content = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	padding: 2rem 0rem;
	gap: 3rem;
	position: absolute;
	width: 39rem;
	height: 69.3rem;
	left: 0rem;
	top: 12rem;
	overflow-y: scroll;
	overflow-x: hidden;
	::-webkit-scrollbar {
		display: none;
	}
`;

const Label = styled.label`
	position: relative;
	display: flex;
	width: 20rem;
	height: 2.8rem;
	left: 2.4rem;
	font-family: 'Pretendard';
	font-style: normal;
	font-weight: bolder;
	font-size: 1.7rem;
	line-height: 2.8rem;
	letter-spacing: 0.08rem;
`;

// PHOTO
const PhotoInfoWrapper = styled.div`
	width: 39rem;
	height: 18rem;
	flex: none;
	order: 0;
	flex-grow: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
`;

const PhotoErrorMessage = styled.span`
	position: absolute;
	margin: auto;
	width: 30rem;
	text-align: center;
	height: 2.8rem;
	left: 0;
	right: 0;
	top: -2rem;
	font-family: 'Pretendard';
	font-style: normal;
	font-weight: bolder;
	font-size: 1.7rem;
	line-height: 2.8rem;
	letter-spacing: 0.08rem;
	color: #f45e5f;
`;

const PhotoBox = styled.div`
	position: relative;
	width: 16rem;
	height: 16rem;
	background: #eeeeee;
	border-radius: 50%;
	border: none;
`;

const PhotoImage = styled.img`
	width: 100%;
	height: 100%;
	border-radius: 50%;
`;

const PhotoLogo = styled.div`
	background-color: #f45e5f;
	display: block;
	color: white;
	font-size: 30px;
	display: flex;
	justify-content: center;
	align-items: center;
	position: absolute;
	right: 0;
	bottom: 0;
	width: 5.486rem;
	height: 5.486rem;
	border-radius: 50%;
	cursor: pointer;
`;

const HalfInfoWrapper = styled.div`
	width: 39rem;
	height: 8.8rem;
	flex: none;
	order: 0;
	flex-grow: 0;
	margin-bottom: 0.5rem;
`;
const HalfInput = styled.input`
	position: relative;
	width: 23rem;
	height: 4.8rem;
	background: #eeeeee;
	border: none;
	border-radius: 0.8rem;
	font-family: 'Pretendard';
	font-style: normal;
	font-weight: 500;
	font-size: 1.3rem;
	line-height: 2.8rem;
	letter-spacing: 0.08rem;
	padding-left: 1.6rem;
	margin: 0 2.2rem;
`;

const WideInfoWrapper = styled.div`
	width: 39rem;
	height: 13.6rem;
	flex: none;
	order: 0;
	flex-grow: 0;
`;

const WideInput = styled.textarea`
	position: relative;
	width: 34.2rem;
	height: 9.6rem;
	background: #eeeeee;
	border: none;
	border-radius: 0.8rem;
	font-family: 'Pretendard';
	font-style: normal;
	font-weight: 500;
	font-size: 1.3rem;
	line-height: 2.8rem;
	letter-spacing: 0.08rem;
	padding-left: 1.6rem;
	margin: 1.2rem 2.2rem;
	resize: none;
`;

const IntroduceCnt = styled.span`
	color: ${props => (props.cnt > 20 ? '#ff0000' : '#212121')};
`;

const BtnCheckNickname = styled.button`
	width: 9.5rem;
	height: 4.8rem;
	left: 2.4rem;
	margin-top: 1.2rem;
	background-color: rgba(244, 94, 95, 1);
	font-family: 'Inter';
	font-style: normal;
	font-weight: 700;
	font-size: 1.7rem;
	line-height: 3.6rem;
	text-align: center;
	letter-spacing: 0.1rem;
	color: rgba(250, 250, 250, 1);
	border: none;
	border-radius: 0.8rem;
	&:hover {
		color: #000000;
	}
	cursor: pointer;
`;

const Form = styled.form``;
const BtnWrapper = styled.div`
	position: fixed;
	display: flex;
	justify-content: space-between;
	padding: 0 2rem;
	position: absolute;
	width: 39rem;
	height: 8.8rem;
	top: 71rem;
`;

const ErrorMessage = styled.span`
	position: relative;
	width: 14.4rem;
	height: 2.8rem;
	left: 2.4rem;
	top: 0rem;
	font-family: 'Pretendard';
	font-style: normal;
	font-weight: bolder;
	font-size: 1.7rem;
	line-height: 2.8rem;
	letter-spacing: 0.08rem;
	color: #f45e5f;
`;
const PrevBtn = styled.button`
	width: 9.5rem;
	height: 5.8rem;
	left: 2.4rem;
	top: 0rem;
	background-color: white;
	font-family: 'Inter';
	font-style: normal;
	font-weight: 700;
	font-size: 1.7rem;
	line-height: 3.6rem;
	text-align: center;
	letter-spacing: 0.1rem;
	color: #212121;
	border: none;
	border-radius: 1.6rem;
	&:hover {
		color: rgba(244, 94, 95, 1);
	}
	cursor: pointer;
`;
const NextBtn = styled.button`
	width: 9.5rem;
	height: 5.8rem;
	left: 2.4rem;
	top: 0rem;
	background-color: rgba(244, 94, 95, 1);
	font-family: 'Inter';
	font-style: normal;
	font-weight: 700;
	font-size: 1.7rem;
	line-height: 3.6rem;
	text-align: center;
	letter-spacing: 0.1rem;
	color: rgba(250, 250, 250, 1);
	border: none;
	border-radius: 1.6rem;
	&:hover {
		color: #000000;
	}
	cursor: pointer;
`;

const ModalWrapper = styled.div`
	width: 39rem;
	height: 84.4rem;
	position: relative;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.4);
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 1;
`;

const Modal = styled.div`
	position: absolute;
	width: 27.8rem;
	height: 19.7rem;
	background-color: #fff;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
	margin: auto;
	border-radius: 1.6rem;
	z-index: 5;
	padding: 1.5rem;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const ModalMessageWrapper = styled.div`
	width: 18.8rem;
	height: 8.5rem;
`;

const ModalMessage = styled.p`
	text-align: center;
	height: 3.1rem;
	font-size: 1.6rem;
	font-style: normal;
	font-weight: 700;
	line-height: 2.5rem;
	letter-spacing: -0.1rem;
	margin-top: 0.5rem;
`;

const ModalBtnWrapper = styled.div`
	position: absolute;
	bottom: 1.5rem;
	left: 0;
	right: 0;
	display: flex;
	justify-content: space-around;
`;

export {
	Wrapper,
	TitleWrapper,
	Title,
	PhotoInfoWrapper,
	PhotoBox,
	PhotoImage,
	PhotoErrorMessage,
	HalfInfoWrapper,
	WideInfoWrapper,
	WideInput,
	IntroduceCnt,
	Content,
	Label,
	HalfInput,
	Form,
	BtnWrapper,
	ErrorMessage,
	NextBtn,
	PrevBtn,
	BtnCheckNickname,
	PhotoLogo,
	ModalWrapper,
	Modal,
	ModalMessageWrapper,
	ModalMessage,
	ModalBtnWrapper,
};
