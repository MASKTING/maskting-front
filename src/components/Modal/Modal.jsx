import * as S from './Modal.style.js';

import React from 'react';

const Modal = ({ children, width, height, onCloseModal, isModal }) => {
	return (
		<S.Modal onClick={onCloseModal}>
			<S.ModalInner onClick={e => e.stopPropagation()} width={width} height={height}>
				{children}
			</S.ModalInner>
		</S.Modal>
	);
};

export default Modal;
