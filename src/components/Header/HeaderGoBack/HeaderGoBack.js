import * as S from './HeaderGoBack.style';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const HeaderGoBack = props => {
	const navigate = useNavigate();
	const navigateBack = () => {
		navigate(-1);
	};
	return (
		<S.HeaderGoBack onClick={navigateBack}>
			<S.HeaderGoBackInner>
				<S.HeaderGoBackInnerLeft>
					<S.BackInco className="material-icons">arrow_back_ios</S.BackInco>
					{props.children}
				</S.HeaderGoBackInnerLeft>
			</S.HeaderGoBackInner>
		</S.HeaderGoBack>
	);
};

export default HeaderGoBack;
