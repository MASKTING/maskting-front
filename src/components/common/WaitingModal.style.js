import styled, { keyframes } from 'styled-components';

const biggerEffect = keyframes`
	0% {
		transform: scale(0);
	}
	100% {
		transform: scale(1);
	}
`;

const Modal = styled.div`
	position: fixed;
	width: 39rem;
	height: 84.4rem;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.8);
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 10;
`;

const ModalInner = styled.div`
	position: absolute;
	width: ${props => `${props.width}rem`};
	height: ${props => `${props.height}rem`};
	background-color: #fff;
	left: 0;
	right: 0;
	top: 28rem;
	margin: auto;
	border-radius: 1.6rem;
	z-index: 5;
	display: flex;
	justify-content: center;
	animation: ${biggerEffect} 0.2s;
	font-size: 1.7rem;
	padding-top: 2rem;
	padding-bottom: 2rem;
	width: 90%;
	line-height: 2.8rem;
	color: #212121;
`;

export { Modal, ModalInner };
