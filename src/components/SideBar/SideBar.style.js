import styled from 'styled-components';
import PALETTE from '../../constants/palette';

export const SideBarList = styled.nav`
	display: flex;
	position: absolute;
	left: 0;
	right: 0;
	bottom: 0;
	width: 39rem;
	height: 8.4rem;
	margin: auto;
	background-color: ${PALETTE.WHITE};
	justify-content: space-evenly;
`;
export const SideBarItem = styled.article`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	cursor: pointer;
`;
export const SideBarItemIcon = styled.div`
	color: ${props => (props.focus ? PALETTE.PINK600 : PALETTE.BLACK600)};
	font-size: 3rem;
`;
export const SideBarItemMessage = styled.div`
	font-size: 0.8rem;
	color: ${props => (props.focus ? PALETTE.PINK600 : PALETTE.BLACK600)};
	font-weight: 700;
`;
