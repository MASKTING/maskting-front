import styled from 'styled-components';
import PALETTE from '../../constants/palette';

export const Panel = styled.section`
	position: relative;
	width: 34.2rem;
	height: ${props => props.size};
	background-color: ${PALETTE.BLACK200};
	border-radius: ${props => (props.size === '34.5rem' ? '2.4rem 2.4rem 0 0' : '2.4rem')};
	left: 0;
	right: 0;
	margin: auto;
	margin-bottom: 1.6rem;
	overflow: hidden;
`;

export const PanelVariable = styled.section`
	border-radius: 2.4rem;
	width: 34.2rem;
	padding: 2rem 2.5rem;
	background-color: ${PALETTE.BLACK200};
	left: 0;
	right: 0;
	margin: auto;
	margin-bottom: 1.6rem;
	overflow: hidden;
`;
