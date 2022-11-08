import * as S from './HeaderGoBackLeft.style';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const HeaderGoBackLeft = props => {
	const navigate = useNavigate();
	const navigateBack = () => {
		if (props.onClick) {
			props.onClick();
		} else {
			navigate(-1);
		}
	};
	return (
		<S.HeaderGoBackLeft onClick={navigateBack}>
			<S.BackInco className="material-icons">arrow_back_ios</S.BackInco>
			{props.children}
		</S.HeaderGoBackLeft>
	);
};

export default HeaderGoBackLeft;
