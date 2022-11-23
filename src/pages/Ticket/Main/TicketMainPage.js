import * as S from './TicketMainPage.style';
import React from 'react';
import Wrapper, { WrapperInner } from '../../../components/Wrapper/Wrapper';
import SideBar from '../../../components/SideBar/SideBar';
import MainHeader from '../../../components/Home/MainHeader/MainHeader';
import Panel from '../../../components/Panel/Panel';
import SmallButton from '../../../components/Button/SmallButton/SmallButton';
import { useNavigate } from 'react-router-dom';
import ContentTitle from '../../../components/Content/Title/ContentTitle';

const TicketMainPage = () => {
	const navigate = useNavigate();
	const handleAnswerButton = () => {
		navigate('answer');
	};
	const handleSuggestButton = () => {
		navigate('suggest');
	};
	return (
		<Wrapper>
			<MainHeader />
			<WrapperInner>
				<ContentTitle>티켓이 부족하세요?</ContentTitle>
				<Panel sizeNum="30">
					<S.PanelInner>
						<S.Icon className="material-icons">mark_email_read</S.Icon>
						<S.ContentSubTitle>오늘의 질문 도착!</S.ContentSubTitle>
						<S.ContentInfo>
							매일매일 찾아오는 질문에 답변하고
							<br /> 공짜 티켓 받아가세요
						</S.ContentInfo>
						<S.ButtonWrapper>
							<SmallButton onClick={handleAnswerButton}>답변하러 가기</SmallButton>
						</S.ButtonWrapper>
					</S.PanelInner>
				</Panel>
				<Panel sizeNum="24.1">
					<S.PanelInner>
						<S.Icon className="material-icons">mark_chat_read</S.Icon>
						<S.ContentSubTitle>질문 제안하고 공짜 티켓받기</S.ContentSubTitle>
						<S.ButtonWrapper>
							<SmallButton onClick={handleSuggestButton}>제안하러 가기</SmallButton>
						</S.ButtonWrapper>
					</S.PanelInner>
				</Panel>
			</WrapperInner>
			<SideBar status="ticket" />
		</Wrapper>
	);
};

export default TicketMainPage;
