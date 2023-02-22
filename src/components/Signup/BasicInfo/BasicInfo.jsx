import { useState, useEffect, useRef } from 'react';
import { BsCheckLg } from 'react-icons/bs';
import useInterval from './useInterval';
import { useNavigate } from 'react-router-dom';
import { mainErrorHandler, isEmpty, validCheck } from './errorHandler';
import { postReceiveVerificationNumber } from '../../../api/postReceiveVerifiactionNumber';
import { postPhoneAuthCheck } from '../../../api/postPhoneAuthCheck';
import * as S from './BasicInfo.style';
import Wrapper from '../../Wrapper';

function BasicInfo() {
	const navigate = useNavigate();
	const [delay, setDelay] = useState(null);
	const [second, setSecond] = useState(0);
	const [minute, setMinute] = useState(3);
	const [verifyButtonActivate, setVerifyButtonActivate] = useState(true);
	const [showLeftTime, setShowLeftTime] = useState(false);
	const [verifyErrorMessage, setVerifyErrorMessage] = useState('');
	const [verificationNumber, setVerificationNumber] = useState('');
	const [errorState, setErrorState] = useState({
		phone: '',
		birth: '',
		name: '',
		gender: '',
		occupation: '',
	});
	const [basicInfo, setBasicInfo] = useState(
		JSON.parse(localStorage?.getItem('basicInfo')) || {
			name: '',
			birth: '',
			phone: '',
			privateCheck: false,
		},
	);

	const verifyButtonAcitvating = () => {
		setVerifyButtonActivate(true);
	};

	const initTimer = () => {
		setSecond(0);
		setMinute(3);
	};

	const inputCheck = () => {
		const temp = { phone: '', name: '', birth: '', occupation: '', gender: '' };
		for (let key in errorState) temp[key] = mainErrorHandler(key, basicInfo[key]);
		setErrorState(temp);
	};

	const errorHandle = e => {
		setErrorState({
			...errorState,
			[e.target.name]: mainErrorHandler(e.target.name, e.target.value),
		});
	};

	const radioChange = e => {
		e.preventDefault();
		setBasicInfo({
			...basicInfo,
			[e.target.name]: e.target.value,
		});
	};

	const handleNextBtn = async () => {
		inputCheck();
		const verified = await checkVerificationNumber();
		if (basicInfo.privateCheck && !isEmpty(basicInfo) && validCheck(errorState) && verified) {
			localStorage.setItem('basicInfo', JSON.stringify(basicInfo));
			navigate('/signup/location', { state: { basicInfo } });
		}
		if (!verified) setVerifyErrorMessage('인증번호를 확인해주세요');
	};

	const sendVerifyNumber = () => {
		// postReceiveVerificationNumber(basicInfo?.phone);
		initTimer();
		setShowLeftTime(true);
		setVerifyButtonActivate(false);
		setTimeout(verifyButtonAcitvating, 180000);
		setDelay(1000);
	};

	const getVerificationNumber = () => {
		if (verifyButtonActivate) sendVerifyNumber();
		else
			alert(
				`인증번호 전송 후 3분간은 다시 인증번호를 받을 수 없어요\n${minute}분 ${second}초 남았어요`,
			);
	};

	const checkVerificationNumber = async () => {
		const phoneData = { phoneNumber: basicInfo?.phone, verificationNumber: verificationNumber };
		const isValid = await postPhoneAuthCheck(phoneData);
		setBasicInfo({ ...basicInfo, certification: isValid });
		return isValid.data;
	};

	const timerCallback = () => {
		if (second == 0) setSecond(59);
		else setSecond(second - 1);
		if (second == 0) setMinute(minute - 1);
		if (second === 1 && minute === 0) setDelay(null);
	};

	useEffect(() => {
		if (second === 0 && minute === 0) {
		}
	}, [second, minute]);

	useInterval(timerCallback, delay);

	return (
		<Wrapper titleMessage="당신이 누구인지 알려주세요!" titleWidth={20}>
			<S.Content>
				<S.BasicInfoWrapper>
					{errorState.name ? (
						<S.ErrorMessage>{errorState.name}</S.ErrorMessage>
					) : (
						<S.Label htmlFor="Name">이름</S.Label>
					)}
					<S.BasicInput
						placeholder="홍길동"
						name="name"
						onChange={radioChange}
						onBlur={errorHandle}
						value={basicInfo?.name || ''}
					/>
				</S.BasicInfoWrapper>
				<S.BasicInfoWrapper>
					{errorState.gender ? (
						<S.ErrorMessage>{errorState.gender}</S.ErrorMessage>
					) : (
						<S.Label>성별</S.Label>
					)}
					<S.NarrowButton focused={basicInfo.gender === 'male'}>
						<S.NarrowInput
							type="radio"
							name="gender"
							id="Male"
							value="male"
							onClick={radioChange}
							onChange={errorHandle}
						/>
						<S.RadioLabel htmlFor="Male">남자</S.RadioLabel>
					</S.NarrowButton>
					<S.NarrowButton focused={basicInfo.gender === 'female'}>
						<S.RadioLabel htmlFor="Female">여자</S.RadioLabel>
						<S.NarrowInput
							type="radio"
							name="gender"
							id="Female"
							value="female"
							onClick={radioChange}
							onChange={errorHandle}
						/>
					</S.NarrowButton>
				</S.BasicInfoWrapper>
				<S.BasicInfoWrapper>
					{errorState.birth ? (
						<S.ErrorMessage>{errorState.birth}</S.ErrorMessage>
					) : (
						<S.Label htmlFor="Birthday">생년월일</S.Label>
					)}
					<S.BasicInput
						placeholder="19000101"
						onChange={radioChange}
						name="birth"
						onBlur={errorHandle}
						value={basicInfo?.birth}
					/>
				</S.BasicInfoWrapper>
				<S.WideInfoWrapper>
					{errorState.occupation ? (
						<S.ErrorMessage>{errorState.occupation}</S.ErrorMessage>
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
									onChange={errorHandle}
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
									onChange={errorHandle}
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
									onChange={errorHandle}
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
									onChange={errorHandle}
								/>
							</S.RadioLabel>
						</S.NarrowButton>
					</S.NarrowDiv>
				</S.WideInfoWrapper>
				<S.HalfInfoWrapper>
					{errorState.phone ? (
						<S.ErrorMessage>{errorState.phone}</S.ErrorMessage>
					) : (
						<S.Label htmlFor="Phone">전화번호</S.Label>
					)}
					<S.HalfInput
						placeholder="01012345678"
						onChange={radioChange}
						onBlur={errorHandle}
						name="phone"
						value={basicInfo?.phone}
					/>

					<S.BtnCheckPhone onClick={getVerificationNumber} fontSize={'1.1rem'}>
						인증번호 전송
					</S.BtnCheckPhone>

					{verifyErrorMessage && <S.ErrorMessage>{verifyErrorMessage}</S.ErrorMessage>}
					<S.BasicInput
						placeholder="인증번호를 입력하세요"
						onChange={e => {
							setVerificationNumber(e.target.value);
						}}
						name="verificationNumber"
						value={verificationNumber}
					/>

					{showLeftTime && (
						<S.LeftTime>{`${minute}:${second < 10 ? `0${second}` : second}`}</S.LeftTime>
					)}
				</S.HalfInfoWrapper>
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
