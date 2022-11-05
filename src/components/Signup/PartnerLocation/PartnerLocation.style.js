import styled from 'styled-components';
import FONTSIZE from '../../../constants/fontsize';
import PALETTE from '../../../constants/palette';

const ErrorMessage = styled.p`
	color: red;
	position: absolute;
	top: 12rem;
	left: 2rem;
	font-weight: 700;
	font-size: ${FONTSIZE.infoText};
`;

const InfoMessage = styled.p`
	font-size: ${FONTSIZE.infoText};
	font-weight: 700;
	line-height: 1.5rem;
	position: absolute;
	top: 10rem;
	left: 2rem;
`;
const Red = styled.span`
	color: red;
`;

const CitySelectWrapper = styled.section`
	padding: 0 2rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 39rem;
	height: 8rem;
`;

const CitySelectInput = styled.input`
	display: none;
`;

const CitySelectLabel = styled.label`
	position: relative;
	display: block;
	width: 16rem;
	height: 4.8rem;
	border: none;
	background: ${props => (props.focused ? PALETTE.PINK600 : PALETTE.BLACK200)};
	color: ${props => (props.focused ? PALETTE.WHITE : PALETTE.BLACK)};
	border-radius: 0.8rem;
	font-size: ${FONTSIZE.text};
	font-weight: 700;
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
`;

const TownSelectWrapper = styled.section`
	width: ${props => props.wrapperWidth};
	height: ${props => props.wrapperHeight};
	padding: 4rem 2rem;
	display: flex;
	flex-wrap: wrap;
`;
const TownSelectInput = styled.input`
	display: none;
`;
const TownSelect = styled.select``;
const TownSelectOption = styled.option``;

const TownSelectLabel = styled.label`
	padding: 0 2rem;
	height: 4.8rem;
	display: block;
	border-radius: 2.4rem;
	border: none;
	background: ${props => (props.focused ? PALETTE.PINK600 : PALETTE.BLACK200)};
	color: ${props => (props.focused ? PALETTE.WHITE : PALETTE.BLACK)};
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: ${FONTSIZE.text};
	font-weight: 700;

	cursor: pointer;
	margin: 0 1rem 0 0;
`;

const TownInfoText = styled.p`
	position: absolute;
	width: 31.3rem;
	height: 12rem;
	left: 2rem;
	bottom: 8rem;
	font-size: ${FONTSIZE.infoText};
	line-height: 1.5rem;
	color: gray;
`;

export {
	ErrorMessage,
	CitySelectWrapper,
	CitySelectInput,
	CitySelectLabel,
	TownSelectWrapper,
	TownSelectInput,
	TownSelectLabel,
	TownSelect,
	TownSelectOption,
	TownInfoText,
	InfoMessage,
	Red,
};
