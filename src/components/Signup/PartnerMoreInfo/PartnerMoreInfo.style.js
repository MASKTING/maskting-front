import styled from 'styled-components';

import FONTSIZE from '../../../constants/fontsize';
import PALETTE from '../../../constants/palette';

const InfoMessage = styled.p`
	font-size: ${FONTSIZE.infoText};
	font-weight: 700;
	line-height: 1.5rem;
	position: absolute;
	top: 9rem;
	left: 2rem;
`;
const Red = styled.span`
	color: ${PALETTE.PINK600};
`;
const Content = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	top: 13rem;
	left: 0rem;
	position: absolute;
	width: 39rem;
	height: 59.3rem;
	gap: 3rem;
	padding: 2rem 0rem;
	overflow-y: scroll;
	overflow-x: hidden;
	::-webkit-scrollbar {
		display: none;
	}
`;
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
	margin-bottom: 0.5rem;
`;
const RadioLabel = styled.label`
	position: relative;
	width: 7.9rem;
	height: 4.8rem;
	cursor: pointer;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 7.9rem;
	height: 4.8rem;
`;

export const RadioMediumLabel = styled.label`
	position: relative;
	height: 4.8rem;
	cursor: pointer;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 13rem;
	height: 4.8rem;
`;
const NarrowButton = styled.button`
	text-align: center;
	top: 1.2rem;
	left: 2.4rem;
	position: relative;
	margin-right: 1.2rem;
	margin-bottom: 1.8rem;
	background: ${props => (props.focused ? PALETTE.PINK600 : PALETTE.BLACK200)};
	color: ${props => (props.focused ? PALETTE.WHITE : PALETTE.BLACK)};
	border: none;
	border-radius: 0.8rem;
	font-size: ${FONTSIZE.text};
`;
export const RadioWideLabel = styled.label`
	position: relative;
	width: 34.2rem;
	height: 4.8rem;
	cursor: pointer;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const NarrowInput = styled.input`
	display: none;
`;
const WideButton = styled.button`
	top: 1.8rem;
	left: 2.4rem;
	position: relative;
	width: 34.2rem;
	height: 4.8rem;
	margin-right: 2.2rem;
	margin-bottom: 1.8rem;
	background: ${props => (props.focused ? PALETTE.PINK600 : PALETTE.BLACK200)};
	color: ${props => (props.focused ? PALETTE.WHITE : PALETTE.BLACK)};
	border: none;
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
const SliderWrapper = styled.div`
	position: relative;
	width: 34.1rem;
	height: 2rem;
	margin-bottom: 3.1rem;
`;
const Slider = styled.input`
	top: 2.6rem;
	left: 2.4rem;
	position: absolute;
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
		pointer-events: auto;
		cursor: pointer;
	}
`;

const SliderLeft = styled.input`
	top: 2.6rem;
	left: 2.4rem;
	position: absolute;
	width: 34.1rem;
	height: 2rem;
	border-radius: 0.8rem;
	background: #eeeeee;
	outline: none;
	visible: hidden;
	-webkit-appearance: none;
	&::-webkit-slider-thumb {
		appearance: none;
		width: 4.8rem;
		height: 4.8rem;
		border-radius: 100%;
		background: ${({ degree }) => (degree >= 0 ? `#f45e5f` : `#e0e0e0`)};
		pointer-events: auto;
		cursor: pointer;
	}
`;
const SliderRight = styled.input`
	top: 2.6rem;
	left: 2.4rem;
	position: absolute;
	width: 34.1rem;
	visible: hidden;
	height: 2rem;
	margin-bottom: 3.1rem;
	border-radius: 0.8rem;
	background: #eeeeee;
	outline: none;
	-webkit-appearance: none;

	${({ degreeLeft, degreeRight }) =>
		`background: linear-gradient(to right, #e0e0e0 30%, #f45e5f 60%, #e0e0e0)`};
	background: linear(to right, #e0e0e0 40%, red 50%, #e0e0e0 90%);
	&::-webkit-slider-thumb {
		// appearance: none;
		width: 4.8rem;
		height: 4.8rem;
		border-radius: 10%;
		pointer-events: auto;
		cursor: pointer;
	}
`;
const ErrorMessage = styled.span`
	display: block;
	top: 0rem;
	left: 2.4rem;
	position: relative;
	width: 25rem;
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

const CustomSlide = styled.div`
	top: 2.6rem;
	left: 2.6rem;
	position: absolute;
	width: 34.1rem;
	height: 2rem;
	border-radius: 10px;
	background-color: #dddddd;
`;

const CustomSlideInner = styled.div`
	top: 2.6rem;
	position: absolute;
	height: 2rem;
	left: ${props => props.rangeMinPercent + 8}%;
	right: ${props => props.rangeMaxPercent - 8}%;
	border-radius: 10px;
	background: #f45e5f;
`;

const CustomRangeWrap = styled.div`
	position: relative;
`;

const CustomRangeMin = styled.input`
	top: 1.3rem;
	left: 2.4rem;
	position: absolute;
	width: 100%;
	-webkit-appearance: none;
	background: none;
	z-index: 1;
	pointer-events: none;
	&::-webkit-slider-thumb {
		appearance: none;
		width: 4.8rem;
		height: 4.8rem;
		border-radius: 100%;
		background: #f45e5f;
		pointer-events: auto;
		cursor: pointer;
`;

const CustomRangeMax = styled(CustomRangeMin)``;

export {
	ErrorMessage,
	InfoMessage,
	Red,
	Content,
	BasicInfoWrapper,
	WideInfoWrapper,
	Label,
	LongLabel,
	NarrowButton,
	RadioLabel,
	SliderWrapper,
	Slider,
	SliderLeft,
	SliderRight,
	DegreeMessage,
	NarrowInput,
	BasicInput,
	WideButton,
	BtnWrapper,
	CustomSlide,
	CustomSlideInner,
	CustomRangeMin,
	CustomRangeMax,
	CustomRangeWrap,
};
