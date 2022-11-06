import * as S from './HomeNotification.style';
import React from 'react';
import NotificationHeader from '../../../components/Home/NotificationHeader/NotificationHeader';
import { PanelVariable } from '../../../components/Panel/Panel';
import PictureCircle from '../../../components/PictureCircle/PictureCircle';
import SideBar from '../../../components/SideBar/SideBar';
import Wrapper from '../../../components/Wrapper';
import { WrapperInner } from '../../../components/Wrapper/Wrapper.style';

const NOTIFICATIONLIST = [
	{
		id: '1',
		title: '분당청소요정님이 대화를 나누고 싶어해요!',
		content: '여기를 눌러 프로필을 확인해보세요.',
		detail: '1시간 전',
	},
	{
		id: '2',
		title: '💥 분당청소요정님과의 대화시간이 끝났습니다!',
		content: '얼굴을 공개하실지 여부를 결정해주세요!',
		detail: '1시간 전',
	},
	{
		id: '3',
		title: '💌 @@@님! 오늘의 매칭이 도착했어요',
		content: '마스크팅 알고리즘으로 매칭된 @@@님만의 새로운 상대를 확인해보세요!',
		detail: '1시간 전',
	},
];

const HomeNotification = () => {
	return (
		<Wrapper>
			<WrapperInner>
				<NotificationHeader />
				{NOTIFICATIONLIST.map(notificationItem => (
					<PanelVariable>
						<S.PanelInnner>
							<PictureCircle size="small" />
							<S.NotificationInfo>
								<S.NotificationTitle>{notificationItem.title}</S.NotificationTitle>
								<S.NotificationContent>{notificationItem.content}</S.NotificationContent>
								<S.NotificationDetail>{notificationItem.detail}</S.NotificationDetail>
							</S.NotificationInfo>
						</S.PanelInnner>
					</PanelVariable>
				))}
				<SideBar status="home" />
			</WrapperInner>
		</Wrapper>
	);
};

export default HomeNotification;
