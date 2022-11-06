import styled from 'styled-components';
import FONTSIZE from '../../../constants/fontsize';

export const HeaderGoBack = styled.header`
	position: absolute;
	left: 2.5rem;
	top: 7rem;
	width: 34.2rem;
	font-weight: 700;
	cursor: pointer;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: red;
`;
export const BackInco = styled.span`
	font-size: ${FONTSIZE.subTitle};
`;
export const HeaderGoBackInner = styled.section`
	position: relative;
	height: 100%;
	width: 100%;
	background-color: blue;
`;
export const HeaderGoBackInnerLeft = styled.section`
	position: absolute;
	left: 0;
	/* background-color: Red; */
`;
