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
<<<<<<< HEAD
	function dataURLtoBlob(dataurl) {
		let arr = dataurl.split(','),
=======
	const dataURLtoFile = (dataurl, fileName) => {
		var arr = dataurl.split(','),
>>>>>>> feature/18-send-image
			mime = arr[0].match(/:(.*?);/)[1],
			bstr = atob(arr[1]),
			n = bstr.length,
			u8arr = new Uint8Array(n);
<<<<<<< HEAD
		while (n--) {
			u8arr[n] = bstr.charCodeAt(n);
		}
		return new Blob([u8arr], { type: mime });
	}

=======

		while (n--) {
			u8arr[n] = bstr.charCodeAt(n);
		}
		return new File([u8arr], fileName, { type: mime });
	};
>>>>>>> feature/18-send-image
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
		nickname: '알콜쟁이 라이언',
		partnerLocations: '경기 북부',
		partnerDuty: 'any',
		partnerSmoking: 'any',
		partnerReligions: '무교',
		partnerDrinking: 1,
		partnerMinHeight: 160,
		partnerMaxHeight: 170,
		partnerBodyTypes: 2,
		bio: 'aa',
	};
	// readAsDataURl;
	const handleModalNextBtn = async () => {
		const formData = new FormData();
<<<<<<< HEAD
		formData.append('profiles', dataURLtoBlob(localStorage.getItem('imageData')));
		// base64>file
		for (let [key, value] of Object.entries(testData)) {
			formData.append(key, value);
		}
		// formData.append('profiles', new Blob([JSON.stringify(testData)], { type: 'application/json' }));
=======
		// formData.append('profiles[]', JSON.stringify(testData));
		formData.append('profiles', dataURLtoFile(localStorage.getItem('profilePreview'), 'image.png'));
		// base64>file
		formData.append('profiles', new Blob([JSON.stringify(testData)], { type: 'application/json' }));
>>>>>>> feature/18-send-image
		// const reader = new FileReader();

		// console.log(new Blob([reader.readAsDataURL(localStorage.getItem('profilePreview'))]));

		await axios({
<<<<<<< HEAD
			method: 'post',
			url: `http://ec2-43-200-206-130.ap-northeast-2.compute.amazonaws.com:8080/api/user/signup`,
			data: formData, // data 전송시에 반드시 생성되어 있는 formData 객체만 전송 하여야 한다.
			headers: {
				'Content-Type': 'multipart/form-data', // Content-Type을 반드시 이렇게 하여야 한다.
			},
=======
			method: 'POST',
			url: `/api/user/signup`,
			// mode: 'cors',
			headers: {
				'Content-Type': 'multipart/form-data', // Content-Type을 반드시 이렇게 하여야 한다.
			},
			data: formData, // data 전송시에 반드시 생성되어 있는 formData 객체만 전송 하여야 한다.
>>>>>>> feature/18-send-image
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
