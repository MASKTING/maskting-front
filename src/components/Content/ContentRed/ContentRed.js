import * as S from './ContentRed.style';

import React from 'react';

const ContentRed = props => {
	return <S.ContentRed onClick={props.onClick}>{props.children}</S.ContentRed>;
};

export default ContentRed;
