import styled from 'styled-components';
import FONTSIZE from '../../../../constants/fontsize';

export const HeaderGoBackInnerRight = styled.div`
	width: 50px;
	height: 50px;
	position: absolute;
	right: 0;
	top: 0;
`;

export const HeadeGoackRightText = styled.p`
	cursor: pointer;
	font-weight: 700;
	font-size: ${FONTSIZE.infoText};
`;

export const PictureResizeBox = styled.img`
	position: absolute;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
	width: 31rem;
	height: 24rem;
	margin: auto;
`;
