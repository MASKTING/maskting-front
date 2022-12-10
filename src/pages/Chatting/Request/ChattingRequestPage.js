import * as S from './ChattingRequestPage.style';
import React from 'react';
import Wrapper from '../../../components/Wrapper';
import { WrapperInner } from '../../../components/Wrapper/Wrapper';
import SideBar from '../../../components/SideBar/SideBar';

const ChattingRequestPage = () => {
	return (
		<Wrapper titleMessage="채팅">
			<WrapperInner>
				<S.NotifyBox>
					<S.NotifyTextBox>
						<S.NotifyInfoIfNoRoom>
							분당청소요정님의 피드를 추천받고 대화를 나누고 싶어하시는 분들이에요
						</S.NotifyInfoIfNoRoom>
					</S.NotifyTextBox>
				</S.NotifyBox>
			</WrapperInner>
			<SideBar status="chatting" />
		</Wrapper>
	);
};

export default ChattingRequestPage;
