import * as S from './Modal.style.js';

import React from 'react';

/**
 *
 * @param {int} width
 * @param {int} height
 * @param {function} onCloseModal
 */
const Modal = ({ children, width, height, onCloseModal }) => {
	return (
		<S.Modal onClick={onCloseModal}>
			<S.ModalInner onClick={e => e.stopPropagation()} width={width} height={height}>
				{children}
			</S.ModalInner>
		</S.Modal>
	);
};

export default Modal;
