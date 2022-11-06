import React from 'react';
import * as S from './Panel.style';

export const PANELSIZE = {
	light: '15rem',
	small: '22rem',
	midium: '34.5rem',
	large: '',
};

export const PanelVariable = props => {
	return <S.PanelVariable>{props.children}</S.PanelVariable>;
};

const Panel = ({ size, children }) => {
	return <S.Panel size={PANELSIZE[size]}>{children}</S.Panel>;
};

export default Panel;
