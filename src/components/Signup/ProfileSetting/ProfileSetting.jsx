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
	const [profilePreview, setProfilePreview] = useState(
		localStorage?.getItem('maskImageData') || {},
	);
	const [photoErrorMessage, setPhotoErrorMessage] = useState(null);
	const [isModal, setIsModal] = useState(false);
	const [nicknameChecked, setNicknameChecked] = useState(false);
	const {
		register,
		handleSubmit,
		formState: { errors },
		watch,
		setError,
	} = useForm({
		defaultValues: {
			nickname: basicInfo?.nickname,
			introduce: basicInfo?.introduce,
		},
		mode: 'all',
	});
	// MODAL
	const onOpenModal = () => {
		// 중복체크
		if (nicknameChecked) setIsModal(true);
		else setError('nickname', { message: '중복확인을 해주세요' });
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
		formData.append('profiles', imageFile.originalImage);
		formData.append('profiles', imageFile.maskedImage);

		for (let [key, value] of Object.entries({
			...basicInfo,
			nickname: watch('nickname'),
			bio: watch('introduce'),
			partnerBodyTypes: [3, 4],
		})) {
			formData.append(key, value);
		}

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

	/**
	 * 닉네임이 유효하면 true 아니라면 false를 return
	 * @param {string} nickname
	 * @returns {bool}
	 */
	const nicknameValidating = nickname => {
		const nicknameReg = /^[가-힣0-9A-Za-z\s]{2,10}$/g;
		return nicknameReg.test(nickname);
	};

	const handleCheckNickname = async () => {
		if (nicknameValidating(watch('nickname'))) {
			const data = await checkNicknameApi(watch('nickname'));
			if (!data) {
				//이미 사용중이라면
				setError('nickname', { message: '중복된 닉네임이에요' });
				return;
			} else {
				setNicknameChecked(true);
				setError('nickname', { message: '사용가능한 닉네임이에요' });
			}
		}
	};

	// 3. INTRODUCE
	const introduceCnt = (
		<S.IntroduceCnt cnt={watch('introduce')?.length}>
			{watch('introduce')?.length ? watch('introduce').length : 0}
		</S.IntroduceCnt>
	);

	// 완료 버튼
	const isThereImage = () => {
		const imageSrc = localStorage.getItem('maskImageData');
		if (imageSrc) return true;
		else {
			setPhotoErrorMessage('프로필 사진을 설정해주세요');
			return false;
		}
	};

	const onInvalid = e => {
		isThereImage();
		onCloseModal();
	};

	const onValid = data => {
		if (!isThereImage()) return;
		localStorage.setItem(
			'basicInfo',
			JSON.stringify({ ...basicInfo, nickname: watch('nickname'), introduce: watch('introduce') }),
		);
		handleModalNextBtn();
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

	useEffect(() => {
		setNicknameChecked(false);
	}, [watch('nickname')]);

	return (
		<Wrapper>
			<S.TitleWrapper>
				<S.Title>당신의 프로필을 완성해주세요</S.Title>
			</S.TitleWrapper>

			<S.Form onSubmit={handleSubmit(onValid, onInvalid)}>
				{isModal && (
					<Modal onCloseModal={onCloseModal} width={27.8} height={19.7}>
						<S.ModalMessageWrapper>
							<S.ModalMessage>프로필이 완성되었어요!</S.ModalMessage>
							<S.ModalMessage>승인신청을 통해 상대방을 만나보세요</S.ModalMessage>
						</S.ModalMessageWrapper>
						<S.ModalBtnWrapper>
							<S.PrevBtn onClick={onCloseModal}>취소</S.PrevBtn>
							<S.NextBtn type="submit">좋아요</S.NextBtn>
						</S.ModalBtnWrapper>
					</Modal>
				)}
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
						{errors.nickname?.message ? (
							<S.ErrorMessage>{errors.nickname?.message}</S.ErrorMessage>
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
									value: /^[가-힣0-9A-Za-z\s]{2,10}$/,
									message: '유효하지 않은 닉네임이에요',
								},
								maxLength: {
									value: 10,
									message: '닉네임이 너무 길어요',
								},
								minLength: {
									value: 2,
									message: '닉네임이 너무 짧아요',
								},
							})}
						/>
						<S.BtnCheckNickname type="button" onClick={handleCheckNickname}>
							중복확인
						</S.BtnCheckNickname>
					</S.HalfInfoWrapper>

					{/* 한줄 자기소개 */}
					<S.WideInfoWrapper>
						{errors.introduce?.message ? (
							<S.ErrorMessage>{errors.introduce?.message}</S.ErrorMessage>
						) : (
							<S.Label htmlFor="Introduce">한 줄 자기소개 ({introduceCnt}/50)</S.Label>
						)}
						<S.WideInput
							{...register('introduce', {
								required: {
									value: true,
									message: '한줄 자기소개를 입력해주세요',
								},
								maxLength: {
									value: 50,
									message: '50자 이내로 작성해주세요',
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
