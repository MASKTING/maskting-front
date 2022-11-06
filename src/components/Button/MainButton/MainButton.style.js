import styled from 'styled-components';
import PALETTE from '../../../constants/palette';

export const MainButton = styled.button`
	width: ${props => props.size[0]};
	height: ${props => props.size[1]};
	border-radius: ${props => props.size[2]};
	background-color: ${props => (props.color === 'white' ? PALETTE.WHITE : PALETTE.PINK600)};
	color: ${props => (props.color === 'white' ? PALETTE.BLACK : PALETTE.BLACK50)};
	border: none;
	cursor: pointer;
	position: ${props => props.size[3] && 'absolute'};
	bottom: ${props => props.size[3] && '8.4rem'};
`;
