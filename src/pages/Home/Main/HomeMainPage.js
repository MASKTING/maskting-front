import React from 'react';
import Panel from '../../../components/Panel/Panel';
import SideBar from '../../../components/SideBar/SideBar';
import Wrapper from '../../../components/Wrapper/Wrapper';

const HomeMainPage = () => {
	return (
		<Wrapper>
			<Panel panelSize="small">a</Panel>
			<Panel panelSize="midium"></Panel>
			<Panel panelSize="midium"></Panel>
			<SideBar status="home" />
		</Wrapper>
	);
};

export default HomeMainPage;
