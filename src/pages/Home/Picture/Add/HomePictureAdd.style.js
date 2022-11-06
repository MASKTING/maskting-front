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

export const PictureList = styled.article`
	display: flex;
	flex-wrap: wrap;
	box-sizing: border-box;
	bottom: 0;
	position: absolute;
`;
export const PictureItem = styled.div`
	width: 11.4rem;
	height: 11.4rem;
`;

export const PictureImage = styled.img`
	width: 11.4rem;
	height: 11.4rem;
	background-color: ${PALETTE.BLACK50};
	margin: 0;
`;

export const PictureAdd = styled.span`
	width: 11.4rem;
	height: 11.4rem;
	margin: 0;
	color: ${PALETTE.BLACK600};
	font-size: 6rem;
	display: flex;
	justify-content: center;
	align-items: center;
`;
