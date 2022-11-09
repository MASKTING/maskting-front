import styled from 'styled-components';
import FONTSIZE from '../../../constants/fontsize';
import PALETTE from '../../../constants/palette';

export const TitleBox = styled.section``;
export const Title = styled.p`
	font-size: ${FONTSIZE.title};
	font-weight: 700;
`;
export const TitleInfo = styled.p`
	color: ${PALETTE.BLACK600};
	margin: 1.5rem 0;
`;

export const MainBox = styled.section`
	margin-top: 5rem;
	position: relative;
	height: 30rem;
`;
export const Question = styled.p`
	width: 32rem;
	font-size: ${FONTSIZE.bigText};
	font-weight: 700;
	line-height: 2rem;
`;
export const Date = styled.p`
	margin: 1.5rem 0;
	color: ${PALETTE.BLACK600};
`;
export const TextInput = styled.textarea`
	width: 35rem;
	height: 20rem;
	border-radius: 2rem;
	display: flex;
	padding: 1.5rem;
	resize: none;
	/* border: none; */
`;
export const WordCount = styled.p`
	position: absolute;
	right: 0;
	bottom: 0;
`;
export const FooterInfo = styled.p`
	position: absolute;
	bottom: 16rem;
	left: 0;
	right: 0;
	margin: auto;
	text-align: center;
`;
