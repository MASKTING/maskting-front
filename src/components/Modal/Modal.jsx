import * as S from './Modal.style.js';

import React from 'react';

const Modal = props => {
	return (
		<S.Wrapper onClick={props.onCloseModal}>
			<S.Modal onClick={e => e.stopPropagation()}>{props.children}</S.Modal>
		</S.Wrapper>
	);
};

export default Modal;
