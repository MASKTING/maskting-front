import * as S from './BigButton.style';

import React from 'react';

const BigButton = props => {
	return (
		<S.BigButton type="button" onClick={props.onClick} color={props.color}>
			{props.children}
		</S.BigButton>
	);
};

export default BigButton;
