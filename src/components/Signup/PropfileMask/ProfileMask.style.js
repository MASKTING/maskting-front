import styled from 'styled-components';

const Wrapper = styled.div`
	width: 39rem;
	height: 77.7rem;
`;

const TitleWrapper = styled.div`
	top: 0rem;
	left: 0rem;
	position: absolute;
	width: 39rem;
	height: 15.5rem;
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
	font-size: 2.2rem;
	line-height: 4rem;
	letter-spacing: 0.1rem;
`;

const InfoText = styled.p`
	top: 7rem;
	left: 2.4rem;
	position: absolute;
	width: 33.5rem;
	height: 2rem;
	font-family: 'Pretendard';
	font-style: normal;
	font-weight: 700;
	font-size: 0.8rem;
`;

const Red = styled.span`
	color: red;
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

const ImageWrapper = styled.section`
	width: 39rem;
	height: 42.2;
	display: flex;
	justify-content: center;
	align-content: center;
`;

const Image = styled.img`
	width: 34.2rem;
	height: 34.2rem;
	border-radius: 5rem;
	background-color: #eee;
`;

const MaskListWrapper = styled.section`
	width: 39rem;
	height: 10rem;
	display: flex;
	justify-content: center;
	margin-top: 4rem;
`;

const MaskList = styled.ul`
	width: 34.2rem;
	height: 10rem;
	border-radius: 1.2rem;
	background-color: #eee;
	display: flex;
	justify-content: space-evenly;
	align-items: center;
`;

const MaskItem = styled.li`
	width: 8rem;
	height: 8rem;
	border-radius: 1.2rem;
	background-color: #bdbdbd;
`;

const InfoMessage = styled.p`
	text-align: center;
	font-family: 'Inter';
	font-style: normal;
	font-weight: 700;
	font-size: 1.2rem;
	line-height: 3.6rem;
	position: absolute;
	left: 0rem;
	right: 0;
	top: 38rem;
	margin: auto;
`;

export {
	Wrapper,
	TitleWrapper,
	Title,
	InfoText,
	Red,
	Content,
	BtnWrapper,
	PrevBtn,
	NextBtn,
	ImageWrapper,
	Image,
	MaskListWrapper,
	MaskList,
	MaskItem,
	InfoMessage,
};
