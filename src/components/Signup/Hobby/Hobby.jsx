import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { NavigateButton } from '../../Button/Button';
import * as S from './Hobby.style';
import Wrapper from '../../Wrapper';

const HOBBY_LIST = [
	{ id: '1', name: '운동' },
	{ id: '2', name: '요리' },
	{ id: '3', name: '자기계발' },
	{ id: '4', name: '맛집/카페탐방' },
	{ id: '5', name: '전시회/공연' },
	{ id: '6', name: '투자' },
	{ id: '7', name: '유튜브/넷플릭스' },
	{ id: '8', name: '술' },
	{ id: '9', name: '여행' },
	{ id: '10', name: '음악' },
	{ id: '11', name: '친구들과 만남' },
	{ id: '12', name: '게임' },
	{ id: '13', name: '집돌이/집순이' },
	{ id: '14', name: '패션' },
	{ id: '15', name: '드라이브' },
	{ id: '16', name: '핫플 가기' },
	{ id: '17', name: '사진 촬영' },
	{ id: '18', name: '영화' },
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
		navigate('/location');
	};

	const handleNextBtn = () => {
		if (!basicInfo.interests) {
			setErrorMessage(true);
		} else {
			localStorage.setItem('basicInfo', JSON.stringify(basicInfo));
			setErrorMessage(false);
			navigate('/moreInfo');
		}
	};

	return (
		<Wrapper titleMessage="무엇에 관심이 있으신가요?" titleWidth={40}>
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
