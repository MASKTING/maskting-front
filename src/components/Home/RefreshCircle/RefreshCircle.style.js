import styled from 'styled-components';
import PALETTE from '../../constants/palette';

export const RefreshCircle = styled.div`
	display: flex;
	position: absolute;
	right: 1rem;
	bottom: 10.5rem;
	width: 8rem;
	height: 8rem;
	background-color: ${PALETTE.PINK600};
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
`;

export const RefreshCircleInner = styled.span`
	color: ${PALETTE.WHITE};
	font-size: 4rem;
`;
