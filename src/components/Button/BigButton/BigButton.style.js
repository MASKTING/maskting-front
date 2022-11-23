import styled from 'styled-components';
import PALETTE from '../../../constants/palette';

export const BigButton = styled.button`
	position: absolute;
	bottom: 8.4rem;
	left: 0;
	right: 0;
	margin: auto;
	width: 34.2rem;
	height: 5.8rem;
	border: none;
	background-color: ${props => (props.color === 'gray' ? PALETTE.BLACK300 : PALETTE.PINK600)};
	border-radius: 1.6rem;
	color: ${props => (props.color === 'gray' ? PALETTE.BLACK600 : PALETTE.BLACK50)};
	cursor: pointer;
	font-weight: 700;
`;
