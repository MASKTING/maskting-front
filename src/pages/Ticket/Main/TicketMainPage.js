import * as S from './TicketMainPage.style';
import React from 'react';
import Wrapper from '../../../components/Wrapper/Wrapper';
import SideBar from '../../../components/SideBar/SideBar';
import MainHeader from '../../../components/MainHeader/MainHeader';
import Panel from '../../../components/Panel/Panel';

const TicketMainPage = () => {
	return (
		<Wrapper>
			<MainHeader />
			<S.WrapperInner>
				<Panel size="midium"></Panel>
				<Panel size="midium"></Panel>
				<Panel size="midium"></Panel>
				<Panel size="midium"></Panel>
				<Panel size="midium"></Panel>
			</S.WrapperInner>
			<SideBar />
		</Wrapper>
	);
};

export default TicketMainPage;
