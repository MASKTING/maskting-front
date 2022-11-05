import styled from 'styled-components';
import FONTSIZE from '../../../constants/fontsize';

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
`;

export const InfoBig = styled.p`
	font-size: ${FONTSIZE.middleTitle};
	font-weight: 700;
`;

export const InfoSmall = styled.p`
	font-size: ${FONTSIZE.text};
`;

export const FeedImageList = styled.section`
	bottom: 0;
	position: absolute;
`;

export const FeedImageItem = styled.img`
	width: 11.4rem;
	height: 11.4rem;
`;

export const FeedProfile = styled.article`
	display: flex;
	align-items: center;
	padding: 2rem 3rem;
`;
export const FeedProfileInfo = styled.p`
	font-size: ${FONTSIZE.middleTitle};
	font-weight: 700;

	margin-left: 2rem;
`;

export const FeedInfo = styled.article`
	padding: 0 2rem;
`;
