import React, { useEffect, useState } from 'react';
import Wrapper from '../components/Wrapper';
import { WrapperInner } from '../components/Wrapper/Wrapper.style';
import styled from 'styled-components';
import { Red } from '../components/Signup/PartnerMoreInfo/PartnerMoreInfo.style';
import { BigButton } from '../components/Button/BigButton/BigButton.style';
import SideBar from '../components/SideBar/SideBar';
import api from '../api/api';

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
const List = styled.div`
	line-height: 2rem;
`;
const Line1 = styled.div`
	margin-left: 1rem;
`;
const Line2 = styled.div`
	margin-left: 3rem;
`;

const WaitFail = () => {
	const [rejectReason, setRejectReason] = useState('');
	const getRejection = async () => {
		try {
			const res = await api('/api/user/rejection');
			if (res.status === 200) {
				if (res.data.reason) {
					setRejectReason(res.data.reason);
				}
			}
		} catch (err) {
			console.log(err);
		}
	};
	useEffect(() => {
		getRejection();
	}, []);
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
						{rejectReason === '부적절한 프로필' && (
							<List>
								<div>다음과 같은 사유로 가입 승인이 반려되었어요 </div>
								<Line1>
									<Red>* 기준에 적합하지 않는 프로필 사진</Red>
								</Line1>
								<Line2>
									* 이렇게 등록해주세요: 얼굴이 선명하게 보이는 사진, 얼굴이 정면으로 나온 사진
								</Line2>
								<Line2>
									* 이런 사진은 안돼요: 단체사진이나 친구가 같이 나온 사진, 얼굴 일부가 가려진
									사진(선글라스 등)
								</Line2>
							</List>
						)}
						{rejectReason === '사용할 수 없는 닉네임' && (
							<List>
								<div>다음과 같은 사유로 가입 승인이 반려되었어요 </div>
								<Line1>
									<Red>* 기준에 적합하지 않는 프로필 사진</Red>
								</Line1>
								<Line2>
									* 이렇게 등록해주세요: 얼굴이 선명하게 보이는 사진, 얼굴이 정면으로 나온 사진
								</Line2>
								<Line2>
									* 이런 사진은 안돼요: 단체사진이나 친구가 같이 나온 사진, 얼굴 일부가 가려진
									사진(선글라스 등)
								</Line2>
							</List>
						)}
						{rejectReason === '사용할 수 없는 자기소개' && (
							<List>
								<div>다음과 같은 사유로 가입 승인이 반려되었어요 </div>
								<Line1>
									<Red>* 욕설이나 비하, 비속어를 포함한 한줄 자기소개</Red>
								</Line1>
								<Line2>* 욕설이나 비하, 비속어 및 선정적인 표현은 안돼요</Line2>
								<Line2>* 상대방도 기분이 좋아지는 닉네임을 작성해주세요!</Line2>
							</List>
						)}
					</InfoTitle>
				</Content>
				<BigButton>수정하러 가기</BigButton>
			</WrapperInner>
			<SideBar status="home" />
		</Wrapper>
	);
};

export default WaitFail;
