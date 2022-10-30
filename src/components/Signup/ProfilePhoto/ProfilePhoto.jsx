import React, { useCallback, useEffect, useReducer, useRef, useState } from 'react';
import * as S from './ProfilePhoto.style';
import { useLocation, useNavigate } from 'react-router-dom';
import Modal from '../../Modal';
import Wrapper from '../../Wrapper';
import pick_example1 from '../../../assets/pic_example1.svg';
import { atom, useRecoilState } from 'recoil';
import imageState from '../../../recoil';

const ProfilePhoto = () => {
	const navigate = useNavigate();
	const imgRef = useRef();
	const handlePrevButton = () => {
		navigate('/partnerMoreInfo');
	};
	const [imageFile, setImageFile] = useRecoilState(imageState);

	const [isModal, setIsModal] = useState(false);
	const onOpenModal = () => {
		setIsModal(true);
	};

	const onCloseModal = () => {
		setIsModal(false);
	};

	function blobToDataURL(blob, callback) {
		let a = new FileReader();
		a.onload = function (e) {
			callback(e.target.result);
		};
		a.readAsDataURL(blob);
	}
	// 이미지 업로드
	const onUploadImage = useCallback(async e => {
		if (!e.target.files) {
			return;
		}
		blobToDataURL(e.target.files[0], dataurl => {
			localStorage.setItem('imageData', dataurl);
			navigate('/profileMask');
		});
		setImageFile(e.target.files[0]);
		// const reader = new FileReader();
		// reader.readAsDataURL(imgRef.current.files[0]);
		// reader.onload = async () => {
		// localStorage.setItem('profilePreview', reader.result);
		// };
	}, []);

	return (
		<Wrapper>
			{isModal && (
				<Modal onCloseModal={onCloseModal} width={22.5} height={13.2}>
					<S.ModalInner>
						<S.ModalSelectLabel>카메라로 촬영</S.ModalSelectLabel>
						<S.ModalSelectInput
							id="pick_in_gallery"
							ref={imgRef}
							type="file"
							accept="image/*"
							onChange={onUploadImage}
						/>
						<S.ModalSelectLabel htmlFor="pick_in_gallery">갤러리에서 사진 선택</S.ModalSelectLabel>
					</S.ModalInner>
				</Modal>
			)}
			<S.TitleWrapper>
				<S.BtnGoBack className="material-icons" onClick={handlePrevButton}>
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
		</Wrapper>
	);
};

export default ProfilePhoto;
