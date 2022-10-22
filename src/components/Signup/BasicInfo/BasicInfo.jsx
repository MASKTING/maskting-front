import { useState, useEffect } from 'react';
import { BsCheckLg } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import * as S from './BasicInfo.style';
import Wrapper from '../../Wrapper';

function BasicInfo() {
	const navigate = useNavigate();
	const [submit, setSubmit] = useState(false);
	const [basicInfo, setBasicInfo] = useState(
		JSON.parse(localStorage?.getItem('basicInfo')) || {
			name: '',
			birth: '',
			phone: '',
			privateCheck: false,
		},
	);
	console.log(basicInfo);
	const radioChange = e => {
		e.preventDefault();
		setBasicInfo({
			...basicInfo,
			[e.target.name]: e.target.value,
		});
	};
	const handleNextBtn = () => {
		setSubmit(true);
		if (basicInfo.privateCheck) {
			if (basicInfo) {
				localStorage.setItem(
					'basicInfo',
					JSON.stringify({
						...basicInfo,
					}),
				);
			} else {
				localStorage.setItem('basicInfo', JSON.stringify(basicInfo));
			}
			navigate('/location', { state: { basicInfo } });
		}
	};

	return (
		<Wrapper titleMessage="당신이 누구인지 알려주세요!" titleWidth={20}>
			<S.Content>
				<S.BasicInfoWrapper>
					{submit && basicInfo?.name === '' ? (
						<S.ErrorMessage>이름을 입력해주세요</S.ErrorMessage>
					) : (
						<S.Label htmlFor="Name">이름</S.Label>
					)}
					<S.BasicInput
						placeholder="홍길동"
						name="name"
						onChange={radioChange}
						value={basicInfo?.name}
					/>
				</S.BasicInfoWrapper>
				<S.BasicInfoWrapper>
					{submit && !basicInfo.gender ? (
						<S.ErrorMessage>성별을 선택해주세요</S.ErrorMessage>
					) : (
						<S.Label>성별</S.Label>
					)}
					<S.NarrowButton focused={basicInfo.gender === 'Male'}>
						<S.NarrowInput
							type="radio"
							name="gender"
							id="Male"
							value="Male"
							onClick={radioChange}
						/>
						<S.RadioLabel htmlFor="Male">남자</S.RadioLabel>
					</S.NarrowButton>
					<S.NarrowButton focused={basicInfo.gender === 'Female'}>
						<S.RadioLabel htmlFor="Female">여자</S.RadioLabel>
						<S.NarrowInput
							type="radio"
							name="gender"
							id="Female"
							value="Female"
							onClick={radioChange}
						/>
					</S.NarrowButton>
				</S.BasicInfoWrapper>
				<S.BasicInfoWrapper>
					{submit && basicInfo.birth === '' ? (
						<S.ErrorMessage>생년월일을 입력해주세요</S.ErrorMessage>
					) : (
						<S.Label htmlFor="Birthday">생년월일</S.Label>
					)}
					<S.BasicInput
						placeholder="19000101"
						onChange={radioChange}
						name="birth"
						value={basicInfo?.birth}
					/>
				</S.BasicInfoWrapper>
				<S.WideInfoWrapper>
					{submit && !basicInfo.occupation ? (
						<S.ErrorMessage>직업을 선택해주세요</S.ErrorMessage>
					) : (
						<S.Label>직업</S.Label>
					)}
					<S.NarrowDiv>
						<S.NarrowButton focused={basicInfo.occupation === '대학생'}>
							<S.RadioLabel htmlFor="대학생">
								대학생
								<S.NarrowInput
									type="radio"
									name="occupation"
									id="대학생"
									value="대학생"
									onClick={radioChange}
								/>
							</S.RadioLabel>
						</S.NarrowButton>
						<S.NarrowButton focused={basicInfo.occupation === '대학원생'}>
							<S.RadioLabel htmlFor="대학원생">
								대학원생
								<S.NarrowInput
									type="radio"
									name="occupation"
									id="대학원생"
									value="대학원생"
									onClick={radioChange}
								/>
							</S.RadioLabel>
						</S.NarrowButton>
						<S.NarrowButton focused={basicInfo.occupation === '직장인'}>
							<S.RadioLabel htmlFor="직장인">
								직장인
								<S.NarrowInput
									type="radio"
									name="occupation"
									id="직장인"
									value="직장인"
									onClick={radioChange}
								/>
							</S.RadioLabel>
						</S.NarrowButton>
						<S.NarrowButton focused={basicInfo.occupation === '취준생'}>
							<S.RadioLabel htmlFor="취준생">
								취준생
								<S.NarrowInput
									type="radio"
									name="occupation"
									id="취준생"
									value="취준생"
									onClick={radioChange}
								/>
							</S.RadioLabel>
						</S.NarrowButton>
					</S.NarrowDiv>
				</S.WideInfoWrapper>
				<S.BasicInfoWrapper>
					{submit && basicInfo.phone === '' ? (
						<S.ErrorMessage>전화번호를 입력해주세요</S.ErrorMessage>
					) : (
						<S.Label htmlFor="Phone">전화번호</S.Label>
					)}
					<S.BasicInput
						placeholder="01012345678"
						onChange={radioChange}
						name="phone"
						value={basicInfo?.phone}
					/>
				</S.BasicInfoWrapper>
				<S.NoticeWrapper>
					{basicInfo.privateCheck ? (
						<S.NoticeText checked={basicInfo.privateCheck}>확인했습니다</S.NoticeText>
					) : (
						<S.NoticeText>확인해주세요</S.NoticeText>
					)}
					<S.NoticeIcon
						checked={basicInfo.privateCheck}
						onClick={() =>
							setBasicInfo({
								...basicInfo,
								privateCheck: !basicInfo.privateCheck,
							})
						}
					>
						<BsCheckLg className="logo" />
					</S.NoticeIcon>
					<S.NoticeDetailText>
						전화번호는 최종 성사 후 서로와의 연락을 위해서 활용됩니다. 반드시 자신의 전화번호를
						정확히 입력해주세요. (타인의 전화번호 도용은 제재대상입니다)
					</S.NoticeDetailText>
				</S.NoticeWrapper>
			</S.Content>
			<S.BtnWrapper>
				<S.NextBtn onClick={handleNextBtn}>다음</S.NextBtn>
			</S.BtnWrapper>
		</Wrapper>
	);
}

export default BasicInfo;
