import styled from 'styled-components';
import FONTSIZE from '../../../constants/fontsize';
import PALETTE from '../../../constants/palette';

export const ModalInner = styled.div`
	padding: 1rem 0;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-evenly;
`;

export const PanelInfoInner = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-evenly;
`;

export const PanelFeedInner = styled.div`
	width: 100%;
	height: 100%;
	position: relative;
	cursor: pointer;
`;

export const InfoBig = styled.p`
	font-size: ${FONTSIZE.subTitle};
	font-weight: 700;
`;

export const InfoMidium = styled.p`
	font-size: ${FONTSIZE.text};
`;

export const InfoSmall = styled.p`
	color: ${PALETTE.BLACK600};
	margin: 1rem 0;
`;

export const FeedImageList = styled.section`
	margin-top: 2rem;
`;

export const FeedImageItem = styled.img`
	width: 11.4rem;
	height: 11.4rem;
	object-fit: cover;
`;

export const FeedProfile = styled.article`
	display: flex;
	align-items: center;
	padding: 2rem 3rem;
`;
export const FeedProfileInfo = styled.p`
	font-size: ${FONTSIZE.subTitle};
	font-weight: 700;

	margin-left: 2rem;
`;

export const FeedInfo = styled.article`
	padding: 0 2rem;
`;
