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

const HomePictureAdd = () => {
	const [isModal, setIsModal] = useState(null);
	const navigate = useNavigate();
	const imgRef = useRef();
	const [imageFile, setImageFile] = useRecoilState(imageRecoil);
	const [isAddPicture, setIsAddPicture] = useState(imageFile.feedbackImageList.length > 0);
	const [deleteId, setDeleteId] = useState(null);
	const [pictureList, setPictureList] = useState([]);
	const [bio, setBio] = useState('');

	const getFeed = async () => {
		const response = await api({
			headers: {
				'Content-Type': 'application/json',
			},
			url: '/api/feed',
			method: 'GET',
		});
		const newArray = response.data.feeds.map(feed => {
			return { src: feed, id: Math.random() * 10 + '' };
		});

		if (newArray.length < 6) newArray.push({ src: 'plus', id: Math.random() * 10 + '' });
		setPictureList(newArray);
		setBio(response.data.bio);
		console.log(newArray);
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
				<S.ModalSelectLabel>???????????? ??????</S.ModalSelectLabel>
				<S.ModalSelectInput
					id="pick_in_gallery"
					type="file"
					accept="image/*"
					onChange={handleUploadImage}
					ref={imgRef}
				/>
				<S.ModalSelectLabel htmlFor="pick_in_gallery">??????????????? ?????? ??????</S.ModalSelectLabel>
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
				<ContentSubTitle>???????????? ????????? ????????????</ContentSubTitle>
				<ContentSubTitle>??? ???????????? ????????????????</ContentSubTitle>
				<SmallButton onClick={handleGoBack}>????????????</SmallButton>
				<SmallButton color="white" onClick={handleCloseModal}>
					??????
				</SmallButton>
			</S.ModalInner>
		</Modal>
	);
	//----------------------------------------------------------------
	const handleSubmitButton = () => {
		setIsModal('submit');
	};
	const handleSubmit = () => {
		navigate('/home');
	};
	const submitModal = isModal === 'submit' && (
		<Modal onCloseModal={handleCloseModal} width={24.5} height={18.2}>
			<S.ModalInner>
				<ContentSubTitle>????????? ???????????? ????????????</ContentSubTitle>
				<ContentSubTitle>??????????????????????</ContentSubTitle>
				<S.ContentInfo>
					????????? <ContentRed>?????? ?????????</ContentRed>?????? ????????? ??? ?????????
				</S.ContentInfo>
				<SmallButton onClick={handleSubmit}>????????????</SmallButton>
				<SmallButton color="white" onClick={handleCloseModal}>
					??????
				</SmallButton>
			</S.ModalInner>
		</Modal>
	);
	//----------------------------------------------------------------
	// const handleDeleteButton = e => {
	// 	setDeleteId(e.target.id);
	// 	setIsModal('delete');
	// };
	// const handleDelete = () => {
	// 	setPictureList(pictureList.filter(it => +it.id !== +deleteId));
	// 	console.log(pictureList);
	// 	setIsModal(null);
	// };
	const deleteModal = isModal === 'delete' && (
		<Modal onCloseModal={handleCloseModal} width={18.5} height={16.2}>
			<S.ModalInner>
				<ContentSubTitle>????????? ?????????</ContentSubTitle>
				<ContentSubTitle>??????????????????????</ContentSubTitle>
				{/* <SmallButton onClick={handleDelete}>????????????</SmallButton> */}
				<SmallButton color="white" onClick={handleCloseModal}>
					??????
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
					{localStorage.getItem('nickname')}?????? <br />
					??????????????? ????????? ???????????????
				</ContentTitle>
				<ContentInfo>
					<S.ContentInfoInner>
						????????? <ContentRed>?????? 6???</ContentRed>?????? ????????? ??? ?????????
					</S.ContentInfoInner>
				</ContentInfo>
				<Panel size="midium">
					<S.PanelInner>
						<S.Profile>
							<PictureCircle size="small" css="margin-right:2rem" />
							<ContentSubTitle>{localStorage.getItem('nickname')}</ContentSubTitle>
						</S.Profile>
						<S.ProfileText>
							<ContentInfo>{bio}</ContentInfo>
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
									) : (
										pictureItem.src && (
											<S.PictureImage
												src={pictureItem.src}
												// onClick={handleDeleteButton}
												id={pictureItem.id}
											/>
										)
									)}
								</S.PictureItem>
							))}
						</S.PictureList>
					</S.PanelInner>
				</Panel>
				{isAddPicture ? (
					<BigButton onClick={handleSubmitButton}>????????? ????????????</BigButton>
				) : (
					<BigButton color="gray">????????? ??????????????????</BigButton>
				)}

				<SideBar status="home" />
			</WrapperInner>
		</Wrapper>
	);
};

export default HomePictureAdd;
