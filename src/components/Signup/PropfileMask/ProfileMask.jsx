import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './ProfileMask.style';
import Wrapper from '../../Wrapper';
import { NavigateButton } from '../../Button/Button';
import { useRecoilState } from 'recoil';

const ProfileMask = () => {
	const navigate = useNavigate();
	const [isSelectMask, setIsSelectMask] = useState(false);
	const [profilePreview, setProfilePreview] = useState(localStorage?.getItem('imageData'));
	const handlePrevBtn = () => {
		navigate('/profilePhoto');
	};
	const handleNextBtn = () => {
		navigate('/profileSetting');
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
					<S.Image src={profilePreview} />
				</S.ImageWrapper>
				{!isSelectMask && (
					<S.InfoMessage>
						<S.Red>가면을 선택하여 사진을 눌러보세요</S.Red>
					</S.InfoMessage>
				)}
				<S.MaskListWrapper>
					<S.MaskList>
						<S.MaskItem></S.MaskItem>
						<S.MaskItem></S.MaskItem>
						<S.MaskItem></S.MaskItem>
					</S.MaskList>
				</S.MaskListWrapper>
			</S.Content>
			<NavigateButton handlePrevBtn={handlePrevBtn} handleNextBtn={handleNextBtn} />
		</Wrapper>
	);
};

export default ProfileMask;
