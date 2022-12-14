import * as S from './HomePictureResize.style';

import React from 'react';
import Wrapper from '../../../../components/Wrapper';
import { WrapperInner } from '../../../../components/Wrapper/Wrapper';

import ContentRed from '../../../../components/Content/ContentRed/ContentRed';
import HeaderGoBackLeft from '../../../../components/Header/HeaderGoBackLeft/HeaderGoBackLeft';
import HeaderGoBackRight from '../../../../components/Header/HeaderGoBackRight/HeaderGoBackRight';
import { useNavigate } from 'react-router-dom';
import SideBar from '../../../../components/SideBar/SideBar';
import { useRecoilState } from 'recoil';
import { imageRecoil } from '../../../../recoil';
import { addFeed } from '../../../../api/addFeed';

const HomePictureResize = () => {
	const navigate = useNavigate();
	const [imageFile, setImageFile] = useRecoilState(imageRecoil);
	const handleAddButton = async () => {
		try {
			const response = await addFeed(imageFile.feedbackImageList[0]);
			console.log(response);
		} catch (error) {
			console.log(error);
		}
		navigate('/home/picture/add');
	};

	return (
		<Wrapper>
			<HeaderGoBackLeft />
			<HeaderGoBackRight>
				<S.HeadeGoackRightText>
					<ContentRed onClick={handleAddButton}>첨부하기</ContentRed>
				</S.HeadeGoackRightText>
			</HeaderGoBackRight>
			<WrapperInner>
				<S.PictureResizeBox src={imageFile.selectedImage} />
			</WrapperInner>
			<SideBar status="home" />
		</Wrapper>
	);
};

export default HomePictureResize;
