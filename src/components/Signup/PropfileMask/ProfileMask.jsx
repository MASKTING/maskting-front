/* eslint-disable no-nested-ternary */
import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './ProfileMask.style';
import Wrapper from '../../Wrapper';
import Cropper from 'react-cropper';
import 'cropperjs/dist/cropper.css';
import { NavigateButton } from '../../Button/Button';
import { useRecoilState } from 'recoil';

const ProfileMask = () => {
	const navigate = useNavigate();
	const [mask, setMask] = useState(false);
	const cropperRef = useRef(null);
	const maskList = [
		{ id: 1, name: 'mask1.png' },
		{ id: 2, name: 'mask2.png' },
		{ id: 3, name: 'mask3.png' },
	];
	const [profilePreview, setProfilePreview] = useState(localStorage?.getItem('imageData'));
	const handlePrevBtn = () => {
		navigate('/profilePhoto');
	};
	const handleNextBtn = () => {
		navigate('/profileSetting');
	};
	const onCrop = () => {
		const imageElement = cropperRef?.current;
		const cropper = imageElement?.cropper;
		// console.log(cropper.getCroppedCanvas().toDataURL());
	};
	return (
		<Wrapper>
			<S.TitleWrapper>
				<S.Title>가면을 씌어주세요</S.Title>
				<S.InfoText>
					가면은 <S.Red>자신이 원할 때에만</S.Red> 벗어 상대방에게 공개할 수 있습니다
				</S.InfoText>
			</S.TitleWrapper>
			<S.Content>
				<S.ImageWrapper>
					<Cropper
						src={profilePreview}
						style={{
							width: '39rem',
							height: '42.2rem',
							position: 'absolute',
							// backgroundImage: `url(${maskImg1})`,
						}}
						initialAspectRatio={16 / 9}
						ref={cropperRef}
						crop={onCrop}
					/>
					{/* {mask === 1 ? (
						
					) : mask === 2 ? (
						<S.Mask visible={mask === false ? `false` : `true`} src={maskImg2} />
					) : (
						<S.Mask visible={mask === false ? `false` : `true`} src={maskImg3} />
					)} */}
				</S.ImageWrapper>
				<S.InfoMessage>
					<S.Red>가면을 선택하여 사진을 눌러보세요</S.Red>
				</S.InfoMessage>
				<S.MaskListWrapper>
					<S.MaskList>
						{maskList.map(Item => {
							return (
								<S.MaskItemWrapper>
									<S.MaskItem
										value={Item.name}
										key={Item.id}
										src={require(`../../../assets/${Item.name}`).default}
									/>
								</S.MaskItemWrapper>
							);
						})}
					</S.MaskList>
				</S.MaskListWrapper>
			</S.Content>
			<NavigateButton handlePrevBtn={handlePrevBtn} handleNextBtn={handleNextBtn} />
		</Wrapper>
	);
};

export default ProfileMask;
