import * as S from './TicketAnswer.style';
import React, { useRef, useState } from 'react';

import Wrapper, { WrapperInner } from '../../../components/Wrapper/Wrapper';
import SideBar from '../../../components/SideBar/SideBar';
import MainHeader from '../../../components/Home/MainHeader/MainHeader';
import HeaderGoBackLeft from '../../../components/Header/HeaderGoBackLeft/HeaderGoBackLeft';
import BigButton from '../../../components/Button/BigButton/BigButton';
import ContentRed from '../../../components/Content/ContentRed/ContentRed';

const TicketAnswer = () => {
	const [inputState, setInputState] = useState('');
	const handleSubmitButton = e => {};
	const handleInput = e => {
		setInputState(e.target.value);
	};
	return (
		<Wrapper>
			<MainHeader />
			<HeaderGoBackLeft />
			<WrapperInner>
				<S.TitleBox>
					<S.Title>오늘의 질문이 도착했어요</S.Title>
					<S.TitleInfo>매일 찾아오는 질문에 답변하고 공짜 티켓 받아가세요!</S.TitleInfo>
				</S.TitleBox>
				<S.MainBox>
					<S.Question>
						분당청소요정님에게 가장 의미 있는 물건과 그에 담겨있는 뜻깊은 이유는 무엇인가요?
					</S.Question>
					<S.Date>2022년 10월 1일</S.Date>
					<S.TextInput type="text" onChange={handleInput} />
					<S.WordCount>
						{inputState.length > 100 ? (
							<ContentRed>{inputState.length}/100</ContentRed>
						) : (
							<>{inputState.length}/100</>
						)}
					</S.WordCount>
				</S.MainBox>
				<S.FooterInfo>작성한 답변은 피드에서 확인하고 관리할 수 있어요</S.FooterInfo>
			</WrapperInner>
			<BigButton onClick={handleSubmitButton}>답변 제출하기</BigButton>
			<SideBar status="ticket" />
		</Wrapper>
	);
};

export default TicketAnswer;
