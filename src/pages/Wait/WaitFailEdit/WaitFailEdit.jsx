import React, { useEffect, useState } from 'react';
import Wrapper from '../../../components/Wrapper';
import { WrapperInner } from '../../../components/Wrapper/Wrapper.style';
import BigButton from '../../../components/Button/BigButton/BigButton';
import * as S from './WaitFailEdit.style';
import { useRecoilState } from 'recoil';
import { useForm } from 'react-hook-form';
import { checkNicknameApi } from '../../../api/signup';
import imageState from '../../../recoil';
import Modal from '../../../components/Modal/Modal';
import { useGetResignupInfo } from '../../../hooks/query/isGetResignupInfo';
import axios from 'axios';
import { useNavigate } from 'react-router';

const WaitFailEdit = () => {
	const navigate = useNavigate();
	const [imageFile, setImageFile] = useRecoilState(imageState);
	const [profilePreview, setProfilePreview] = useState(null);
	const [photoErrorMessage, setPhotoErrorMessage] = useState(null);
	const [isModal, setIsModal] = useState(false);
	const [isDuplicate, setIsDuplicate] = useState(false);
	const { resignupInfo } = useGetResignupInfo();
	const { register, handleSubmit, formState, watch, setError, clearErrors, errors, setValue } =
		useForm();
	const profileImage = watch('profileImage');
	const bio = watch('bio');

	useEffect(() => {
		if (profileImage?.length > 0) {
			const reader = new FileReader();
			reader.readAsDataURL(profileImage[0]);
			reader.onloadend = () => {
				setProfilePreview(reader.result);
			};
		}
	}, [profileImage]);

	useEffect(() => {
		if (imageFile?.maskedImage) {
			const reader = new FileReader();
			reader.readAsDataURL(imageFile?.maskedImage);
			reader.onloadend = () => {
				setProfilePreview(reader.result);
			};
		}
	}, []);

	useEffect(() => {
		setValue('nickname', resignupInfo?.nickname);
		setValue('bio', resignupInfo?.bio);
		setValue('name', resignupInfo?.name);
		setValue('birth', resignupInfo?.birth);
		setValue('height', resignupInfo?.height);
	}, [resignupInfo]);

	const handleGoMask = () => {
		localStorage?.setItem('imageData', profilePreview);
		setImageFile({ originalImage: profileImage[0] });
		navigate('/wait/fail/mask');
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

	// 3. BIO
	const bioCnt = <S.BioCnt cnt={bio?.length}>{bio?.length}</S.BioCnt>;

	const onSubmit = async form => {
		const { name, birth, height, bio, nickname, profileImage } = form;
		const formData = new FormData();

		formData.append('nickname', nickname);
		formData.append('bio', bio);
		formData.append('name', name);
		formData.append('birth', birth);
		formData.append('height', height);
		formData.append('profiles', imageFile?.originalImage);
		formData.append('profiles', imageFile?.maskedImage);
		console.log(profileImage[0]);
		const res = await axios.post('/api/user/re-signup', formData, {
			headers: {
				'Content-Type': 'multipart/form-data',
				accesstoken: localStorage.getItem('accesstoken'),
			},
		});
		console.log(res);
	};
	const handleEdit = () => {
		setIsModal(true);
	};

	return (
		<Wrapper>
			<WrapperInner>
				<S.TitleWrapper>
					<S.Title>
						{resignupInfo?.nickname}님
						<br /> 다음 항목을 수정해주세요
					</S.Title>
				</S.TitleWrapper>
				<S.Form onSubmit={handleSubmit(onSubmit)}>
					{isModal && (
						<Modal
							onCloseModal={() => {
								setIsModal(false);
							}}
							width={23.8}
							height={16.8}
						>
							<S.ModalMessageWrapper>
								<S.ModalMessage>수정한 프로필로 승인을 요청할까요?</S.ModalMessage>
							</S.ModalMessageWrapper>
							<S.ModalBtnWrapper>
								<S.PrevBtn
									onClick={() => {
										setIsModal(false);
									}}
								>
									취소
								</S.PrevBtn>
								<S.NextBtn type="submit">네</S.NextBtn>
							</S.ModalBtnWrapper>
						</Modal>
					)}
					<S.Content>
						{/* 프로필 사진 */}
						<S.PhotoInfoWrapper>
							<S.Red>프로필 사진</S.Red>
							{photoErrorMessage && <S.PhotoErrorMessage>{photoErrorMessage}</S.PhotoErrorMessage>}
							<S.PhotoBox htmlFor="image">
								<S.PhotoImage htmlFor="ProfilePhoto" src={profilePreview} />
								<S.PhotoLogo className="material-icons" onClick={handleGoMask}>
									edit
								</S.PhotoLogo>
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
							{formState.errors?.bio >= 20 ? (
								<S.ErrorMessage>{formState.errors?.bio?.message}</S.ErrorMessage>
							) : (
								<S.Label htmlFor="Bio">한 줄 자기소개 ({bioCnt}/20)</S.Label>
							)}
							<S.WideInput
								{...register('bio', {
									required: {
										value: true,
										message: '한줄 자기소개를 입력해주세요',
									},
									pattern: {
										value: /^[가-힣\sㄱ-ㅎ!]{1,20}$/,
										message: '20자 이내로 작성해주세요',
									},
								})}
							/>
						</S.WideInfoWrapper>
						<S.InputWrapper>
							<S.Label htmlFor="name">이름</S.Label>
							<S.FullInput {...register('name')} />
						</S.InputWrapper>
						<S.InputWrapper>
							<S.Label htmlFor="name">생년월일</S.Label>
							<S.FullInput {...register('birth')} />
						</S.InputWrapper>
						<S.InputWrapper>
							<S.Label htmlFor="name">키</S.Label>
							<S.FullInput {...register('height')} />
						</S.InputWrapper>
					</S.Content>
					<BigButton onClick={handleEdit}>수정했어요</BigButton>
				</S.Form>
			</WrapperInner>
		</Wrapper>
	);
};

export default WaitFailEdit;
