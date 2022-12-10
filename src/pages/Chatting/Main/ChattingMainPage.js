import * as S from './ChattingMainPage.style';
import React from 'react';
import Wrapper, { WrapperInner } from '../../../components/Wrapper/Wrapper';
import PictureCircle from '../../../components/PictureCircle/PictureCircle';
import SideBar from '../../../components/SideBar/SideBar';
import { getChattingRoom } from '../../../api/chatting';

const CHATTINGROOMLIST = [
	{ id: 1, sender: '분당청소요정', message: '안녕하세요?' },
	{ id: 2, sender: '분당청소요정', message: '안녕하세요?' },
	{ id: 3, sender: '분당청소요정', message: '안녕하세요?' },
	{ id: 4, sender: '분당청소요정', message: '안녕하세요?' },
	{ id: 5, sender: '분당청소요정', message: '안녕하세요?' },
	{ id: 6, sender: '분당청소요정', message: '안녕하세요?' },
	{ id: 7, sender: '분당청소요정', message: '안녕하세요?' },
	{ id: 8, sender: '분당청소요정', message: '안녕하세요?' },
	{ id: 9, sender: '분당청소요정', message: '안녕하세요?' },
];

const ChattingMainPage = () => {
	const chattingRoom = getChattingRoom();
	console.log(chattingRoom);
	return (
		<Wrapper titleMessage="채팅">
			<WrapperInner>
				{CHATTINGROOMLIST.length > 0 ? (
					<>
						<S.NotifyBox>
							<S.NotifyPictureBox>
								<PictureCircle size="small"></PictureCircle>
							</S.NotifyPictureBox>
							<S.NotifyTextBox>
								<S.NotifyTitle>새로운 대화요청이 도착했습니다</S.NotifyTitle>
								<S.NotifyInfo>여기를 눌러 프로필을 확인해보세요</S.NotifyInfo>
							</S.NotifyTextBox>
						</S.NotifyBox>
						<S.ChattingRoomList>
							{CHATTINGROOMLIST.map(chattingRoom => (
								<S.ChattingRoomItem>
									<S.ChattingProfileBox>
										<PictureCircle size="small"></PictureCircle>
									</S.ChattingProfileBox>
									<S.ChattingMainBox>
										<S.ChattingSender>{chattingRoom.sender}</S.ChattingSender>
										<S.ChattingMessage>{chattingRoom.message}</S.ChattingMessage>
									</S.ChattingMainBox>
								</S.ChattingRoomItem>
							))}
						</S.ChattingRoomList>
					</>
				) : (
					<>
						<S.NotifyBox>
							<S.NotifyTextBox>
								<S.NotifyInfoIfNoRoom>
									분당청소요정님의 피드를 추천받고 대화를 나누고 싶어하시는 분들이에요
								</S.NotifyInfoIfNoRoom>
							</S.NotifyTextBox>
						</S.NotifyBox>
					</>
				)}
			</WrapperInner>
			<SideBar status="chatting" />
		</Wrapper>
	);
};

export default ChattingMainPage;
