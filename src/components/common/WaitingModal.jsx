import * as S from './WaitingModal.style.js';

import React from 'react';

const WaitingModal = ({ children, width, height, onCloseModal, isModal }) => {
	return (
		<S.Modal onClick={onCloseModal}>
			<S.ModalInner onClick={e => e.stopPropagation()} width={width} height={height}>
				{children}
			</S.ModalInner>
		</S.Modal>
	);
};

export default WaitingModal;
