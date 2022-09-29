import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { BsCheckLg } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import * as S from './BasicInfo.style';
import Wrapper from '../../Wrapper';

function BasicInfo() {
	const { register, handleSubmit, formState } = useForm();
	const [checked, setchecked] = useState(false);

	const navigate = useNavigate();
	const [radio, setRadio] = useState({
		gender: '',
		occupation: '',
	});

	const radioChange = e => {
		e.preventDefault();
		setRadio({
			...radio,
			[e.target.name]: e.target.value,
		});
	};

	const onValid = data => {
		console.log(data);
		if (checked) {
			navigate('/location');
			localStorage.setItem('basicInfo', JSON.stringify(data));
		}
	};
	const onInvalid = e => {
		console.log(e);
	};

	return (
		<Wrapper titleMessage="당신이 누구인지 알려주세요!" titleWidth={20}>
			<S.Form onSubmit={handleSubmit(onValid, onInvalid)}>
				<S.Content>
					<S.BasicInfoWrapper>
						{formState.errors?.name ? (
							<S.ErrorMessage>{formState.errors?.name?.message}</S.ErrorMessage>
						) : (
							<S.Label htmlFor="Name">이름</S.Label>
						)}
						<S.BasicInput
							placeholder="홍길동"
							{...register('name', {
								required: {
									value: true,
									message: '이름을 입력해주세요',
								},
								pattern: {
									value: /^[ㄱ-ㅎ|가-힣|a-z|A-Z|]+$/,
									message: '이름은 한글 및 영문만 가능합니다.',
								},
							})}
						/>
					</S.BasicInfoWrapper>
					<S.BasicInfoWrapper>
						{formState.errors?.gender ? (
							<S.ErrorMessage>{formState.errors?.gender?.message}</S.ErrorMessage>
						) : (
							<S.Label>성별</S.Label>
						)}
						<S.NarrowButton focused={radio.gender === 'Male'}>
							<S.RadioLabel htmlFor="Male">
								남자
								<S.NarrowInput
									type="radio"
									name="gender"
									id="Male"
									value="Male"
									onClick={radioChange}
									{...register('gender')}
								/>
							</S.RadioLabel>
						</S.NarrowButton>
						<S.NarrowButton focused={radio.gender === 'Female'}>
							<S.RadioLabel htmlFor="Female">
								여자
								<S.NarrowInput
									type="radio"
									name="gender"
									id="Female"
									value="Female"
									onClick={radioChange}
									{...register('gender')}
								/>
							</S.RadioLabel>
						</S.NarrowButton>
					</S.BasicInfoWrapper>
					<S.BasicInfoWrapper>
						{formState.errors?.birth ? (
							<S.ErrorMessage>{formState.errors?.birth?.message}</S.ErrorMessage>
						) : (
							<S.Label htmlFor="Birthday">생년월일</S.Label>
						)}
						<S.BasicInput
							placeholder="19000101"
							{...register('birth', {
								required: {
									value: true,
									message: '생년월일을 입력해주세요.',
								},
								pattern: {
									value: /^(19[0-9][0-9]|20\d{2})(0[0-9]|1[0-2])(0[1-9]|[1-2][0-9]|3[0-1])$/,
									message: '생년월일은 8글자여야 합니다.',
								},
							})}
						/>
					</S.BasicInfoWrapper>
					<S.WideInfoWrapper>
						{formState.errors?.occupation ? (
							<S.ErrorMessage>{formState.errors?.occupation?.message}</S.ErrorMessage>
						) : (
							<S.Label>직업</S.Label>
						)}
						<S.NarrowDiv>
							<S.NarrowButton focused={radio.occupation === '대학생'}>
								<S.RadioLabel htmlFor="대학생">
									대학생
									<S.NarrowInput
										type="radio"
										name="occupation"
										id="대학생"
										value="대학생"
										onClick={radioChange}
										{...register('occupation')}
									/>
								</S.RadioLabel>
							</S.NarrowButton>
							<S.NarrowButton focused={radio.occupation === '대학원생'}>
								<S.RadioLabel htmlFor="대학원생">
									대학원생
									<S.NarrowInput
										type="radio"
										name="occupation"
										id="대학원생"
										value="대학원생"
										onClick={radioChange}
										{...register('occupation')}
									/>
								</S.RadioLabel>
							</S.NarrowButton>
							<S.NarrowButton focused={radio.occupation === '직장인'}>
								<S.RadioLabel htmlFor="직장인">
									직장인
									<S.NarrowInput
										type="radio"
										name="occupation"
										id="직장인"
										value="직장인"
										onClick={radioChange}
										{...register('occupation')}
									/>
								</S.RadioLabel>
							</S.NarrowButton>
							<S.NarrowButton focused={radio.occupation === '취준생'}>
								<S.RadioLabel htmlFor="취준생">
									취준생
									<S.NarrowInput
										type="radio"
										name="occupation"
										id="취준생"
										value="취준생"
										onClick={radioChange}
										{...register('occupation')}
									/>
								</S.RadioLabel>
							</S.NarrowButton>
						</S.NarrowDiv>
					</S.WideInfoWrapper>
					<S.BasicInfoWrapper>
						{formState.errors?.phone ? (
							<S.ErrorMessage>{formState.errors?.phone?.message}</S.ErrorMessage>
						) : (
							<S.Label htmlFor="Phone">전화번호</S.Label>
						)}
						<S.BasicInput
							placeholder="01012345678"
							{...register('phone', {
								required: {
									value: true,
									message: '전화번호를 입력해주세요.',
								},
								pattern: {
									value: /^(01)\d{1}\d{3,4}\d{4}/,
									message: '전화번호를 올바르게 적어주세요.',
								},
							})}
						/>
					</S.BasicInfoWrapper>
					<S.NoticeWrapper>
						{checked ? (
							<S.NoticeText checked={checked}>확인했습니다</S.NoticeText>
						) : (
							<S.NoticeText>확인해주세요</S.NoticeText>
						)}
						<S.NoticeIcon checked={checked} onClick={() => setchecked(!checked)}>
							<BsCheckLg className="logo" />
						</S.NoticeIcon>
						<S.NoticeDetailText>
							전화번호는 최종 성사 후 서로와의 연락을 위해서 활용됩니다. 반드시 자신의 전화번호를
							정확히 입력해주세요. (타인의 전화번호 도용은 제재대상입니다)
						</S.NoticeDetailText>
					</S.NoticeWrapper>
				</S.Content>
				<S.BtnWrapper>
					<S.NextBtn type="submit">다음</S.NextBtn>
				</S.BtnWrapper>
			</S.Form>
		</Wrapper>
	);
}

export default BasicInfo;
