import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { NavigateButton } from '../../Button/Button';
import Wrapper from '../../Wrapper/Wrapper';
import * as S from './PartnerMoreInfo.style';

const msg = {
	partnerDrinking: {
		1: '술을 마시지 않는',
		2: '한 달에 한 번 정도',
		3: '일주일에 한 번 정도',
		4: '일주일에 두세 번 정도',
		5: '매일 마시는',
		6: '상관없어요',
	},
	height: {
		1: '-20cm',
		2: '-10cm',
		3: '0cm',
		4: '+10cm',
		5: '20cm',
	},
	partnerBodyTypes: {
		1: '마른',
		2: '슬림 탄탄한',
		3: '보통',
		4: '볼륨감 있는',
		5: '통통한',
	},
};

const PartnerMoreInfo = () => {
	const navigate = useNavigate();
	const [submit, setSubmit] = useState(false);
	const handlePrevBtn = () => {
		navigate('/signup/partnerLocation');
	};
	const handleNextBtn = () => {
		setSubmit(true);
		localStorage.setItem('basicInfo', JSON.stringify(basicInfo));
		navigate('/signup/profilePhoto');
	};
	const [basicInfo, setBasicInfo] = useState(JSON.parse(localStorage?.getItem('basicInfo')) || {});

	const radioChange = e => {
		e.preventDefault();
		console.log(e.target.value);
		setBasicInfo({
			...basicInfo,
			[e.target.name]: e.target.value,
		});
	};
	console.log(basicInfo);
	return (
		<Wrapper titleMessage="원하는 조건을 입력해주세요" titleWidth="39rem">
			<S.InfoMessage>
				<S.Red>매칭 시에만 활용</S.Red>되며, 상대방에게는 정보가 공개되지 않아요
			</S.InfoMessage>
			<S.Content>
				<S.BasicInfoWrapper>
					{submit && basicInfo.partnerDuty === null ? (
						<S.ErrorMessage>군대 여부를 선택해주세요</S.ErrorMessage>
					) : (
						<S.Label>군대 여부</S.Label>
					)}
					<S.NarrowButton focused={basicInfo.partnerDuty === 'true'}>
						<S.RadioLabel htmlFor="군필">군필</S.RadioLabel>
						<S.NarrowInput
							type="radio"
							name="partnerDuty"
							id="군필"
							value={true}
							onClick={radioChange}
						/>
					</S.NarrowButton>
					<S.NarrowButton focused={basicInfo.partnerDuty === 'false'}>
						<S.RadioLabel htmlFor="미필">미필</S.RadioLabel>
						<S.NarrowInput
							type="radio"
							name="partnerDuty"
							id="미필"
							value={false}
							onClick={radioChange}
						/>
					</S.NarrowButton>
					<S.NarrowButton focused={basicInfo.partnerDuty === 'any'}>
						<S.RadioMediumLabel htmlFor="dutyAny">
							상관없어요
							<S.NarrowInput
								type="radio"
								name="partnerDuty"
								id="dutyAny"
								value="any"
								onClick={radioChange}
							/>
						</S.RadioMediumLabel>
					</S.NarrowButton>
				</S.BasicInfoWrapper>
				<S.BasicInfoWrapper>
					{submit && basicInfo.partnerSmoking === null ? (
						<S.ErrorMessage>흡연 여부를 선택해주세요</S.ErrorMessage>
					) : (
						<S.Label>흡연 여부</S.Label>
					)}
					<S.NarrowButton focused={basicInfo.partnerSmoking === 'true'}>
						<S.RadioLabel htmlFor="흡연">
							흡연
							<S.NarrowInput
								type="radio"
								name="partnerSmoking"
								id="흡연"
								value={true}
								onClick={radioChange}
							/>
						</S.RadioLabel>
					</S.NarrowButton>
					<S.NarrowButton focused={basicInfo.partnerSmoking === 'false'}>
						<S.RadioLabel htmlFor="비흡연">
							비흡연
							<S.NarrowInput
								type="radio"
								name="partnerSmoking"
								id="비흡연"
								value={false}
								onClick={radioChange}
							/>
						</S.RadioLabel>
					</S.NarrowButton>
					<S.NarrowButton focused={basicInfo.partnerSmoking === 'any'}>
						<S.RadioMediumLabel htmlFor="smokingAny">
							상관없어요
							<S.NarrowInput
								type="radio"
								name="partnerSmoking"
								id="smokingAny"
								value="any"
								onClick={radioChange}
							/>
						</S.RadioMediumLabel>
					</S.NarrowButton>
				</S.BasicInfoWrapper>
				<S.WideInfoWrapper>
					{submit && basicInfo.partnerReligions === null ? (
						<S.ErrorMessage>종교를 선택해주세요</S.ErrorMessage>
					) : (
						<S.LongLabel>종교</S.LongLabel>
					)}
					<S.NarrowButton focused={basicInfo.partnerReligions === '기독교'}>
						<S.RadioMediumLabel htmlFor="기독교">기독교</S.RadioMediumLabel>
						<S.NarrowInput
							type="radio"
							name="partnerReligions"
							id="기독교"
							value="기독교"
							onClick={radioChange}
						/>
					</S.NarrowButton>
					<S.NarrowButton focused={basicInfo.partnerReligions === '천주교'}>
						<S.RadioMediumLabel htmlFor="천주교">천주교</S.RadioMediumLabel>
						<S.NarrowInput
							type="radio"
							name="partnerReligions"
							id="천주교"
							value="천주교"
							onClick={radioChange}
						/>
					</S.NarrowButton>
					<S.NarrowButton focused={basicInfo.partnerReligions === '불교'}>
						<S.RadioMediumLabel htmlFor="불교">불교</S.RadioMediumLabel>
						<S.NarrowInput
							type="radio"
							name="partnerReligions"
							id="불교"
							value="불교"
							onClick={radioChange}
						/>
					</S.NarrowButton>
					<S.NarrowButton focused={basicInfo.partnerReligions === '기타'}>
						<S.RadioMediumLabel htmlFor="기타">기타</S.RadioMediumLabel>
						<S.NarrowInput
							type="radio"
							name="partnerReligions"
							id="기타"
							value="기타"
							onClick={radioChange}
						/>
					</S.NarrowButton>
					<S.NarrowButton focused={basicInfo.partnerReligions === '무교'}>
						<S.RadioWideLabel htmlFor="무교">무교</S.RadioWideLabel>
						<S.NarrowInput
							type="radio"
							name="partnerReligions"
							id="무교"
							value="무교"
							onClick={radioChange}
						/>
					</S.NarrowButton>
				</S.WideInfoWrapper>
				<S.BasicInfoWrapper>
					{submit && basicInfo.partnerDrinking === null ? (
						<S.ErrorMessage>음주 빈도를 선택해주세요</S.ErrorMessage>
					) : (
						<S.LongLabel htmlFor="partnerDrinking">
							음주 빈도
							{basicInfo.partnerDrinking === '1' || basicInfo.partnerDrinking === '5' ? (
								<S.DegreeMessage>
									<S.Red>{msg.partnerDrinking[basicInfo.partnerDrinking]}</S.Red> 게 좋아요
								</S.DegreeMessage>
							) : null}
							{parseInt(basicInfo.partnerDrinking) >= 2 &&
							parseInt(basicInfo.partnerDrinking) <= 4 ? (
								<S.DegreeMessage>
									<S.Red>{msg.partnerDrinking[basicInfo.partnerDrinking]}</S.Red>가 좋아요
								</S.DegreeMessage>
							) : null}
							{basicInfo.partnerDrinking === '6' ? (
								<S.DegreeMessage>
									<S.Red>상관없어요</S.Red>
								</S.DegreeMessage>
							) : null}
						</S.LongLabel>
					)}
					<S.SliderWrapper>
						<S.Slider
							type="range"
							name="partnerDrinking"
							min="1"
							max="6"
							// radio="1"
							step="1"
							degree={(parseInt(basicInfo.partnerDrinking) - 1) * 20}
							onChange={radioChange}
						/>
					</S.SliderWrapper>
				</S.BasicInfoWrapper>
				<S.BasicInfoWrapper>
					{submit && basicInfo.partnerMinHeight === null ? (
						<S.ErrorMessage>키를 선택해주세요</S.ErrorMessage>
					) : (
						<S.LongLabel htmlFor="height">
							키
							{basicInfo.partnerMinHeight !== null || basicInfo.partnerMaxHeight !== null ? (
								<S.DegreeMessage>
									내 키에서 <S.Red>{msg.height[basicInfo.partnerMinHeight]}</S.Red>
									부터 <S.Red>{msg.height[basicInfo.partnerMaxHeight]}</S.Red>가 좋아요
								</S.DegreeMessage>
							) : null}
						</S.LongLabel>
					)}
					<S.SliderWrapper>
						<S.SliderLeft
							type="range"
							name="partnerMinHeight"
							min="1"
							max="5"
							step="1"
							degree={(parseInt(basicInfo.partnerMinHeight) - 1) * 25}
							onChange={radioChange}
						/>
						<S.SliderRight
							type="range"
							name="partnerMaxHeight"
							min="1"
							max="5"
							step="1"
							degree={(parseInt(basicInfo.partnerMaxHeight) - 1) * 25}
							onChange={radioChange}
						/>
					</S.SliderWrapper>
				</S.BasicInfoWrapper>
				<S.BasicInfoWrapper>
					{submit && basicInfo.partnerBodyTypes === null ? (
						<S.ErrorMessage>체형을 선택해주세요</S.ErrorMessage>
					) : (
						<S.LongLabel htmlFor="partnerBodyTypes">
							체형
							{basicInfo.partnerBodyTypesLeft !== null ? (
								<S.DegreeMessage>
									<S.Red>{msg.partnerBodyTypes[basicInfo.partnerBodyTypesLeft]}</S.Red> 체형부터
									<S.Red> {msg.partnerBodyTypes[basicInfo.partnerBodyTypesRight]}</S.Red> 체형이
									좋아요
								</S.DegreeMessage>
							) : null}
						</S.LongLabel>
					)}
					<S.SliderWrapper>
						<S.SliderLeft
							type="range"
							name="partnerBodyTypesLeft"
							min="1"
							max="5"
							step="1"
							degree={(parseInt(basicInfo.partnerBodyTypesLeft) - 1) * 25}
							onChange={radioChange}
						/>
						<S.SliderRight
							type="range"
							name="partnerBodyTypesRight"
							min="1"
							max="5"
							step="1"
							degreeLeft={(parseInt(basicInfo.partnerBodyTypesLeft) - 1) * 25}
							degreeRight={(parseInt(basicInfo.partnerBodyTypesRight) - 1) * 25}
							onChange={radioChange}
						/>
					</S.SliderWrapper>
				</S.BasicInfoWrapper>
			</S.Content>
			<NavigateButton handlePrevBtn={handlePrevBtn} handleNextBtn={handleNextBtn} />
		</Wrapper>
	);
};

export default PartnerMoreInfo;
