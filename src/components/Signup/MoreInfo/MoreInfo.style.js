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
	height: 10.8rem;
`;
const Title = styled.h1`
	top: 2rem;
	left: 2.4rem;
	position: absolute;
	width: 20.3em;
	height: 4rem;
	color: #212121;
	font-family: 'Pretendard';
	font-style: normal;
	font-weight: 700;
	font-size: 2.6rem;
	line-height: 4rem;
	letter-spacing: 0.1rem;
`;
const NoticeText = styled.h1`
	top: 6.8rem;
	left: 2.4rem;
	position: absolute;
	width: 39rem;
	height: 2rem;
	color: #212121;
	font-family: 'Pretendard';
	font-style: normal;
	font-weight: 500;
	font-size: 1.3rem;
	line-height: 2rem;
	letter-spacing: 0.05rem;
`;
const Content = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	top: 10.8rem;
	left: 0rem;
	position: absolute;
	width: 39rem;
	height: 69.3rem;
	gap: 3rem;
	padding: 2rem 0rem;
	overflow-y: scroll;
	overflow-x: hidden;
	::-webkit-scrollbar {
		display: none;
	}
`;
const Form = styled.form``;
const BasicInfoWrapper = styled.div`
	width: 39rem;
	height: 8.9rem;
	margin-bottom: 0.5rem;
`;
const BasicInput = styled.input`
	position: relative;
	width: 34.2rem;
	height: 4.8rem;
	left: 2.4rem;
	top: 1.2rem;
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
`;
const WideInfoWrapper = styled.div`
	width: 39rem;
	height: 22rem;
`;
const NarrowInput = styled.input`
	top: 1.2rem;
	left: 2.4rem;
	position: relative;
	width: 16rem;
	height: 4.8rem;
	margin-right: 2.2rem;
	margin-bottom: 1.8rem;
	border: none;
	background: #eeeeee;
	border-radius: 0.8rem;
`;
const WideInput = styled.input`
	top: 1.8rem;
	left: 2.4rem;
	position: relative;
	width: 34.2rem;
	height: 4.8rem;
	margin-right: 2.2rem;
	margin-bottom: 1.8rem;
	border: none;
	background: #eeeeee;
	border-radius: 0.8rem;
`;
const Label = styled.label`
	display: flex;
	left: 2.4rem;
	position: relative;
	width: 10rem;
	height: 2.8rem;
	font-family: 'Pretendard';
	font-style: normal;
	font-weight: bolder;
	font-size: 1.7rem;
	line-height: 2.8rem;
	letter-spacing: 0.08rem;
`;
const LongLabel = styled(Label)`
	display: inline-block;
	width: 39rem;
`;
const Slider = styled.input`
	top: 1.2rem;
	left: 2.4rem;
	position: relative;
	width: 34.1rem;
	height: 2rem;
	border-radius: 0.8rem;
	background: #eeeeee;
	outline: none;
	-webkit-appearance: none;
	${({ degree }) =>
		`background: linear-gradient(to right, #f45e5f 0%, #f45e5f ${degree}%, #EEEEEE ${degree}%)`};
	&::-webkit-slider-thumb {
		appearance: none;
		width: 4.8rem;
		height: 4.8rem;
		border-radius: 100%;
		background: ${({ degree }) => (degree >= 0 ? `#f45e5f` : `#e0e0e0`)};
	}
`;
const ErrorMessage = styled.span`
	top: 0rem;
	left: 2.4rem;
	position: relative;
	width: 14.4rem;
	height: 2.8rem;
	color: #f45e5f;
	font-family: 'Pretendard';
	font-style: normal;
	font-weight: bolder;
	font-size: 1.7rem;
	line-height: 2.8rem;
	letter-spacing: 0.08rem;
`;
const DegreeMessage = styled.span`
	left: 1.6rem;
	position: relative;
	width: 13rem;
	height: 2rem;
	color: #f45e5f;
	font-family: 'Pretendard';
	font-style: normal;
	font-weight: bolder;
	font-size: 1.3rem;
	line-height: 2rem;
	letter-spacing: 0.05rem;
`;
const BtnWrapper = styled.div`
	top: 71rem;
	left: 1.3rem;
	position: fixed;
	width: 35.3rem;
	height: 7.8rem;
	background: white;
`;
const BeforeBtn = styled.button`
	position: absolute;
	width: 9.5rem;
	height: 5.8rem;
	background-color: inherit;
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
	cursor: pointer;
	&:hover {
		color: #000000;
	}
`;
const NextBtn = styled.button`
	position: absolute;
	width: 9.5rem;
	height: 5.8rem;
	left: 26rem;
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
	cursor: pointer;
	&:hover {
		color: #000000;
	}
`;
export {
	Wrapper,
	TitleWrapper,
	Title,
	Content,
	NoticeText,
	BasicInfoWrapper,
	WideInfoWrapper,
	Label,
	LongLabel,
	ErrorMessage,
	Slider,
	DegreeMessage,
	Form,
	NarrowInput,
	BasicInput,
	WideInput,
	BtnWrapper,
	BeforeBtn,
	NextBtn,
};
