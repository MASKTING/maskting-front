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
import { useNavigate } from 'react-router-dom';
import SmallButton from '../../../../components/Button/SmallButton/SmallButton';
import { useGetProfile } from './../../../../hooks/query/useGetProfile';
import { useGetFeed } from '../../../../hooks/query/useGetFeed';
import { addFeed } from '../../../../api/addFeed';

const HomePictureAdd = () => {
	const [isModal, setIsModal] = useState(null);
	const navigate = useNavigate();
	const [isAddPicture, setIsAddPicture] = useState(false);
	const [deleteId, setDeleteId] = useState(null);
	const { userInfo } = useGetProfile();
	const { feed, setFeed, refetch } = useGetFeed();

	const handleCloseModal = () => {
		setIsModal(null);
	};

	const handleUploadImage = useCallback(async e => {
		const formData = new FormData();
		formData.append('feed', e.target.files[0]);
		const res = await addFeed(formData);
		setIsModal(null);
		setIsAddPicture(true);
		refetch();
	}, []);
	const addModal = isModal === 'add' && (
		<Modal
			onCloseModal={() => {
				setIsModal(false);
			}}
			width={22.5}
			height={13.2}
		>
			<S.ModalInner>
				<S.ModalSelectLabel>카메라로 촬영</S.ModalSelectLabel>
				<S.ModalSelectInput
					id="pick_in_gallery"
					type="file"
					accept="image/*"
					onChange={handleUploadImage}
				/>
				<S.ModalSelectLabel htmlFor="pick_in_gallery">갤러리에서 사진 선택</S.ModalSelectLabel>
			</S.ModalInner>
		</Modal>
	);
	//----------------------------------------------------------------
	const handleGoBack = () => {
		navigate('/home');
	};
	const goBackModal = isModal === 'goBack' && (
		<Modal onCloseModal={handleCloseModal} width={24.5} height={16.2}>
			<S.ModalInner>
				<ContentSubTitle>추가중인 사진을 취소하고</ContentSubTitle>
				<ContentSubTitle>홈 화면으로 돌아갈까요?</ContentSubTitle>
				<SmallButton onClick={handleGoBack}>돌아가기</SmallButton>
				<SmallButton
					color="white"
					onClick={() => {
						setIsModal(null);
					}}
				>
					취소
				</SmallButton>
			</S.ModalInner>
		</Modal>
	);
	//----------------------------------------------------------------
	const handleSubmit = () => {
		navigate('/home');
	};
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
				<ContentSubTitle>추가한 사진을</ContentSubTitle>
				<ContentSubTitle>삭제하시겠어요?</ContentSubTitle>
				{/* <SmallButton onClick={handleDelete}>삭제하기</SmallButton> */}
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
				<HeaderGoBackLeft
					onClick={() => {
						navigate(-1);
					}}
				/>
				<ContentTitle>
					{userInfo?.nickname}님의 <br />
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
							<PictureCircle size="small" css="margin-right:2rem" src={userInfo?.profile} />
							<ContentSubTitle>{userInfo?.nickname}</ContentSubTitle>
						</S.Profile>
						<S.ProfileText>
							<ContentInfo>{feed?.bio}</ContentInfo>
						</S.ProfileText>
						<S.PictureList>
							{feed?.feeds?.map((feed, idx) => (
								<S.PictureItem key={idx}>
									<S.PictureImage
										src={feed}
										// onClick={handleDeleteButton}
									/>
								</S.PictureItem>
							))}
							<S.PictureAddBox
								onClick={() => {
									setIsModal('add');
								}}
							>
								<S.PictureAddBoxInner className="material-icons">add</S.PictureAddBoxInner>
							</S.PictureAddBox>
						</S.PictureList>
					</S.PanelInner>
				</Panel>
				{isAddPicture ? (
					<BigButton
						onClick={() => {
							navigate('home');
						}}
					>
						이대로 완성하기
					</BigButton>
				) : (
					<BigButton color="gray">사진을 추가해주세요</BigButton>
				)}

				<SideBar status="home" />
			</WrapperInner>
		</Wrapper>
	);
};

export default HomePictureAdd;
