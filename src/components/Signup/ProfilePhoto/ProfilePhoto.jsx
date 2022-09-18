import React, { useCallback, useReducer, useState } from 'react';
import * as S from './ProfilePhoto.style';
import { useNavigate } from 'react-router-dom';
import Modal from '../../Modal';
import pick_example1 from '../../../assets/pic_example1.svg';

const ProfilePhoto = () => {
	const navigate = useNavigate();
	const handleGoBackButton = () => {
		navigate('/profileSetting');
	};
	const handleGoNextButton = () => {
		navigate('/profileMask');
	};

	const [isModal, setIsModal] = useState(false);
	const onOpenModal = () => {
		setIsModal(true);
	};

	const onCloseModal = () => {
		setIsModal(false);
	};

	// 이미지 업로드
	const onUploadImage = useCallback(async e => {
		if (!e.target.files) {
			return;
		}
		const reader = new FileReader();
		reader.onload = async () => {
			const dataURL = reader.result;
			localStorage.setItem('profileImgData', dataURL);
		};
		const a = reader.readAsDataURL(e.target.files[0]);
		handleGoNextButton();
	}, []);

	return (
		<S.Wrapper>
			{isModal && (
				<S.ModalWrapper onClick={onCloseModal}>
					<S.Modal onClick={e => e.stopPropagation()}>
						<S.ModalSelectLabel>카메라로 촬영</S.ModalSelectLabel>
						<S.ModalSelectInput
							id="pick_in_gallery"
							type="file"
							accept="image/*"
							onChange={onUploadImage}
						/>
						<S.ModalSelectLabel htmlFor="pick_in_gallery">갤러리에서 사진 선택</S.ModalSelectLabel>
					</S.Modal>
				</S.ModalWrapper>
			)}
			<S.TitleWrapper>
				<S.BtnGoBack className="material-icons" onClick={handleGoBackButton}>
					navigate_before
				</S.BtnGoBack>
				<S.Title>프로필 사진을 설정해주세요</S.Title>
			</S.TitleWrapper>
			<S.Form>
				<S.Content>
					<S.ProfilePhotoWrapper>
						<S.ProfilePhoto onClick={onOpenModal}>
							<S.ProfilePhotoLogo className="material-icons">image</S.ProfilePhotoLogo>
						</S.ProfilePhoto>
					</S.ProfilePhotoWrapper>
					<S.InfoTextWrapper>
						<S.InfoTextList>
							<S.InfoTextItem>
								이렇게 등록해주세요: <br />
								얼굴이 <S.ColorRed>뚜렷하게 보이는</S.ColorRed> 사진, 얼굴이
								<S.ColorRed> 정면으로 나온 사진</S.ColorRed>
							</S.InfoTextItem>
							<S.InfoTextItem>
								이런 사진은 안돼요: 단체사진이나 <S.ColorRed>친구가 같이 나온</S.ColorRed> 사진,
								얼굴
								<S.ColorRed> 일부가 가려진</S.ColorRed> 사진(선글라스 등)
							</S.InfoTextItem>
						</S.InfoTextList>
					</S.InfoTextWrapper>
					<S.InfoImageWrapper>
						<S.InfoImage src={pick_example1} />
					</S.InfoImageWrapper>
				</S.Content>
			</S.Form>
		</S.Wrapper>
	);
};

export default ProfilePhoto;
