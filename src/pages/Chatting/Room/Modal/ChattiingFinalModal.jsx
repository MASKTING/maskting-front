import React from 'react';
import { useState } from 'react';
import ChattingChoiceModal from './ChattingChoiceModal/ChattingChoiceModal.jsx';
import ChattingWaitModal from './ChattingWaitModal/ChattingWaitModal.jsx';
import ChattingResultModal from './ChattingResultModal/ChattingResultModal.jsx';

const ChattingFinalModal = ({ info }) => {
	const [modalType, setModalType] = useState(0);

	const modals = [
		<ChattingChoiceModal info={info} setModalType={setModalType}></ChattingChoiceModal>,
		<ChattingWaitModal setModalType={setModalType}></ChattingWaitModal>,
		<ChattingResultModal setModalType={setModalType}></ChattingResultModal>,
	];

	return <>{modals[modalType]}</>;
};
export default ChattingFinalModal;
