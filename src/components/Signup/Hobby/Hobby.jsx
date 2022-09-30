import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { NavigateButton } from '../../Button/Button';
import * as S from './Hobby.style';
import Wrapper from '../../Wrapper';

function Hobby() {
	const onValid = () => {};
	const onInvalid = () => {};

	const [errorMessage, setErrorMessage] = useState(false);
	const [radio, setRadio] = useState({ hobby: null });
	const { handleSubmit } = useForm();
	const navigate = useNavigate();

	const HOBBY_LIST = [
		{ id: 1, name: '운동' },
		{ id: 2, name: '요리' },
		{ id: 3, name: '자기계발' },
		{ id: 4, name: '맛집/카페탐방' },
		{ id: 5, name: '전시회/공연' },
		{ id: 6, name: '투자' },
		{ id: 7, name: '유튜브/넷플릭스' },
		{ id: 8, name: '술' },
		{ id: 9, name: '여행' },
		{ id: 10, name: '음악' },
		{ id: 11, name: '친구들과 만남' },
		{ id: 12, name: '게임' },
		{ id: 13, name: '집돌이/집순이' },
		{ id: 14, name: '패션' },
		{ id: 15, name: '드라이브' },
		{ id: 16, name: '핫플 가기' },
		{ id: 17, name: '사진 촬영' },
		{ id: 18, name: '영화' },
	];

	const hobbyChange = e => {
		setRadio({
			...radio,
			[e.target.name]: e.target.value,
		});
	};

	const handlePrevBtn = () => {
		navigate('/location');
	};

	const handleNextBtn = () => {
		if (!radio.hobby) {
			setErrorMessage(true);
		} else {
			localStorage.setItem('hobby', radio.hobby);
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
					{HOBBY_LIST.map(hobby =>
						hobby.id % 2 === 0 ? (
							<S.HobbySelectWrapper key={hobby.id} focused={radio.hobby === hobby.name}>
								<S.HobbySelectLabel htmlFor={hobby.name}>{hobby.name}</S.HobbySelectLabel>
								<S.HobbySelectInput
									type="radio"
									id={hobby.name}
									name="hobby"
									value={hobby.name}
									onClick={hobbyChange}
								/>
							</S.HobbySelectWrapper>
						) : (
							<S.HobbySelectWrapper
								right={true}
								key={hobby.id}
								focused={radio.hobby === hobby.name}
							>
								<S.HobbySelectLabel htmlFor={hobby.name}>{hobby.name}</S.HobbySelectLabel>
								<S.HobbySelectInput
									type="radio"
									id={hobby.name}
									name="hobby"
									value={hobby.name}
									onClick={hobbyChange}
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
