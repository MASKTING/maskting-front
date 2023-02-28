import * as S from './WaitingModal.style.js';

import React from 'react';

const WaitingModal = ({ children, width, height, onCloseModal }) => {
	return (
		<S.Modal onClick={onCloseModal}>
			<S.ModalInner onClick={e => e.stopPropagation()} width={width} height={height}>
				현재 개발 중인 페이지입니다.
				<br />
				정식 출시 때 만나요! 🖐
			</S.ModalInner>
		</S.Modal>
	);
};

export default WaitingModal;
