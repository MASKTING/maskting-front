import styled from 'styled-components';

const Title = styled.h1`
	top: 29.9rem;
	left: 2.4rem;
	position: absolute;
	width: 30rem;
	height: 8rem;
	color: #212121;
	font-family: 'Pretendard';
	font-style: normal;
	font-weight: 700;
	font-size: 2.6rem;
	line-height: 4rem;
	letter-spacing: 0.1rem;
`;
const Logo = styled.div`
	position: absolute;
	width: 10rem;
	height: 10rem;
	left: 2.4rem;
	top: 12.7rem;
	background: #f45e5f;
`;
const LoginWrapper = styled.div`
	position: absolute;
	text-align: center;
	width: 39rem;
	height: 19rem;
	left: 0rem;
	top: 51.9rem;
`;
const LoginImg = styled.img`
	height: 5rem;
`;
const LoginBtn = styled.button`
	position: relative;
	border: none;
	background-color: inherit;
	margin-bottom: 2rem;
`;

export { Title, Logo, LoginWrapper, LoginBtn, LoginImg };
