import React, { useState } from 'react';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Modal from '../../Modal/Modal';
import * as S from './ProfileSetting.style';

function ProfileSetting() {
	const navigate = useNavigate();
	const { register, handleSubmit, formState, watch, setError } = useForm({
		defaultValues: {
			nickname: JSON.parse(localStorage.getItem('profileData'))?.nickname,
			introduce: JSON.parse(localStorage.getItem('profileData'))?.introduce,
		},
	});
	const [photoErrorMessage, setPhotoErrorMessage] = useState(null);

	// MODAL
	const [isModal, setIsModal] = useState(false);
	const onOpenModal = () => {
		setIsModal(true);
	};
	const onCloseModal = () => {
		setIsModal(false);
	};
	const handleModalNextBtn = () => {
		navigate('/');
	};

	const [profileImgData, setProfileImgData] = useState(null);
	const getProfileImageData = () => {
		setProfileImgData(localStorage.getItem('profileImgData'));
	};
	useEffect(() => {
		getProfileImageData();
	}, []);

	// 1. PHOTO
	const handlePhoto = () => {
		const nicknameInput = watch('nickname');
		const introduceInput = watch('introduce');
		localStorage.setItem(
			'profileData',
			JSON.stringify({ nickname: nicknameInput, introduce: introduceInput }),
		);
		navigate('/profilePhoto');
	};

	// 2. NICKNAME
	const handleCheckNickname = () => {
		const nicknameInput = watch('nickname');
		if (nicknameInput === '박규성') {
			//이미 사용중이라면
			setError('nickname', { message: '이미 사용 중인 닉네임입니다' }, { shouldFocus: true });
			return;
		}
		if (false) {
			// 사용할 수 없는 닉네임이라면
			setError('nickname', { message: '사용할 수 없는 닉네임입니다' }, { shouldFocus: true });
			return;
		}
		setError('nickname', { message: null });
	};

	// 3. INTRODUCE
	const introduceCnt = (
		<S.IntroduceCnt cnt={watch('introduce')?.length}>{watch('introduce')?.length}</S.IntroduceCnt>
	);

	// 완료 버튼
	const isThereImage = () => {
		const imageSrc = localStorage.getItem('profileImgData');
		if (imageSrc) return true;
		else {
			setPhotoErrorMessage('프로필 사진을 설정해주세요');
			return false;
		}
	};
	const onInvalid = e => {
		isThereImage();
		console.log(e);
	};
	const onValid = data => {
		if (!isThereImage()) return;
		localStorage.setItem(
			'profileData',
			JSON.stringify({ nickname: data.nickname, introduce: data.introduce }),
		);
		onOpenModal();
	};
	const handlePrevBtn = () => {
		navigate('/moreInfo');
	};

	return (
		<S.Wrapper>
			{isModal && (
				<S.ModalWrapper onClick={onCloseModal}>
					<S.Modal onClick={e => e.stopPropagation()}>
						<S.ModalMessageWrapper>
							<S.ModalMessage>프로필이 완성되었어요!</S.ModalMessage>
							<S.ModalMessage>승인신청을 통해 상대방을 만나보세요</S.ModalMessage>
						</S.ModalMessageWrapper>
						<S.ModalBtnWrapper>
							<S.PrevBtn onClick={onCloseModal}>취소</S.PrevBtn>
							<S.NextBtn onClick={handleModalNextBtn}>좋아요</S.NextBtn>
						</S.ModalBtnWrapper>
					</S.Modal>
				</S.ModalWrapper>
			)}
			<S.TitleWrapper>
				<S.Title>당신의 프로필을 완성해주세요</S.Title>
			</S.TitleWrapper>
			<S.Form onSubmit={handleSubmit(onValid, onInvalid)}>
				<S.Content>
					{/* 프로필 사진 */}
					<S.PhotoInfoWrapper>
						{photoErrorMessage && <S.PhotoErrorMessage>{photoErrorMessage}</S.PhotoErrorMessage>}
						<S.PhotoBox>
							<S.PhotoImage htmlFor="ProfilePhoto" src={profileImgData} />
							<S.PhotoLogo className="material-icons" onClick={handlePhoto}>
								edit
							</S.PhotoLogo>
						</S.PhotoBox>
					</S.PhotoInfoWrapper>

					{/* 닉네임 */}
					<S.HalfInfoWrapper>
						{formState.errors?.nickname?.message ? (
							<S.ErrorMessage>{formState.errors?.nickname?.message}</S.ErrorMessage>
						) : (
							<S.Label htmlFor="NickName">닉네임</S.Label>
						)}
						<S.HalfInput
							{...register('nickname', {
								required: {
									value: true,
									message: '닉네임을 설정해주세요',
								},
								pattern: {
									value: /^[가-힣0-9\s]{1,10}$/,
									message: '10자 이내로 설정해주세요',
								},
							})}
						/>
						<S.BtnCheckNickname type="button" onClick={handleCheckNickname}>
							중복확인
						</S.BtnCheckNickname>
					</S.HalfInfoWrapper>

					{/* 한줄 자기소개 */}
					<S.WideInfoWrapper>
						{formState.errors?.introduce ? (
							<S.ErrorMessage>{formState.errors?.introduce?.message}</S.ErrorMessage>
						) : (
							<S.Label htmlFor="Introduce">한 줄 자기소개 ({introduceCnt}/20)</S.Label>
						)}
						<S.WideInput
							{...register('introduce', {
								required: {
									value: true,
									message: '한줄 자기소개를 입력해주세요',
								},
								pattern: {
									value: /^[가-힣\sㄱ-ㅎ]{1,20}$/,
									message: '20자 이내로 작성해주세요',
								},
							})}
						/>
					</S.WideInfoWrapper>
				</S.Content>
				<S.BtnWrapper>
					<S.PrevBtn type="button" onClick={handlePrevBtn}>
						이전
					</S.PrevBtn>
					<S.NextBtn type="submit">완료</S.NextBtn>
				</S.BtnWrapper>
			</S.Form>
		</S.Wrapper>
	);
}

export default ProfileSetting;
