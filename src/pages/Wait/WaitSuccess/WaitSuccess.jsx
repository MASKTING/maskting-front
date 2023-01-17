import React from 'react';
import Wrapper from '../../../components/Wrapper';
import { WrapperInner } from '../../../components/Wrapper/Wrapper.style';
import styled from 'styled-components';
import { Red } from '../../../components/Signup/PartnerMoreInfo/PartnerMoreInfo.style';
import SideBar from '../../../components/SideBar/SideBar';
import BigButton from '../../../components/Button/BigButton/BigButton';

const Title = styled.section`
	font-size: 2.6rem;
	color: #212121;
	font-weight: 700;
	line-height: 1.4;
`;
const Content = styled.div`
	font-size: 1.3rem;
	line-height: 1.3;
`;
const InfoTitle = styled.ul`
	margin-top: 7rem;
`;
const Line = styled.li``;

const WaitSuccess = () => {
	return (
		<Wrapper>
			<WrapperInner>
				<Title>분당청소요정님, 환영합니다!</Title>

				<Content>
					<InfoTitle>
						<p>분당청소요정님의 가입 승인이 완료되었어요!</p>
						<br />
						<p>개인정보 관련 사항 & 서비스 사용방법 안내</p>
					</InfoTitle>
				</Content>
				<BigButton>확인했어요</BigButton>
			</WrapperInner>
			<SideBar status="home" />
		</Wrapper>
	);
};

export default WaitSuccess;
