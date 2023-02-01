import React from 'react';
import { useState } from 'react';
import * as S from './ChattingResultModal.style.js';

const ChattingResultModal = ({ info, setModalType }) => {
	const [imageSelected, setImageSelected] = useState(0);
	const [matched, setMatched] = useState(false);
	const radioChange = e => {
		const key = parseInt(e.target.value);
		setImageSelected(key);
	};

	const maskOpen = () => {
		/**
		 * 요청 결정 API를 보낸다음에 바로 상대방의 요청 상태를 알아야 한다.
		 * 1. 결정 API 요청
		 * 2. 결정 상태를 받는 API 요청
		 * 3. 2에서 받은 데이터를 가지고 modalType 값 설정
		 */
		setModalType(1);
	};

	return (
		<>
			<S.ModalBackground></S.ModalBackground>
			<S.ModalTotalWrapper>
				{matched ? (
					<S.ModalWrapper>
						<S.ModalInner>
							<S.ModalFirstText>🎉 축하드립니다!</S.ModalFirstText>
							<S.ModalSecondText>
								마스크팅에서 만난 인연이 앞으로도 계속되길 바랍니다
							</S.ModalSecondText>
							<S.ModalPhotoFrame>
								<S.ModalPhoto></S.ModalPhoto>
								<S.ModalPhoto></S.ModalPhoto>
							</S.ModalPhotoFrame>
							<S.ModalPhoneButton>아이유님의 전화번호 보기</S.ModalPhoneButton>
							<S.ModalAlertText>
								연락처 및 프로필을 도용 및 유포할 경우 민형사상 책임이 발생할 수 있습니다
							</S.ModalAlertText>
						</S.ModalInner>
					</S.ModalWrapper>
				) : (
					<S.ModalFailedWrapper>
						<S.ModalFailedFirstText>😥 안타깝군요</S.ModalFailedFirstText>
						<S.ModalFailedSecondText>
							두 분의 마음이 서로 통하지 않았나봐요 더 좋은 만남의 기회가 있기를 바랍니다!
						</S.ModalFailedSecondText>
					</S.ModalFailedWrapper>
				)}
				;
				<S.ModalNoticeWrapper>
					<S.ModalNoticeInner>
						<S.ModalNoticeFirstText>마스크팅 서비스는 어떠셨나요?</S.ModalNoticeFirstText>
						<S.ModalNoticeSecondText>
							🌸 팀 벚꽃오프닝이 준비한 마스크팅 테스트 서비스는 여기까지 입니다! 정식 서비스 런칭
							때에는 다음과 같은 기능들이 추가될 예정입니다. 많이 기대해주세요!
						</S.ModalNoticeSecondText>
						<S.ModalLastTextFrame>
							<li>공통 관심사를 기반으로 질문을 던지는 AI 질문 요청</li>
							<li>채팅창에서 즐거운 대화 주제를 나눌 수 있는 질문 받기</li>
							<li>사진 뿐만 아니라 그 사람의 성향을 알 수 있는 피드 답변</li>
						</S.ModalLastTextFrame>
					</S.ModalNoticeInner>
				</S.ModalNoticeWrapper>
			</S.ModalTotalWrapper>
		</>
	);
};

export default ChattingResultModal;
