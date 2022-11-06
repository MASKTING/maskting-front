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
	position: absolute;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	bottom: 0;
	z-index: 5;
`;

export const PictureItem = styled.div`
	width: 11.4rem;
	height: 11.4rem;
	box-sizing: border-box;
`;

export const PictureImage = styled.div`
	width: 11.4rem;
	height: 11.4rem;
	background-color: ${PALETTE.BLACK50};
	margin: 0;
	border: 0.5px solid ${PALETTE.BLACK200};
	box-sizing: border-box;
	display: block;
	border-collapse: collapse;

	background-image: url(${props => props.src});
	background-repeat: 1;
	background-size: 24px 24px;
	background-repeat: no-repeat;
	background-position: center center;
	background-size: cover; // 화면 꽉채움
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

export const ModalInner = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const ModalSelectLabel = styled.label`
	height: 3.1rem;
	font-size: 1.6rem;
	font-style: normal;
	font-weight: 700;
	line-height: 2.5rem;
	letter-spacing: -0.1rem;
	margin-top: 0.5rem;
	cursor: pointer;
`;

export const ModalSelectInput = styled.input`
	display: none;
`;
