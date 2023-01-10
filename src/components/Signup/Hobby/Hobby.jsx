import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import image1 from '../../../assets/image/hobby/flexed-biceps_1f4aa.png';
import image2 from '../../../assets/image/hobby/cooking_1f373.png';
import image3 from '../../../assets/image/hobby/sparkles_2728.png';
import image4 from '../../../assets/image/hobby/fork-and-knife-with-plate_1f37d-fe0f.png';
import image5 from '../../../assets/image/hobby/framed-picture_1f5bc-fe0f.png';
import image6 from '../../../assets/image/hobby/chart-increasing_1f4c8.png';
import image7 from '../../../assets/image/hobby/film-frames_1f39e-fe0f.png';
import image8 from '../../../assets/image/hobby/sake_1f376.png';
import image9 from '../../../assets/image/hobby/world-map_1f5fa-fe0f.png';
import image10 from '../../../assets/image/hobby/musical-note_1f3b5.png';
import image11 from '../../../assets/image/hobby/flexed-biceps_1f4aa.png';
import image12 from '../../../assets/image/hobby/video-game_1f3ae.png';
import image13 from '../../../assets/image/hobby/house_1f3e0.png';
import image14 from '../../../assets/image/hobby/glasses_1f453.png';
import image15 from '../../../assets/image/hobby/automobile_1f697.png';
import image16 from '../../../assets/image/hobby/fire_1f525.png';
import image17 from '../../../assets/image/hobby/camera-with-flash_1f4f8.png';
import image18 from '../../../assets/image/hobby/popcorn_1f37f.png';
import { NavigateButton } from '../../Button/Button';
import Wrapper from '../../Wrapper';
import * as S from './Hobby.style';

const HOBBY_LIST = [
	{ id: '1', name: '운동', src: image1 },

	{ id: '2', name: '요리', src: image2 },
	{ id: '3', name: '자기계발', src: image3 },
	{ id: '4', name: '맛집/카페탐방', src: image4 },
	{ id: '5', name: '전시회/공연', src: image5 },
	{ id: '6', name: '투자', src: image6 },
	{ id: '7', name: '유튜브/넷플릭스', src: image7 },
	{ id: '8', name: '술', src: image8 },
	{ id: '9', name: '여행', src: image9 },
	{ id: '10', name: '음악', src: image10 },
	{ id: '11', name: '친구들과 만남', src: image11 },
	{ id: '12', name: '게임', src: image12 },
	{ id: '13', name: '집돌이/집순이', src: image13 },
	{ id: '14', name: '패션', src: image14 },
	{ id: '15', name: '드라이브', src: image15 },
	{ id: '16', name: '핫플 가기', src: image16 },
	{ id: '17', name: '사진 촬영', src: image17 },
	{ id: '18', name: '영화', src: image18 },
];

function Hobby() {
	const onValid = () => {};
	const onInvalid = () => {};
	const [errorMessage, setErrorMessage] = useState(false);
	const [basicInfo, setBasicInfo] = useState({
		...JSON.parse(localStorage?.getItem('basicInfo')),
		interests: localStorage?.getItem('basicInfo').interests || [],
	});

	useEffect(() => {
		setBasicInfo(JSON.parse(localStorage.getItem('basicInfo')));
	}, []);

	const { handleSubmit } = useForm();
	const navigate = useNavigate();
	const interestsChange = e => {
		let tmpArr = basicInfo.interests || [];
		if (basicInfo.interests?.includes(e.target.value.toString())) {
			tmpArr = tmpArr.filter(it => it !== e.target.value.toString());
		} else {
			if (basicInfo.interests?.length === 5) {
				alert('취미는 5개까지 선택 가능합니다.');
			} else {
				tmpArr.push(e.target.value);
			}
		}
		setBasicInfo({
			...basicInfo,
			[e.target.name]: tmpArr,
		});
	};

	const handlePrevBtn = () => {
		localStorage.setItem('basicInfo', JSON.stringify(basicInfo));
		setErrorMessage(false);
		navigate('/signup/location');
	};

	const handleNextBtn = () => {
		if (!basicInfo.interests) {
			setErrorMessage(true);
		} else {
			localStorage.setItem('basicInfo', JSON.stringify(basicInfo));
			setErrorMessage(false);
			navigate('/signup/moreInfo');
		}
	};

	return (
		<Wrapper titleMessage="무엇에 관심이 있으신가요?" titleWidth={40}>
			{/* <img src={image1} /> */}
			{errorMessage ? (
				<S.ErrorMessage>관심사를 선택해주세요</S.ErrorMessage>
			) : (
				<S.SmallTitle>취미를 최대 5개까지 선택해주세요</S.SmallTitle>
			)}
			<S.Form onSubmit={handleSubmit(onValid, onInvalid)}>
				<S.Content>
					{HOBBY_LIST.map(interests =>
						interests.id % 2 === 0 ? (
							<S.HobbySelectWrapper key={interests.id}>
								<S.Image src={interests.src} />
								<S.HobbySelectLabel
									htmlFor={interests.name}
									focused={basicInfo.interests?.includes(interests.name)}
								>
									<S.HobbySelectInput
										type="radio"
										id={interests.name}
										name="interests"
										value={interests.name}
										onClick={interestsChange}
									/>

									{interests.name}
								</S.HobbySelectLabel>
							</S.HobbySelectWrapper>
						) : (
							<S.HobbySelectWrapper right={true} key={interests.id}>
								<S.Image src={interests.src} />
								<S.HobbySelectLabel
									htmlFor={interests.name}
									focused={basicInfo.interests?.includes(interests.name)}
								>
									{interests.name}
								</S.HobbySelectLabel>
								<S.HobbySelectInput
									type="radio"
									id={interests.name}
									name="interests"
									value={interests.name}
									onClick={interestsChange}
								/>
							</S.HobbySelectWrapper>
						),
					)}
				</S.Content>
				<NavigateButton handlePrevBtn={handlePrevBtn} handleNextBtn={handleNextBtn} />
			</S.Form>
		</Wrapper>
	);
}

export default Hobby;
