import styled from 'styled-components';
import PALETTE from '../../../constants/palette';

export const SmallButton = styled.button`
	width: 10.6rem;
	height: 4rem;
	border-radius: 0.8rem;
	background-color: ${props => (props.color === 'white' ? PALETTE.WHITE : PALETTE.PINK600)};
	color: ${props => (props.color === 'white' ? PALETTE.BLACK : PALETTE.BLACK50)};
	border: none;
	cursor: pointer;
`;
