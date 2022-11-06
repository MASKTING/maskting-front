import styled from 'styled-components';

export const PictureCircle = styled.img`
	width: ${props => props.size};
	height: ${props => props.size};
	border-radius: 50%;
	background-color: yellow;
	${props => props.css};
`;
