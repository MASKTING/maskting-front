import React from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import * as S from './ChattingChoiceModal.style.js';
import { useGetOriginalMaskImage } from '../../../../../hooks/query/useGetOriginalMaskImage.js';
import { postDecision } from '../../../../../api/postDecision.js';
const ChattingChoiceModal = ({ info, setModalType }) => {
	const [imageSelected, setImageSelected] = useState(0);
	const { roomId } = useParams();
	const radioChange = e => {
		const key = parseInt(e.target.value);
		setImageSelected(key);
	};
	const [profileImageStatus, profileImage, setProfileImage] = useGetOriginalMaskImage();

	const maskOpen = async () => {
		/**
		 * 요청 결정 API를 보낸다음에 바로 상대방의 요청 상태를 알아야 한다.
		 * 1. 결정 API 요청
		 * 2. 결정 상태를 받는 API 요청
		 * 3. 2에서 받은 데이터를 가지고 modalType 값 설정
		 */
		const decision = imageSelected === 0 ? 'NO' : 'YES';
		try {
			await postDecision({ decision: decision }, roomId);
			window.location.reload();
		} catch (e) {
			alert(e);
		}
	};

	return (
		<>
			<S.ModalBackground></S.ModalBackground>
			<S.ModalWrapper>
				<S.ModalTopText>최종 결정의 시간이 왔어요</S.ModalTopText>
				<S.ModalMiddleBox>
					<S.ModalMiddleBoxText>
						가면을 벗고 상대방과 더 알아가고 싶은지, 그 마음을 알려주세요!
					</S.ModalMiddleBoxText>
				</S.ModalMiddleBox>
				<S.ModalBottomBox>
					<S.ModalBottomBoxInner>
						<S.ModalBottomBoxTopText>🕐 최종 결정의 시간!</S.ModalBottomBoxTopText>
						<S.ModalBottomBoxPhotoFrame>
							{profileImageStatus === 'loading' ? <S.loader></S.loader> : ''}
							{profileImage?.map((src, idx) => {
								return (
									<S.Label key={idx}>
										<S.RadioInput type="radio" name="photoes" value={idx} onChange={radioChange} />
										<S.ModalBottomBoxPhoto
											size={idx === imageSelected ? '3px' : '0px'}
											src={src}
										></S.ModalBottomBoxPhoto>
									</S.Label>
								);
							})}
						</S.ModalBottomBoxPhotoFrame>
						{imageSelected === 0 ? (
							<S.ModalBottomPhoneText>가면을 벗지 않을래요</S.ModalBottomPhoneText>
						) : (
							<S.ModalBottomPhoneText>얼굴과 연락처를 공개할래요</S.ModalBottomPhoneText>
						)}
						<S.ModalBottomDecideText onClick={maskOpen}>결정했어요</S.ModalBottomDecideText>
					</S.ModalBottomBoxInner>
				</S.ModalBottomBox>
			</S.ModalWrapper>
		</>
	);
};

export default ChattingChoiceModal;
