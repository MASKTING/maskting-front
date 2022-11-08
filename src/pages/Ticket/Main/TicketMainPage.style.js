import styled from 'styled-components';
import FONTSIZE from '../../../constants/fontsize';

export const WrapperInner = styled.div`
	width: 39rem;
	height: 69.3rem;
	left: 0rem;
	top: 12rem;
	overflow-y: scroll;
	::-webkit-scrollbar {
		display: none;
	}
`;

export const Title = styled.p`
	font-size: ${FONTSIZE.title};
	font-weight: 700;
	padding: 2rem;
`;
