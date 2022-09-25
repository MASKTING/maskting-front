import styled from 'styled-components';
const BtnWrapper = styled.div`
	position: fixed;
	display: flex;
	justify-content: space-between;
	padding: 0 2rem;
	position: absolute;
	width: 39rem;
	height: 8.8rem;
	top: 71rem;
`;

const PrevBtn = styled.button`
	width: 9.5rem;
	height: 5.8rem;
	left: 2.4rem;
	top: 0rem;
	background-color: white;
	font-family: 'Inter';
	font-style: normal;
	font-weight: 700;
	font-size: 1.7rem;
	line-height: 3.6rem;
	text-align: center;
	letter-spacing: 0.1rem;
	color: #212121;
	border: none;
	border-radius: 1.6rem;
	&:hover {
		color: rgba(244, 94, 95, 1);
	}
	cursor: pointer;
`;
const NextBtn = styled.button`
	width: 9.5rem;
	height: 5.8rem;
	left: 2.4rem;
	top: 0rem;
	background-color: rgba(244, 94, 95, 1);
	font-family: 'Inter';
	font-style: normal;
	font-weight: 700;
	font-size: 1.7rem;
	line-height: 3.6rem;
	text-align: center;
	letter-spacing: 0.1rem;
	color: rgba(250, 250, 250, 1);
	border: none;
	border-radius: 1.6rem;
	&:hover {
		color: #000000;
	}
	cursor: pointer;
`;

export { BtnWrapper, PrevBtn, NextBtn };
