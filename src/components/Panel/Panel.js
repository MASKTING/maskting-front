import React from 'react';
import * as S from './Panel.style';

export const PANELSIZE = {
	light: '15rem',
	small: '22rem',
	midium: '34.5rem',
	large: '',
};

const Panel = ({ size, children }) => {
	return <S.PanelWrapper size={PANELSIZE[size]}>{children}</S.PanelWrapper>;
};

export default Panel;
