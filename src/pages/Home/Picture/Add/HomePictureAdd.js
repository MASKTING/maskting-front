import * as S from './HomePictureAdd.style';

import React, { useCallback, useRef, useState } from 'react';
import Wrapper, { WrapperInner } from '../../../../components/Wrapper/Wrapper';
import HeaderGoBack from '../../../../components/Header/HeaderGoBack/HeaderGoBack';
import ContentTitle from '../../../../components/Content/Title/ContentTitle';
import ContentInfo from '../../../../components/Content/Info/ContentInfo';
import SideBar from '../../../../components/SideBar/SideBar';
import ContentRed from '../../../../components/Content/ContentRed/ContentRed';
import Panel from '../../../../components/Panel/Panel';
import PictureCircle from '../../../../components/PictureCircle/PictureCircle';
import ContentSubTitle from '../../../../components/Content/ContentSubTitle/ContentSubTitle';
import BigButton from '../../../../components/Button/BigButton/BigButton';
import Modal from '../../../../components/Modal';
import { useRecoilState } from 'recoil';
import { imageRecoil } from '../../../../recoil';
import { useNavigate } from 'react-router-dom';

const PICTURELIST = [
	{ id: '1', src: 'https://pbs.twimg.com/profile_images/1374979417915547648/vKspl9Et_400x400.jpg' },
	{ id: '2', src: 'https://pbs.twimg.com/profile_images/1374979417915547648/vKspl9Et_400x400.jpg' },
];
const l = PICTURELIST.length;
if (PICTURELIST.length < 6) {
	PICTURELIST.push({ id: l + 1, src: 'plus' });
	for (let i = l + 2; i <= 6; i++) {
		PICTURELIST.push({ id: i });
	}
}

const HomePictureAdd = () => {
	const [isModal, setIsModal] = useState(false);
	const navigate = useNavigate();
	const imgRef = useRef();
	const onCloseModal = () => {
		setIsModal(false);
	};
	const onOpenModal = () => {
		setIsModal(true);
	};
	const [imageFile, setImageFile] = useRecoilState(imageRecoil);

	const onUploadImage = useCallback(async e => {
		if (!e.target.files) {
			return;
		}
		const reader = new FileReader();
		reader.readAsDataURL(imgRef.current.files[0]);
		reader.onload = async () => {
			setImageFile(e.target.files[0]);
			localStorage.setItem('profilePreview', reader.result);
			navigate('/home/picture/resize');
		};
	}, []);
	return (
		<Wrapper>
			{isModal && (
				<Modal onCloseModal={onCloseModal} width={22.5} height={13.2}>
					<S.ModalInner>
						<S.ModalSelectLabel>카메라로 촬영</S.ModalSelectLabel>
						<S.ModalSelectInput
							id="pick_in_gallery"
							type="file"
							accept="image/*"
							onChange={onUploadImage}
							ref={imgRef}
						/>
						<S.ModalSelectLabel htmlFor="pick_in_gallery">갤러리에서 사진 선택</S.ModalSelectLabel>
					</S.ModalInner>
				</Modal>
			)}
			<WrapperInner>
				<HeaderGoBack />
				<ContentTitle>
					분당청소요정님의 <br />
					내적매력을 피드에 담아보세요
				</ContentTitle>
				<ContentInfo>
					<S.ContentInfoInner>
						사진은 <ContentRed>최대 6장</ContentRed>까지 추가할 수 있어요
					</S.ContentInfoInner>
				</ContentInfo>
				<Panel size="midium">
					<S.PanelInner>
						<S.Profile>
							<PictureCircle size="small" css="margin-right:2rem" />
							<ContentSubTitle>분당청소요정</ContentSubTitle>
						</S.Profile>
						<S.ProfileText>
							<ContentInfo>베이킹과 라이딩을 좋아하고 청소를 잘해요💫</ContentInfo>
						</S.ProfileText>
						<S.PictureList>
							{PICTURELIST.map(pictureItem => (
								<S.PictureItem key={pictureItem.id}>
									{pictureItem.src === 'plus' ? (
										<S.PictureAddBox>
											<S.PictureAddBoxInner className="material-icons" onClick={onOpenModal}>
												add
											</S.PictureAddBoxInner>
										</S.PictureAddBox>
									) : (
										<S.PictureImage src={pictureItem.src} />
									)}
								</S.PictureItem>
							))}
						</S.PictureList>
					</S.PanelInner>
				</Panel>

				<BigButton color="gray">사진을 추가해주세요</BigButton>
				<SideBar status="home" />
			</WrapperInner>
		</Wrapper>
	);
};

export default HomePictureAdd;
