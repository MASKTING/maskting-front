import React from 'react';
import styled from 'styled-components';

import { BigButton } from '../../components/Button/BigButton/BigButton.style';
import SideBar from '../../components/SideBar/SideBar';
import { Red } from '../../components/Signup/PartnerMoreInfo/PartnerMoreInfo.style';
import { WrapperInner } from '../../components/Wrapper/Wrapper.style';
import Wrapper from '../../components/Wrapper';

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

const Wait = () => {
	return (
		<Wrapper>
			<WrapperInner>
				<Title>
					분당청소요정님!
					<br />
					승인 신청이 완료됐어요
				</Title>

				<Content>
					<InfoTitle>
						<p>
							승인 완료는 <Red>24시간 이내</Red> 완료되며,
						</p>
						<p>금요일 5시 이후 신청 시 승인이 늦어질 수 있어요</p>
					</InfoTitle>
					<br />
					다음과 같은 경우 승인이 거부될 수 있습니다
					<Line>선정적이거나 부적절한 내용을 포함한 프로필</Line>
					<Line>사용할 수 없는 닉네임 </Line>
					<Line>선정적이거나 부적절한 내용을 포함한 한줄 자기소개</Line>
				</Content>
				<BigButton color="gray">HH시간 안에 승인이 완료돼</BigButton>
			</WrapperInner>
			<SideBar status="home" />
		</Wrapper>
	);
};

export default Wait;
