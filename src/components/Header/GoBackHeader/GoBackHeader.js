import * as S from './GoBackHeader.style';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const GoBackHeader = props => {
	const navigate = useNavigate();
	const navigateBack = () => {
		navigate(-1);
	};
	return (
		<S.GoBackHeader onClick={navigateBack}>
			<S.BackInco className="material-icons">arrow_back_ios</S.BackInco>
			{props.children}
		</S.GoBackHeader>
	);
};

export default GoBackHeader;
