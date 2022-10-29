import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import Modal from '../../Modal/Modal';
import Wrapper from '../../Wrapper';
import * as S from './ProfileSetting.style';
import { NavigateButton } from '../../Button';

function ProfileSetting() {
	const navigate = useNavigate();
	const [basicInfo, setBasicInfo] = useState(JSON.parse(localStorage?.getItem('basicInfo')) || {});
	const [profilePreview, setProfilePreview] = useState(
		localStorage?.getItem('profilePreview') || {},
	);
	const { register, handleSubmit, formState, watch, setError } = useForm({
		defaultValues: {
			nickname: basicInfo?.nickname,
			introduce: basicInfo?.introduce,
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

	const testData = {
		profiles: 'test.png',
		name: 'test',
		email: 'test@gmail.com',
		gender: 'male',
		birth: '19990815',
		location: '경기 북부',
		occupation: '대학생',
		phone: '01012345678',
		providerId: 'testProviderId',
		provider: 'google',
		interests: '산책',
		duty: true,
		smoking: false,
		drinking: 5,
		height: 181,
		bodyType: 3,
		religion: '무교',
		nicknam: '알콜쟁이 라이언',
		partnerLocations: '경기 북부',
		partnerDuty: 'any',
		partnerSmoking: 'any',
		partnerReligions: '무교',
		partnerDrinking: 1,
		partnerMinHeight: 160,
		partnerMaxHeight: 170,
		partnerBodyTypes: 2,
	};

	const handleModalNextBtn = async () => {
		const formData = new FormData();
		// const blob = new Blob(
		// 	[
		// 		JSON.stringify({
		// 			...basicInfo,
		// 			nickname: watch('nickname'),
		// 			introduce: watch('introduce'),
		// 			profiles: localStorage.getItem('imageData'),
		// 		}),
		// 	],
		// 	{ type: 'application/json' },
		// );

		// const blob = new Blob([JSON.stringify(testData)]);

		formData.append('profiles', 'test.png');
		formData.append('name', 'test');

		// formData.append('Info', blob);

		// axios
		// 	.post(`/api/user/signup`, formData)
		// 	.then(response => console.log(response))
		// 	.catch(error => console.log(error));

		await axios({
			method: 'POST',
			url: `/api/user/signup`,
			mode: 'cors',
			headers: {
				'Content-Type': 'multipart/form-data', // Content-Type을 반드시 이렇게 하여야 한다.
			},
			data: basicInfo, // data 전송시에 반드시 생성되어 있는 formData 객체만 전송 하여야 한다.
		}).then(response => {
			console.log(response);
		});
	};

	// 1. PHOTO
	const handlePhoto = () => {
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
		const imageSrc = localStorage.getItem('profiles');
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
			'basicInfo',
			JSON.stringify({ ...basicInfo, nickname: watch('nickname'), introduce: watch('introduce') }),
		);
		onOpenModal();
	};
	const handlePrevBtn = () => {
		localStorage.setItem(
			'basicInfo',
			JSON.stringify({ ...basicInfo, nickname: watch('nickname'), introduce: watch('introduce') }),
		);
		navigate('/profileMask');
	};
	// console.log(basicInfo.profiles);

	return (
		<Wrapper>
			{isModal && (
				<Modal onCloseModal={onCloseModal} width={27.8} height={19.7}>
					<S.ModalMessageWrapper>
						<S.ModalMessage>프로필이 완성되었어요!</S.ModalMessage>
						<S.ModalMessage>승인신청을 통해 상대방을 만나보세요</S.ModalMessage>
					</S.ModalMessageWrapper>
					<S.ModalBtnWrapper>
						<S.PrevBtn onClick={onCloseModal}>취소</S.PrevBtn>
						<S.NextBtn onClick={handleModalNextBtn}>좋아요</S.NextBtn>
					</S.ModalBtnWrapper>
				</Modal>
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
							<S.PhotoImage htmlFor="ProfilePhoto" src={profilePreview} />
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
			</S.Form>
			<NavigateButton handlePrevBtn={handlePrevBtn} handleNextBtn={onOpenModal} />
		</Wrapper>
	);
}

export default ProfileSetting;
