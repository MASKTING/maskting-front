import styled from 'styled-components';
import PALETTE from '../../constants/palette';

export const PanelWrapper = styled.section`
	border-radius: 2.4rem;
	width: 34.2rem;
	height: ${props => props.size};
	background-color: ${PALETTE.BLACK200};
	left: 0;
	right: 0;
	margin: auto;
	margin-bottom: 1.6rem;
	overflow: hidden;
`;
