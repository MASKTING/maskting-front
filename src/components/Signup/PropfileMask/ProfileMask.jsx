import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import * as S from './ProfileMask.style';

const ProfileMask = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const [profileImageSrc, setProfileImageSrc] = useState('');
	const [isSelectMask, setIsSelectMask] = useState(false);

	const handlePrevBtn = () => {
		navigate('/profilePhoto');
	};
	const handleNextBtn = () => {
		navigate('/profileSetting', { state: { profileImageSrc } });
	};
	useEffect(() => {
		const profileImageSrc = location.state.profileImageSrc;
		setProfileImageSrc(profileImageSrc);
	}, []);

	return (
		<S.Wrapper>
			<S.TitleWrapper>
				<S.Title>가면을 씌어주세요</S.Title>
				<S.InfoText>
					가면은 <S.Red>자신이 원할 때에만</S.Red> 벗어 상대방에게 공개할 수 있습니다
				</S.InfoText>
			</S.TitleWrapper>
			<S.Content>
				<S.ImageWrapper>
					<S.Image src={profileImageSrc} />
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
			<S.BtnWrapper>
				<S.PrevBtn type="button" onClick={handlePrevBtn}>
					이전
				</S.PrevBtn>
				<S.NextBtn type="button" onClick={handleNextBtn}>
					다음
				</S.NextBtn>
			</S.BtnWrapper>
		</S.Wrapper>
	);
};

export default ProfileMask;
