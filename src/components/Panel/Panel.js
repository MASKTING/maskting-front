import React from 'react';
import * as S from './Panel.style';
import { PANELSIZE } from './panelSize';

const Panel = ({ panelSize, children }) => {
	return <S.PanelWrapper panelSize={PANELSIZE[panelSize]}>{children}</S.PanelWrapper>;
};

export default Panel;
