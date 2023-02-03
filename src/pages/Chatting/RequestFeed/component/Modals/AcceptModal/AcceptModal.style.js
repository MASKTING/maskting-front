import styled, { keyframes } from 'styled-components';
import PALETTE from '../../../../../../constants/palette';

export const ModalInner = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 90%;
	padding: 2rem 0;
`;
export const Title = styled.div`
	font-size: 1.7rem;
	font-weight: bold;
	display: flex;
	justify-content: center;
	text-align: center;
	line-height: 2.6rem;
`;
export const Info = styled.div`
	color: #9e9e9e;
	font-size: 1.1rem;
	margin: 1.5rem 1rem;
	line-height: 1.8rem;
	text-align: center;
`;

export const SmallButton = styled.div`
	width: 10.6rem;
	height: 4rem;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 14px;

	border-radius: 0.8rem;
	background-color: ${props => (props.color === 'white' ? PALETTE.WHITE : PALETTE.PINK600)};
	color: ${props => (props.color === 'white' ? PALETTE.BLACK : PALETTE.BLACK50)};
	border: none;
	cursor: pointer;
`;
