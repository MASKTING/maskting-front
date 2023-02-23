import React from 'react';
import Modal from '../../../../../../components/Modal';
import SmallButton from '../../../../../../components/Button/SmallButton/SmallButton';
import * as S from './AcceptNoticeModal.style';
import { useNavigate } from 'react-router-dom';

const AcceptNoticeModal = ({ userInfo }) => {
	const navigate = useNavigate();

	const handleDeclineNoticeConfirm = async () => {
		navigate('/chatting');
	};

	return (
		<Modal width="32.1" height="19.2" onCloseModal={handleDeclineNoticeConfirm}>
			<S.ModalInner>
				<S.Title>
					{userInfo?.nickname}님의
					<br />
					대화 요청을 승낙했어요!
				</S.Title>
				<S.Info>
					{userInfo?.nickname}님과 좋은 시간 보내길 바래요!<br></br>
					확인을 누르면 채팅 리스트로 이동합니다
				</S.Info>
				<SmallButton onClick={handleDeclineNoticeConfirm}>확인하기</SmallButton>
			</S.ModalInner>
		</Modal>
	);
};

export default AcceptNoticeModal;
