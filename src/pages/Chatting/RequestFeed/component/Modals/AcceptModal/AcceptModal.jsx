import React from 'react';
import Modal from '../../../../../../components/Modal';
import SmallButton from '../../../../../../components/Button/SmallButton/SmallButton';
import { sendLike } from '../../../../../../api/sendLike';
import * as S from './AcceptModal.style';

const AcceptModal = ({ changeModalState, userInfo }) => {
	const handleRequestConfirm = async e => {
		const data = await sendLike(userInfo.nickname);
		changeModalState(e);
	};

	return (
		<Modal width="32.1" height="25.2" onCloseModal={changeModalState}>
			<S.ModalInner>
				<S.Title>
					{userInfo?.nickname}님에게
					<br />
					티켓을 사용해서 <br />
					대화를 요청하시겠어요?
				</S.Title>
				<S.Info>상대방이 대화 요청을 수락할 경우 알림을 보내드려요 잔여 티켓: 30장</S.Info>
				<S.SmallButton data-state={'acceptNotice'} onClick={handleRequestConfirm}>
					요청하기
				</S.SmallButton>
				<SmallButton color="white" onClick={changeModalState}>
					취소
				</SmallButton>
			</S.ModalInner>
		</Modal>
	);
};

export default AcceptModal;
