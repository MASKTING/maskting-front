import React from 'react';
import styled from 'styled-components';
import PictureCircle from '../../../components/PictureCircle/PictureCircle';

const MyChattingWrapper = styled.div`
	position: relative;
	/* background-color: red; */
	/* height: 5rem; */
	display: flex;
	justify-content: end;
	align-items: center;
	margin: 1rem 0;
`;
const YourChattingWrapper = styled.div`
	position: relative;
	/* background-color: red; */
	/* height: 5rem; */
	display: flex;
	justify-content: start;
	align-items: center;
	margin: 1rem 0;
	padding-left: 1px;
`;
const Date = styled.span`
	margin: 0 0.5rem;
	color: #757575;
`;
const MyMessage = styled.div`
	background-color: #f45e5f;
	max-width: 25rem;
	padding: 1rem 2rem;
	border-radius: 2rem;
	display: flex;
	justify-content: center;
	align-items: center;
	color: #fafafa;
	font-size: 1.5rem;
	right: 0;
	line-height: 1.3;
`;
const YourMessage = styled.div`
	background-color: #e0e0e0;
	max-width: 25rem;
	padding: 1rem 2rem;
	border-radius: 2rem;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 1.5rem;
	right: 0;
	line-height: 1.3;
	margin-left: 5px;
`;

const Chatting = ({ message, isMy, date, src }) => {
	return isMy ? (
		<MyChattingWrapper>
			<Date>{date}</Date>
			<MyMessage>{message}</MyMessage>
		</MyChattingWrapper>
	) : (
		<YourChattingWrapper>
			<PictureCircle src={src} size={'xsmall'} />
			<YourMessage>{message}</YourMessage>
			<Date>{date}</Date>
		</YourChattingWrapper>
	);
};

export default Chatting;
