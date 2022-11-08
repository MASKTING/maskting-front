import * as S from './TicketMainPage.style';
import React from 'react';
import Wrapper, { WrapperInner } from '../../../components/Wrapper/Wrapper';
import SideBar from '../../../components/SideBar/SideBar';
import MainHeader from '../../../components/Home/MainHeader/MainHeader';
import Panel from '../../../components/Panel/Panel';

const TicketMainPage = () => {
	return (
		<Wrapper>
			<MainHeader />
			<WrapperInner>
				<S.Title>티켓이 부족하세요?</S.Title>
				<Panel sizeNum="30"></Panel>
				<Panel sizeNum="24.1"></Panel>
			</WrapperInner>
			<SideBar status="ticket" />
		</Wrapper>
	);
};

export default TicketMainPage;
