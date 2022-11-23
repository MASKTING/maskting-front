import * as S from './SmallButton.style';

import React from 'react';

const SmallButton = props => {
	return (
		<S.SmallButton type="button" color={props.color} onClick={props.onClick}>
			{props.children}
		</S.SmallButton>
	);
};

export default SmallButton;
