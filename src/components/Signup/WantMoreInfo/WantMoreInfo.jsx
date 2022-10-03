import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { NavigateButton } from '../../Button/Button';
import Wrapper from '../../Wrapper/Wrapper';
import * as S from './WantMoreInfo.style';

const WantMoreInfo = () => {
	const navigate = useNavigate();
	const [submit, setSubmit] = useState(false);
	const handlePrevBtn = () => {
		navigate('/wantLocation');
	};
	const handleNextBtn = () => {
		setSubmit(true);
	};

	const [radio, setRadio] = useState({
		duty: null,
		smoking: null,
		religion: null,
		minHeight: null,
		maxHeight: null,
		drinking: null,
		bodyType: null,
	});

	const msg = {
		drinking: {
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
		bodyType: {
			1: '마른',
			2: '슬림 탄탄한',
			3: '보통',
			4: '볼륨감 있는',
			5: '통통한',
			6: '모든',
		},
	};
	const radioChange = e => {
		e.preventDefault();
		setRadio({
			...radio,
			[e.target.name]: e.target.value,
		});
	};

	return (
		<Wrapper titleMessage="원하는 조건을 입력해주세요" titleWidth="39rem">
			<S.InfoMessage>
				<S.Red>매칭 시에만 활용</S.Red>되며, 상대방에게는 정보가 공개되지 않아요
			</S.InfoMessage>
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
					<S.MediumButton focused={radio.duty === 'dutyAny'}>
						<S.RadioLabel htmlFor="dutyAny">
							상관없어요
							<S.NarrowInput
								type="radio"
								name="duty"
								id="dutyAny"
								value="dutyAny"
								onClick={radioChange}
							/>
						</S.RadioLabel>
					</S.MediumButton>
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
					<S.MediumButton focused={radio.smoking === 'smokingAny'}>
						<S.RadioLabel htmlFor="smokingAny">
							상관없어요
							<S.NarrowInput
								type="radio"
								name="smoking"
								id="smokingAny"
								value="smokingAny"
								onClick={radioChange}
							/>
						</S.RadioLabel>
					</S.MediumButton>
				</S.BasicInfoWrapper>
				<S.WideInfoWrapper>
					{submit && radio.religion === null ? (
						<S.ErrorMessage>종교를 선택해주세요</S.ErrorMessage>
					) : (
						<S.LongLabel>종교</S.LongLabel>
					)}
					<S.MediumButton focused={radio.religion === '기독교'}>
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
					</S.MediumButton>
					<S.MediumButton focused={radio.religion === '천주교'}>
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
					</S.MediumButton>
					<S.MediumButton focused={radio.religion === '불교'}>
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
					</S.MediumButton>
					<S.MediumButton focused={radio.religion === '기타'}>
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
					</S.MediumButton>
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
							음주 빈도
							{radio.drinking === '1' || radio.drinking === '5' ? (
								<S.DegreeMessage>
									<S.Red>{msg.drinking[radio.drinking]}</S.Red> 게 좋아요
								</S.DegreeMessage>
							) : null}
							{parseInt(radio.drinking) >= 2 && parseInt(radio.drinking) <= 4 ? (
								<S.DegreeMessage>
									<S.Red>{msg.drinking[radio.drinking]}</S.Red> 가 좋아요
								</S.DegreeMessage>
							) : null}
							{radio.drinking === '6' ? (
								<S.DegreeMessage>
									<S.Red>상관없어요</S.Red>
								</S.DegreeMessage>
							) : null}
						</S.LongLabel>
					)}
					<S.Slider
						type="range"
						name="drinking"
						min="1"
						max="6"
						// radio="1"
						step="1"
						degree={(parseInt(radio.drinking) - 1) * 20}
						onChange={radioChange}
					/>
				</S.BasicInfoWrapper>
				<S.BasicInfoWrapper>
					{submit && (radio.minHeight === null || radio.maxHeight === null) ? (
						<S.ErrorMessage>키를 선택해주세요</S.ErrorMessage>
					) : (
						<S.LongLabel htmlFor="height">
							키
							{radio.minHeight !== null || radio.maxHeight !== null ? (
								<S.DegreeMessage>{msg.height[radio.minHeight]}</S.DegreeMessage>
							) : null}
						</S.LongLabel>
					)}
					<S.Slider
						type="range"
						name="height"
						min="1"
						max="6"
						// radio="1"
						step="1"
						degree={(parseInt(radio.minHeight) - 1) * 20}
						onChange={radioChange}
					/>
				</S.BasicInfoWrapper>
				<S.BasicInfoWrapper>
					{submit && radio.bodyType === null ? (
						<S.ErrorMessage>체형을 선택해주세요</S.ErrorMessage>
					) : (
						<S.LongLabel htmlFor="bodyType">
							체형
							{radio.bodyType !== null ? (
								<S.DegreeMessage>
									<S.Red>{msg.bodyType[radio.bodyType]}</S.Red> 체형이 좋아요
								</S.DegreeMessage>
							) : null}
						</S.LongLabel>
					)}
					<S.Slider
						type="range"
						name="bodyType"
						min="1"
						max="6"
						// radio="1"
						step="1"
						degree={(parseInt(radio.bodyType) - 1) * 20}
						onChange={radioChange}
					/>
				</S.BasicInfoWrapper>
			</S.Content>
			<NavigateButton handlePrevBtn={handlePrevBtn} handleNextBtn={handleNextBtn} />
		</Wrapper>
	);
};

export default WantMoreInfo;
