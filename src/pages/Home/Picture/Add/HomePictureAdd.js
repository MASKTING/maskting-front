import * as S from './HomePictureAdd.style';

import React from 'react';
import Wrapper, { WrapperInner } from '../../../../components/Wrapper/Wrapper';
import GoBackHeader from '../../../../components/Header/GoBackHeader/GoBackHeader';
import ContentTitle from '../../../../components/Content/Title/ContentTitle';
import ContentInfo from '../../../../components/Content/Info/ContentInfo';
import SideBar from '../../../../components/SideBar/SideBar';
import ContentRed from '../../../../components/Content/ContentRed/ContentRed';
import Panel from '../../../../components/Panel/Panel';
import PictureCircle from '../../../../components/PictureCircle/PictureCircle';
import ContentSubTitle from '../../../../components/Content/ContentSubTitle/ContentSubTitle';
import BigButton from '../../../../components/Button/BigButton/BigButton';

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
	const handleAddButton = () => {};
	return (
		<Wrapper>
			<WrapperInner>
				<GoBackHeader />
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
											<S.PictureAddBoxInner className="material-icons" onClick={handleAddButton}>
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
