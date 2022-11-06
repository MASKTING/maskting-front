import styled from 'styled-components';
import PALETTE from '../../constants/palette';

export const SideBarWrapper = styled.section`
	display: flex;
	position: absolute;
	left: 0;
	right: 0;
	bottom: 0;
	width: 34.2rem;
	height: 8.4rem;
	margin: auto;
	justify-content: space-evenly;
`;
export const SideBarItem = styled.article`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;
export const SideBarItemIcon = styled.div`
	color: ${props => (props.focus ? PALETTE.PINK600 : PALETTE.BLACK600)};
`;
export const SideBarItemMessage = styled.div`
	font-size: 0.8rem;
	color: ${props => (props.focus ? PALETTE.PINK600 : PALETTE.BLACK600)};
	font-weight: 700;
`;
// 34.2
