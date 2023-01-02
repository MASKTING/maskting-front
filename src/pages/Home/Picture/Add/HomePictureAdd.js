import * as S from './HomePictureAdd.style';

import React, { useCallback, useEffect, useRef, useState } from 'react';
import Wrapper, { WrapperInner } from '../../../../components/Wrapper/Wrapper';
import HeaderGoBackLeft from '../../../../components/Header/HeaderGoBackLeft/HeaderGoBackLeft';
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
import SmallButton from '../../../../components/Button/SmallButton/SmallButton';
import api from '../../../../api/api';

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
	const [isModal, setIsModal] = useState(null);
	const navigate = useNavigate();
	const imgRef = useRef();
	const [imageFile, setImageFile] = useRecoilState(imageRecoil);
	const [isAddPicture, setIsAddPicture] = useState(imageFile.feedbackImageList.length > 0);
	const [deleteId, setDeleteId] = useState(null);
	const [pictureList, setPictureList] = useState(PICTURELIST);

	const getFeed = async () => {
		const response = await api({
			url: '/api/feed',
			method: 'POST',
		});
		console.log(response);
	};

	useEffect(() => {
		getFeed();
	}, []);
	const handleCloseModal = () => {
		setIsModal(null);
	};
	const handleAddButton = () => {
		setIsModal('add');
	};
	const handleUploadImage = useCallback(async e => {
		if (!e.target.files) {
			return;
		}
		const reader = new FileReader();
		reader.readAsDataURL(imgRef.current.files[0]);
		reader.onload = async () => {
			setImageFile({
				feedbackImageList: [...imageFile.feedbackImageList, e.target.files[0]],
				selectedImage: reader.result,
			});
			navigate('/home/picture/resize');
		};
	}, []);
	const addModal = isModal === 'add' && (
		<Modal onCloseModal={handleCloseModal} width={22.5} height={13.2}>
			<S.ModalInner>
				<S.ModalSelectLabel>카메라로 촬영</S.ModalSelectLabel>
				<S.ModalSelectInput
					id="pick_in_gallery"
					type="file"
					accept="image/*"
					onChange={handleUploadImage}
					ref={imgRef}
				/>
				<S.ModalSelectLabel htmlFor="pick_in_gallery">갤러리에서 사진 선택</S.ModalSelectLabel>
			</S.ModalInner>
		</Modal>
	);
	//----------------------------------------------------------------
	const handleGoBackButton = () => {
		if (isAddPicture) {
			setIsModal('goBack');
		} else {
			navigate(-1);
		}
	};
	const handleGoBack = () => {
		navigate('/home');
	};
	const goBackModal = isModal === 'goBack' && (
		<Modal onCloseModal={handleCloseModal} width={24.5} height={16.2}>
			<S.ModalInner>
				<ContentSubTitle>추가중인 사진을 취소하고</ContentSubTitle>
				<ContentSubTitle>홈 화면으로 돌아갈까요?</ContentSubTitle>
				<SmallButton onClick={handleGoBack}>돌아가기</SmallButton>
				<SmallButton color="white" onClick={handleCloseModal}>
					취소
				</SmallButton>
			</S.ModalInner>
		</Modal>
	);
	//----------------------------------------------------------------
	const handleSubmitButton = () => {
		setIsModal('submit');
	};
	const handleSubmit = () => {};
	const submitModal = isModal === 'submit' && (
		<Modal onCloseModal={handleCloseModal} width={24.5} height={18.2}>
			<S.ModalInner>
				<ContentSubTitle>이대로 프로필을 완성하고</ContentSubTitle>
				<ContentSubTitle>저장하시겠어요?</ContentSubTitle>
				<S.ContentInfo>
					피드는 <ContentRed>마이 페이지</ContentRed>에서 확인할 수 있어요
				</S.ContentInfo>
				<SmallButton onClick={handleSubmit}>완성하기</SmallButton>
				<SmallButton color="white" onClick={handleCloseModal}>
					취소
				</SmallButton>
			</S.ModalInner>
		</Modal>
	);
	//----------------------------------------------------------------
	const handleDeleteButton = e => {
		setDeleteId(e.target.id);
		setIsModal('delete');
	};
	const handleDelete = () => {
		setPictureList(pictureList.filter(it => +it.id !== +deleteId));
		console.log(pictureList);
		setIsModal(null);
	};
	const deleteModal = isModal === 'delete' && (
		<Modal onCloseModal={handleCloseModal} width={18.5} height={16.2}>
			<S.ModalInner>
				<ContentSubTitle>추가한 사진을</ContentSubTitle>
				<ContentSubTitle>삭제하시겠어요?</ContentSubTitle>
				<SmallButton onClick={handleDelete}>삭제하기</SmallButton>
				<SmallButton color="white" onClick={handleCloseModal}>
					취소
				</SmallButton>
			</S.ModalInner>
		</Modal>
	);
	return (
		<Wrapper>
			{addModal}
			{goBackModal}
			{submitModal}
			{deleteModal}
			<WrapperInner>
				<HeaderGoBackLeft onClick={handleGoBackButton} />
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
							{pictureList.map(pictureItem => (
								<S.PictureItem key={pictureItem.id}>
									{pictureItem.src === 'plus' ? (
										<S.PictureAddBox>
											<S.PictureAddBoxInner className="material-icons" onClick={handleAddButton}>
												add
											</S.PictureAddBoxInner>
										</S.PictureAddBox>
									) : pictureItem.src ? (
										<S.PictureImage
											src={pictureItem.src}
											onClick={handleDeleteButton}
											id={pictureItem.id}
										/>
									) : (
										<S.PictureImage src={pictureItem.src} />
									)}
								</S.PictureItem>
							))}
						</S.PictureList>
					</S.PanelInner>
				</Panel>
				{isAddPicture ? (
					<BigButton onClick={handleSubmitButton}>이대로 완성하기</BigButton>
				) : (
					<BigButton color="gray">사진을 추가해주세요</BigButton>
				)}

				<SideBar status="home" />
			</WrapperInner>
		</Wrapper>
	);
};

export default HomePictureAdd;
