import axios from 'axios';
import { useEffect } from 'react';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';

import { checkNicknameApi } from '../../../api/signup';
import imageState from '../../../recoil';
import { NavigateButton } from '../../Button/Button';
import Modal from '../../Modal/Modal';
import Wrapper from '../../Wrapper';
import * as S from './ProfileSetting.style';

function ProfileSetting() {
	const [imageFile] = useRecoilState(imageState);
	const navigate = useNavigate();
	const [basicInfo, setBasicInfo] = useState(JSON.parse(localStorage?.getItem('basicInfo')) || {});
	const [profilePreview, setProfilePreview] = useState(localStorage?.getItem('imageData') || {});
	const { register, handleSubmit, formState, watch, setError, clearErrors } = useForm({
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

	const handleModalNextBtn = async () => {
		delete basicInfo.partnerBodyTypesLeft;
		delete basicInfo.partnerBodyTypesRight;
		localStorage.setItem(
			'basicInfo',
			JSON.stringify({
				...basicInfo,
				nickname: watch('nickname'),
				bio: watch('introduce'),
				partnerBodyTypes: [3, 4], // 데이터 전송 실패를 대비한 임의 데이터
			}),
		);

		const formData = new FormData();
		formData.append('profiles', imageFile);
		formData.append('name', 'kakao');
		formData.append('email', 'aa@naver.com');
		formData.append('gender', 'kakao');
		formData.append('birth', 'kakao');
		formData.append('location', 'kakao');
		formData.append('occupation', 'kakao');
		formData.append('providerId', 'kakao');
		formData.append('provider', 'kakao');
		formData.append('interests', 'kakao');
		formData.append('duty', true);
		formData.append('smoking', false);
		formData.append('drinking', 3);
		formData.append('height', 2);
		formData.append('phone', 13234242);
		formData.append('bodyType', 3);
		formData.append('religion', 'kakao');
		formData.append('bio', 'kakao');
		formData.append('nickname', 'kakao');
		formData.append('partnerLocations', 'kakao');
		formData.append('partnerDuty', 'kakao');
		formData.append('partnerSmoking', 'kakao');
		formData.append('partnerReligions', 'kakao');
		formData.append('partnerDrinking', 1);
		formData.append('partnerMinHeight', 4);
		formData.append('partnerMaxHeight', 170);
		formData.append('partnerBodyTypes', 2);

		// for (let [key, value] of Object.entries({
		// 	...basicInfo,
		// 	nickname: watch('nickname'),
		// 	bio: watch('introduce'),
		// 	partnerBodyTypes: [3, 4],
		// })) {
		// 	formData.append(key, value);
		// }

		await axios({
			method: 'POST',
			url: `/api/user/signup`,
			headers: {
				'Content-Type': 'multipart/form-data',
			},
			data: formData,
		}).then(response => {
			localStorage.setItem('accessToken', response.headers.accesstoken);
			navigate('/wait');
		});
	};

	// 1. PHOTO
	const handlePhoto = () => {
		navigate('/signup/profilePhoto');
	};

	// 2. NICKNAME
	const handleCheckNickname = async () => {
		const data = await checkNicknameApi(watch('nickname'));

		if (!data) {
			//이미 사용중이라면
			setError('nickname', { message: '이미 사용 중인 닉네임입니다' }, { shouldFocus: true });
			return;
		} else {
			clearErrors('nickname');
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
		navigate('/signup/profileMask');
	};

	useEffect(() => {
		let bodyArr = [];
		const userHeight = parseInt(basicInfo.height);
		let minHeight = parseInt(basicInfo.partnerMinHeight);
		let maxHeight = parseInt(basicInfo.partnerMaxHeight);

		switch (minHeight) {
			case 1:
			case 2:
				minHeight = userHeight - 20 / minHeight;
				break;
			case 3:
				minHeight = userHeight;
				break;
			case 4:
				minHeight = userHeight + 10;
				break;
			case 5:
				minHeight = userHeight + 20;
				break;
			default:
		}
		switch (maxHeight) {
			case 1:
			case 2:
				maxHeight = userHeight - 20 / maxHeight;
				break;
			case 3:
				maxHeight = userHeight;
				break;
			case 4:
				maxHeight = userHeight + 10;
				break;
			case 5:
				maxHeight = userHeight + 20;
				break;
			default:
		}
		for (const [key, value] of Object.entries(basicInfo)) {
			switch (key) {
				case 'drinking':
					basicInfo.drinking = parseInt(value);
					break;
				case 'height':
					basicInfo.height = parseInt(value);
					break;
				case 'bodyType':
					basicInfo.bodyType = parseInt(value);
					break;
				case 'partnerDrinking':
					basicInfo.partnerDrinking = parseInt(value);
					break;
				case 'partnerMinHeight':
					basicInfo.partnerMinHeight = parseInt(value);
					break;
				case 'partnerMaxHeight':
					basicInfo.partnerMaxHeight = parseInt(value);
					break;
				case 'duty':
					if (basicInfo.duty === 'true') basicInfo.duty = true;
					else basicInfo.duty = false;
					break;
				case 'smoking':
					if (basicInfo.smoking === 'true') basicInfo.smoking = true;
					else basicInfo.smoking = false;
					break;
				case 'partnerSmoking':
					if (basicInfo.partnerSmoking === 'true') basicInfo.partnerSmoking = true;
					else basicInfo.partnerSmoking = false;
					break;
				case 'partnerDuty':
					if (basicInfo.partnerDuty === 'true') basicInfo.partnerDuty = true;
					else basicInfo.partnerDuty = false;
					break;
				default:
			}
		}

		for (
			let i = parseInt(basicInfo.partnerBodyTypesLeft);
			i < parseInt(basicInfo.partnerBodyTypesRight) + 1;
			i++
		) {
			bodyArr.push(i);
		}

		localStorage.setItem(
			'basicInfo',
			JSON.stringify({
				...basicInfo,
				partnerBodyTypes: bodyArr,
				partnerMinHeight: minHeight,
				partnerMaxHeight: maxHeight,
			}),
		);
	}, []);

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
