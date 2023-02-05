import React, { useEffect } from 'react';
import { useState } from 'react';
import ChattingChoiceModal from './ChattingChoiceModal/ChattingChoiceModal.jsx';
import ChattingWaitModal from './ChattingWaitModal/ChattingWaitModal.jsx';
import ChattingResultModal from './ChattingResultModal/ChattingResultModal.jsx';
import { useParams } from 'react-router-dom';

const ChattingFinalModal = ({ roomInfo }) => {
	const [modalType, setModalType] = useState();
	const { roomId } = useParams();
	const settingModal = () => {
		if (roomInfo?.result === 'STILL') {
			if (roomInfo?.myDecision === 'YES' || roomInfo?.myDecision === 'NO') setModalType(1);
			else setModalType(0);
		} else setModalType(2);
	};

	useEffect(() => {
		settingModal();
	}, [roomInfo]);

	const modals = [
		<ChattingChoiceModal setModalType={setModalType}></ChattingChoiceModal>,
		<ChattingWaitModal
			partnerName={roomInfo?.roomName}
			setModalType={setModalType}
		></ChattingWaitModal>,
		<ChattingResultModal
			result={roomInfo?.result}
			setModalType={setModalType}
			roomId={roomId}
		></ChattingResultModal>,
	];

	return <>{modals[modalType]}</>;
};
export default ChattingFinalModal;
