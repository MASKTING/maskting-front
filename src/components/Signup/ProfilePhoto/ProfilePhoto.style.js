import styled from 'styled-components';

const Wrapper = styled.div`
	width: 39rem;
	height: 84.4rem;
	position: relative;
`;

const BtnGoBack = styled.button`
	width: 2.4rem;
	height: 2.4rem;
	border: none;
	display: flex;
	justify-content: center;
	align-items: center;
	position: absolute;
	top: 2rem;
	left: 2.4rem;
	background: none;
	font-size: 2.4rem;
	cursor: pointer;
`;

const TitleWrapper = styled.div`
	width: 39rem;
	height: 16.8rem;
	top: 0rem;
	left: 0rem;
	position: absolute;
`;
const Title = styled.h1`
	top: 5rem;
	left: 2.4rem;
	position: absolute;
	width: 29.5rem;
	height: 8rem;
	color: #212121;
	font-family: 'Pretendard';
	font-style: normal;
	font-weight: 700;
	font-size: 2.2rem; // 기존 2.6 -> 임시로 바꿈
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

const Form = styled.form``;

const ProfilePhotoWrapper = styled.div`
	height: 18rem;
	width: 39rem;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const ProfilePhoto = styled.div`
	height: 16rem;
	width: 16rem;
	border-radius: 50%;
	background-color: #f2f2f2;
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
`;

export const ProfilePhotoLogo = styled.span`
	width: 4.8rem;
	height: 4.8rem;
	font-size: 4.8rem;
	opacity: 0.25;
`;

const InfoTextWrapper = styled.div`
	width: 39rem;
	height: 11.1rem;
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 1rem 0;
`;

const InfoTextList = styled.ul`
	width: 34.2rem;
	height: 10.7rem;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	padding: 0 2.8rem;
`;

const InfoTextItem = styled.li`
	list-style-type: disc;
	font-size: 1.2rem;
	font-family: 'Pretendard';
	font-style: normal;
	font-weight: 500;
	line-height: 2.5rem;
	letter-spacing: -0.1rem;
`;

const ColorRed = styled.span`
	color: red;
`;

const InfoImageWrapper = styled.div`
	width: 39rem;
	height: 19.5rem;
	display: flex;
	justify-content: center;
`;

const InfoImage = styled.img`
	width: 34.2rem;
	height: 19.5rem;
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

const ModalInner = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const ModalSelectLabel = styled.label`
	height: 3.1rem;
	font-size: 1.6rem;
	font-style: normal;
	font-weight: 700;
	line-height: 2.5rem;
	letter-spacing: -0.1rem;
	margin-top: 0.5rem;
	cursor: pointer;
`;

const ModalSelectInput = styled.input`
	display: none;
`;

export {
	Wrapper,
	TitleWrapper,
	Title,
	BtnGoBack,
	InfoTextWrapper,
	InfoTextList,
	InfoTextItem,
	ProfilePhotoWrapper,
	InfoImageWrapper,
	InfoImage,
	ColorRed,
	Content,
	Form,
	ModalWrapper,
	ModalInner,
	ModalSelectLabel,
	ModalSelectInput,
};
