import React from 'react';
import Modal from '../../../../../../components/Modal';
import SmallButton from '../../../../../../components/Button/SmallButton/SmallButton';
import * as S from './DeclineNoticeModal.style';

const DeclineNoticeModal = ({ userInfo, back }) => {
	const handleDeclineNoticeConfirm = async () => {
		back();
	};

	return (
		<Modal width="32.1" height="19.2" onCloseModal={handleDeclineNoticeConfirm}>
			<S.ModalInner>
				<S.Title>
					{userInfo?.nickname}님의
					<br />
					대화 요청을 거절했어요
				</S.Title>
				<S.Info>
					{userInfo?.nickname}님은 더 이상 파트너로 업데이트 되지 않아요!<br></br>
					확인을 누르면 채팅 요청 리스트로 이동합니다
				</S.Info>
				<SmallButton onClick={handleDeclineNoticeConfirm}>확인하기</SmallButton>
			</S.ModalInner>
		</Modal>
	);
};

export default DeclineNoticeModal;
