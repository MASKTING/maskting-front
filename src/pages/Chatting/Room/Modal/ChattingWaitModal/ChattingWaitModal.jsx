import React from 'react';
import { useState } from 'react';
import * as S from './ChattingWaitModal.style';

const ChattingWaitModal = ({ setModalType, partnerName }) => {
	const [imageSelected, setImageSelected] = useState(0);

	const radioChange = e => {
		const key = parseInt(e.target.value);
		setImageSelected(key);
	};

	const maskOpen = () => {
		//API
	};

	return (
		<>
			<S.ModalBackground></S.ModalBackground>
			<S.ModalWrapper>
				<S.ModalTopText>
					{localStorage.getItem('nickname')}님이 최종 결정을 내리셨습니다!
				</S.ModalTopText>
				<S.ModalMiddleBox>
					<S.ModalMiddleBoxText>
						아직 {partnerName}님이 최종 결정을 <br></br> 내리지 않았어요! 결과를 기다려주세요.
					</S.ModalMiddleBoxText>
				</S.ModalMiddleBox>
			</S.ModalWrapper>
		</>
	);
};

export default ChattingWaitModal;
