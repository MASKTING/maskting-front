import React from 'react';
import Modal from '../../../../../../components/Modal';
import SmallButton from '../../../../../../components/Button/SmallButton/SmallButton';
import * as S from './DeclineModal.style';
import { postRejectLike } from '../../../../../../api/postRejectLike';

const DeclineModal = ({ changeModalState, userInfo }) => {
	const handleDeclineConfirm = async e => {
		try {
			const response = await postRejectLike(userInfo.nickname);
			if (response.status === 200) changeModalState(e);
		} catch (e) {
			alert(e);
		}
	};

	return (
		<Modal width="32.1" height="23.2" onCloseModal={changeModalState}>
			<S.ModalInner>
				<S.Title>
					{userInfo?.nickname}님과의
					<br />
					대화를 정말 거절하시겠어요?
				</S.Title>
				<S.Info>
					상대방의 대화 요청을 거절할 경우 <br></br>더 이상 추천 파트너로 업데이트 되지 않아요!
				</S.Info>
				<S.SmallButton data-state={'declineNotice'} onClick={handleDeclineConfirm}>
					거절하기
				</S.SmallButton>
				<SmallButton color="white" onClick={changeModalState}>
					취소
				</SmallButton>
			</S.ModalInner>
		</Modal>
	);
};

export default DeclineModal;
