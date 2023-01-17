import React, { useEffect, useState } from 'react';
import Wrapper from '../../../components/Wrapper';
import { WrapperInner } from '../../../components/Wrapper/Wrapper.style';
import api from '../api/api';
import { useNavigate } from 'react-router-dom';
import BigButton from '../../../components/Button/BigButton/BigButton';
import * as S from './WaitFailEdit.style';
import { useRecoilState } from 'recoil';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { checkNicknameApi } from '../api/signup';
import imageState from '../recoil';
import Modal from '../../../components/Modal/Modal';
import { getProfile } from '../api/getProfile';

const dataURLtoFile = (dataurl, fileName) => {
	var arr = dataurl.split(','),
		mime = arr[0].match(/:(.*?);/)[1],
		bstr = atob(arr[1]),
		n = bstr.length,
		u8arr = new Uint8Array(n);

	while (n--) {
		u8arr[n] = bstr.charCodeAt(n);
	}

	return new File([u8arr], fileName, { type: mime });
};

const WaitFailEdit = () => {
	const [rejection, setRejection] = useState('');
	const [imageFile] = useRecoilState(imageState);
	const navigate = useNavigate();
	const [profilePreview, setProfilePreview] = useState(null);
	const [photoErrorMessage, setPhotoErrorMessage] = useState(null);
	const [isModal, setIsModal] = useState(false);
	const [isDuplicate, setIsDuplicate] = useState(false);
	const { register, handleSubmit, formState, watch, setError, clearErrors, errors, setValue } =
		useForm();
	const [signupInfo, setSignupInfo] = useState({});
	const [userInfo, setUserInfo] = useState({});
	const profileImage = watch('profileImage');
	const nickname = watch('nickname');
	const introduce = watch('introduce');

	const getUserInfo = async () => {
		const resRejection = await api('/api/user/rejection');
		const resSignupInfo = await api('/api/user/re-signup');
		const resUserInfo = await await api('/api/user');
		setRejection(resRejection.data.reason);
		setSignupInfo(resSignupInfo.data);
		setUserInfo(resUserInfo.data);
		setProfilePreview(resUserInfo.data.profile);
		setValue('nickname', resSignupInfo.data.nickname);
		setValue('introduce', resSignupInfo.data.bio);
		// const a = dataURLtoFile(resUserInfo.data.profile, 'image');
		// console.log(resUserInfo.data);
	};
	useEffect(() => {
		getUserInfo();
	}, []);
	useEffect(() => {
		if (profileImage?.length > 0) {
			const reader = new FileReader();
			reader.readAsDataURL(profileImage[0]);
			reader.onloadend = () => {
				setProfilePreview(reader.result);
			};
		}
	}, [profileImage]);

	// MODAL
	const onCloseModal = () => {
		setIsModal(false);
	};
	const handleModalNextBtn = async () => {
		const formData = new FormData();
		formData.append('profiles', profileImage[0]);
		formData.append('profiles', profileImage[0]);
		formData.append('nickname', nickname);
		formData.append('bio', signupInfo.bio);
		formData.append('name', signupInfo.name);
		formData.append('birth', signupInfo.birth);
		formData.append('height', signupInfo.height);

		const res = await api.post('/api/user/re-signup', formData);
		console.log(res);
	};

	// 2. NICKNAME
	const handleCheckNickname = async () => {
		const data = await checkNicknameApi(watch('nickname'));

		if (!data) {
			//이미 사용중이라면
			setIsDuplicate(true);
			return;
		} else {
			setIsDuplicate(false);
		}
		setError('nickname', { message: null });
	};

	// 3. INTRODUCE
	const introduceCnt = (
		<S.IntroduceCnt cnt={watch('introduce')?.length}>{watch('introduce')?.length}</S.IntroduceCnt>
	);

	const onSubmit = () => {
		console.log(1);
	};
	const handleEdit = () => {
		setIsModal(true);
	};

	return (
		<Wrapper>
			{isModal && (
				<Modal onCloseModal={onCloseModal} width={23.8} height={16.8}>
					<S.ModalMessageWrapper>
						<S.ModalMessage>수정한 프로필로 승인을 요청할까요?</S.ModalMessage>
					</S.ModalMessageWrapper>
					<S.ModalBtnWrapper>
						<S.PrevBtn onClick={onCloseModal}>취소</S.PrevBtn>
						<S.NextBtn onClick={handleModalNextBtn}>네</S.NextBtn>
					</S.ModalBtnWrapper>
				</Modal>
			)}
			<WrapperInner>
				<S.TitleWrapper>
					<S.Title>
						{userInfo?.nickname}님
						<br /> 다음 항목을 수정해주세요
					</S.Title>
				</S.TitleWrapper>
				<S.Form onSubmit={handleSubmit(onSubmit)}>
					<S.Content>
						{/* 프로필 사진 */}
						<S.PhotoInfoWrapper>
							<S.Red>프로필 사진</S.Red>
							{photoErrorMessage && <S.PhotoErrorMessage>{photoErrorMessage}</S.PhotoErrorMessage>}
							<S.PhotoBox htmlFor="image">
								<S.PhotoImage htmlFor="ProfilePhoto" src={profilePreview} />
								<S.PhotoLogo className="material-icons">edit</S.PhotoLogo>
							</S.PhotoBox>
							<S.InputImage type="file" accept="img/*" id="image" {...register('profileImage')} />
						</S.PhotoInfoWrapper>
						{/* 닉네임 */}
						<S.HalfInfoWrapper>
							{isDuplicate ? (
								<S.ErrorMessage>중복하는 닉네임입니다.</S.ErrorMessage>
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
					<BigButton onClick={handleEdit}>수정했어요</BigButton>
				</S.Form>
			</WrapperInner>
			<SideBar status="home" />
		</Wrapper>
	);
};

export default WaitFailEdit;
