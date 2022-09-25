import styled from 'styled-components';
import FONTSIZE from '../../constants/fontsize';

const Wrapper = styled.div`
	width: 39rem;
	height: 77.7rem;
	border: black 1px solid; // 임시용
	padding: 0 2rem;
`;
const TitleWrapper = styled.div`
	top: 0rem;
	width: 39rem;
	height: 12.2rem;
	display: flex;
	align-items: center;
`;

const Title = styled.h1`
	color: #212121;
	font-family: 'Pretendard';
	font-style: normal;
	font-weight: 700;
	font-size: ${FONTSIZE.Title};

	letter-spacing: 0.1rem;
`;
export { Wrapper, TitleWrapper, Title };
