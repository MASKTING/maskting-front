import * as S from './NotificationHeader.style';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotificationHeader = () => {
	const navigate = useNavigate();
	const navigateBack = () => {
		navigate(-1);
	};
	return (
		<S.NotificationHeader onClick={navigateBack}>
			<S.BackInco className="material-icons">arrow_back_ios</S.BackInco>
			알림
		</S.NotificationHeader>
	);
};

export default NotificationHeader;
