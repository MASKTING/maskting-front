import styled from 'styled-components';
import FONTSIZE from '../../../constants/fontsize';
import PALETTE from '../../../constants/palette';

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
export const ContentTitle = styled.p``;

export const PanelInner = styled.section`
	width: 100%;
	height: 100%;
	padding: 3rem 0 1rem 0;
	display: flex;
	flex-direction: column;
	align-items: center;
`;
export const Icon = styled.p`
	font-size: 8rem;
	color: ${PALETTE.BLACK800};
	margin-bottom: 2rem;
`;
export const ContentSubTitle = styled.p`
	font-size: 1.7rem;
	font-weight: 700;
	line-height: 3rem; ;
`;
export const ContentInfo = styled.p`
	font-size: 1.3rem;
	line-height: 2rem;
`;
export const ButtonWrapper = styled.div`
	padding: 2rem;
`;
