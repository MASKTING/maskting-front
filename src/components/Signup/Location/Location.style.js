import styled from 'styled-components';
import FONTSIZE from '../../../constants/fontsize';
import PALETTE from '../../../constants/palette';

const CitySelectWrapper = styled.section`
	display: flex;
	justify-content: space-between;
	align-items: center;
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
	font-size: ${FONTSIZE.Text};
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
`;

const TownSelectWrapper = styled.section``;
const TownButton = styled.button``;

export { CitySelectWrapper, TownSelectWrapper, TownButton, CitySelectInput, CitySelectLabel };
