import React from 'react';
import * as S from './Panel.style';

const Panel = ({ height, children }) => {
	return <S.PanelWrapper height={height}></S.PanelWrapper>;
};

export default Panel;
