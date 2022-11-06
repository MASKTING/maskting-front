import React from 'react';
import MainHeader from '../../../components/MainHeader/MainHeader';
import Panel from '../../../components/Panel/Panel';
import PictureCircle from '../../../components/PictureCircle/PictureCircle';
import SideBar from '../../../components/SideBar/SideBar';
import Wrapper from '../../../components/Wrapper';

const NOTIFICATIONLIST = [
	{ id: '1', name: '분당청소요정' },
	{ id: '2', name: '분당청소요정' },
	{ id: '3', name: '분당청소요정' },
];

const HomeNotification = () => {
	return (
		<Wrapper>
			<MainHeader />
			<Panel size="light">
				<PictureCircle size="small" />
			</Panel>
			<SideBar status="home" />
		</Wrapper>
	);
};

export default HomeNotification;
