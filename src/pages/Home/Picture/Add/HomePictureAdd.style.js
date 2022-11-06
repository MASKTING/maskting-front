import styled from 'styled-components';
import PALETTE from '../../../../constants/palette';

export const ContentInfoInner = styled.div`
	margin: 2rem 0 3rem 0;
`;

export const PanelInner = styled.div``;
export const Profile = styled.article`
	display: flex;
	align-items: center;
	padding: 2rem 3rem;
`;
export const ProfileText = styled.article`
	padding: 0 3rem;
`;
export const PictureCircleWrapper = styled.div`
	margin-right: 2rem;
`;

export const PictureList = styled.article`
	/* position: absolute; */
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	bottom: 0;
	background-color: Red;
	z-index: 5;
`;

export const PictureItem = styled.div`
	width: 11.4rem;
	height: 11.4rem;
	/* border: 1px solid ${PALETTE.BLACK200}; */
	box-sizing: border-box;
	/* border: none; */
`;

export const PictureImage = styled.img`
	width: 11.4rem;
	height: 11.4rem;
	background-color: ${PALETTE.BLACK50};
	margin: 0;
	border: 1px solid ${PALETTE.BLACK200};
	border: none;
	box-sizing: border-box;
	display: block;
	border-collapse: collapse;
	border: 0px;
`;

export const PictureAddBox = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
`;

export const PictureAddBoxInner = styled.span`
	margin: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	color: ${PALETTE.BLACK600};
	font-size: 6rem;
`;
