import styled, { keyframes } from 'styled-components';

const MainBoxPhoto = styled.section`
	width: 100%;
	height: 100px;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
`;

const PhotoItem = styled.img`
	margin-bottom: 0.4rem;
	width: 11.4rem;
	height: 11.4rem;
	object-fit: cover;
	cursor: pointer;
`;

export { MainBoxPhoto, PhotoItem };
