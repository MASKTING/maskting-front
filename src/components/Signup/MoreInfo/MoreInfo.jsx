import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './MoreInfo.style';
import Wrapper from '../../Wrapper';
import { NavigateButton } from '../../Button';

function MoreInfo() {
	const navigate = useNavigate();
	const [submit, setSubmit] = useState(false);
	const [basicInfo, setBasicInfo] = useState({});

	useEffect(() => {
		setBasicInfo(JSON.parse(localStorage.getItem('basicInfo')));
	}, []);

	const [radio, setRadio] = useState({
		duty: null,
		smoking: null,
		religion: null,
		height: null,
		drinking: null,
		bodyType: null,
	});

	const msg = {
		drinking: {
			1: '술을 마시지 않아요',
			2: '한 달에 한 번 마셔요',
			3: '일주일에 한 번 마셔요',
			4: '일주일에 두세 번 마셔요',
			5: '매일 마셔요',
		},
		bodyType: {
			1: '마른 편이에요',
			2: '슬림 탄탄한 편이에요',
			3: '보통이에요',
			4: '볼륨감이 있는 편이에요',
			5: '통통한 편이에요',
		},
	};

	const radioChange = e => {
		e.preventDefault();
		setRadio({
			...radio,
			[e.target.name]: e.target.value,
		});
	};

	const handlePrevBtn = () => {
		navigate('/hobby');
	};

	const handleNextBtn = () => {
		setSubmit(true);
		if (
			radio.duty &&
			radio.smoking &&
			radio.religion &&
			radio.drinking &&
			radio.height &&
			radio.bodyType
		) {
			localStorage.setItem(
				'basicInfo',
				JSON.stringify({
					...basicInfo,
					duty: radio.duty,
					smoking: radio.smoking,
					religion: radio.religion,
					drinking: radio.drinking,
					height: radio.height,
					bodyType: radio.bodyType,
				}),
			);
			navigate('/');
		}
	};
	return (
		<Wrapper titleMessage="마지막 질문이에요!">
			<S.NoticeText>매칭 시에만 활용되며, 상대방에게는 정보가 공개되지 않아요</S.NoticeText>
			<S.Content>
				<S.BasicInfoWrapper>
					{submit && radio.duty === null ? (
						<S.ErrorMessage>군대 여부를 선택해주세요</S.ErrorMessage>
					) : (
						<S.Label>군대 여부</S.Label>
					)}
					<S.NarrowButton focused={radio.duty === '군필'}>
						<S.RadioLabel htmlFor="군필">
							군필
							<S.NarrowInput
								type="radio"
								name="duty"
								id="군필"
								value="군필"
								onClick={radioChange}
							/>
						</S.RadioLabel>
					</S.NarrowButton>
					<S.NarrowButton focused={radio.duty === '미필'}>
						<S.RadioLabel htmlFor="미필">
							미필
							<S.NarrowInput
								type="radio"
								name="duty"
								id="미필"
								value="미필"
								onClick={radioChange}
							/>
						</S.RadioLabel>
					</S.NarrowButton>
				</S.BasicInfoWrapper>
				<S.BasicInfoWrapper>
					{submit && radio.smoking === null ? (
						<S.ErrorMessage>흡연 여부를 선택해주세요</S.ErrorMessage>
					) : (
						<S.Label>흡연 여부</S.Label>
					)}
					<S.NarrowButton focused={radio.smoking === '흡연'}>
						<S.RadioLabel htmlFor="흡연">
							흡연
							<S.NarrowInput
								type="radio"
								name="smoking"
								id="흡연"
								value="흡연"
								onClick={radioChange}
							/>
						</S.RadioLabel>
					</S.NarrowButton>
					<S.NarrowButton focused={radio.smoking === '비흡연'}>
						<S.RadioLabel htmlFor="비흡연">
							비흡연
							<S.NarrowInput
								type="radio"
								name="smoking"
								id="비흡연"
								value="비흡연"
								onClick={radioChange}
							/>
						</S.RadioLabel>
					</S.NarrowButton>
				</S.BasicInfoWrapper>
				<S.WideInfoWrapper>
					{submit && radio.religion === null ? (
						<S.ErrorMessage>종교를 선택해주세요</S.ErrorMessage>
					) : (
						<S.LongLabel>종교</S.LongLabel>
					)}
					<S.NarrowButton focused={radio.religion === '기독교'}>
						<S.RadioLabel htmlFor="기독교">
							기독교
							<S.NarrowInput
								type="radio"
								name="religion"
								id="기독교"
								value="기독교"
								onClick={radioChange}
							/>
						</S.RadioLabel>
					</S.NarrowButton>
					<S.NarrowButton focused={radio.religion === '천주교'}>
						<S.RadioLabel htmlFor="천주교">
							천주교
							<S.NarrowInput
								type="radio"
								name="religion"
								id="천주교"
								value="천주교"
								onClick={radioChange}
							/>
						</S.RadioLabel>
					</S.NarrowButton>
					<S.NarrowButton focused={radio.religion === '불교'}>
						<S.RadioLabel htmlFor="불교">
							불교
							<S.NarrowInput
								type="radio"
								name="religion"
								id="불교"
								value="불교"
								onClick={radioChange}
							/>
						</S.RadioLabel>
					</S.NarrowButton>
					<S.NarrowButton focused={radio.religion === '기타'}>
						<S.RadioLabel htmlFor="기타">
							기타
							<S.NarrowInput
								type="radio"
								name="religion"
								id="기타"
								value="기타"
								onClick={radioChange}
							/>
						</S.RadioLabel>
					</S.NarrowButton>
					<S.WideButton focused={radio.religion === '무교'}>
						<S.RadioLabel htmlFor="무교">
							무교
							<S.NarrowInput
								type="radio"
								name="religion"
								id="무교"
								value="무교"
								onClick={radioChange}
							/>
						</S.RadioLabel>
					</S.WideButton>
				</S.WideInfoWrapper>
				<S.BasicInfoWrapper>
					{submit && radio.drinking === null ? (
						<S.ErrorMessage>음주 빈도를 선택해주세요</S.ErrorMessage>
					) : (
						<S.LongLabel htmlFor="drinking">
							음주 빈도 <S.DegreeMessage>{msg.drinking[radio.drinking]}</S.DegreeMessage>
						</S.LongLabel>
					)}
					<S.Slider
						type="range"
						name="drinking"
						min="1"
						max="5"
						// radio="1"
						step="1"
						degree={(parseInt(radio.drinking) - 1) * 25}
						onChange={radioChange}
					/>
				</S.BasicInfoWrapper>
				<S.BasicInfoWrapper>
					{submit && radio.height === null ? (
						<S.ErrorMessage>키를 입력해주세요</S.ErrorMessage>
					) : (
						<S.Label htmlFor="Height">키</S.Label>
					)}
					<S.BasicInput name="height" onChange={radioChange} />
				</S.BasicInfoWrapper>
				<S.BasicInfoWrapper>
					{submit && radio.bodyType === null ? (
						<S.ErrorMessage>체형을 선택해주세요</S.ErrorMessage>
					) : (
						<S.LongLabel htmlFor="bodyType">
							체형 <S.DegreeMessage>{msg.bodyType[radio.bodyType]}</S.DegreeMessage>
						</S.LongLabel>
					)}
					<S.Slider
						type="range"
						name="bodyType"
						min="1"
						max="5"
						// radio="1"
						step="1"
						degree={(parseInt(radio.bodyType) - 1) * 25}
						onChange={radioChange}
					/>
				</S.BasicInfoWrapper>
			</S.Content>
			<NavigateButton handlePrevBtn={handlePrevBtn} handleNextBtn={handleNextBtn} />
		</Wrapper>
	);
}

export default MoreInfo;
