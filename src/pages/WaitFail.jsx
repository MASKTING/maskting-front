import React from 'react';
import Wrapper from '../components/Wrapper';
import { WrapperInner } from '../components/Wrapper/Wrapper.style';
import styled from 'styled-components';
import { Red } from '../components/Signup/PartnerMoreInfo/PartnerMoreInfo.style';
import { BigButton } from '../components/Button/BigButton/BigButton.style';
import SideBar from '../components/SideBar/SideBar';

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
	margin-top: 3rem;
`;
const Line = styled.li``;

const WaitFail = () => {
	return (
		<Wrapper>
			<WrapperInner>
				<Title>
					분당청소요정님
					<br />
					다시 한번 확인해주세요
				</Title>

				<Content>
					<InfoTitle>
						<p>
							다음과 같은 사유로 가입 승인이 반려되었어요
							<Red>
								<Line>선정적이거나 부적절한 내용을 포함한 한줄 자기소개</Line>
							</Red>
						</p>
					</InfoTitle>
				</Content>
				<BigButton>수정하러 가기</BigButton>
			</WrapperInner>
			<SideBar status="home" />
		</Wrapper>
	);
};

export default WaitFail;
