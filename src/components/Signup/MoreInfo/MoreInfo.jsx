import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './MoreInfo.style';

function MoreInfo() {
	const { register, handleSubmit, formState } = useForm();
	const navigate = useNavigate();
	const [submit, setSubmit] = useState(false);
	const [value, setValue] = useState({
		duty: '',
		smoking: '',
		religion: '',
		height: '',
		drinking: '0',
		bodyType: '0',
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
	const onValid = data => {
		if (value.drinking && value.bodyType) {
			console.log(data);
		} else {
			setSubmit(true);
		}
	};
	const onInvalid = e => {
		console.log(e);
		setSubmit(true);
		// navigate('')
	};
	const onMoveBefore = () => {
		navigate('/');
	};
	const onSelected = e => {
		const { name, value } = e.target;
		setValue(prevState => ({
			...prevState,
			[name]: value,
		}));
	};
	const onChangeSlide = e => {
		const { name, value } = e.target;
		setValue(prevState => ({
			...prevState,
			[name]: value,
		}));
	};

	return (
		<S.Wrapper>
			<S.TitleWrapper>
				<S.Title>마지막 질문이에요!</S.Title>
				<S.NoticeText>매칭 시에만 활용되며, 상대방에게는 정보가 공개되지 않아요</S.NoticeText>
			</S.TitleWrapper>

			<S.Form onSubmit={handleSubmit(onValid, onInvalid)}>
				<S.Content>
					<S.BasicInfoWrapper>
						{formState.errors?.duty ? (
							<S.ErrorMessage>{formState.errors?.duty?.message}</S.ErrorMessage>
						) : (
							<S.Label htmlFor="duty">군대 여부</S.Label>
						)}
						<S.NarrowInput
							type="radio"
							name="duty"
							value="true"
							onClick={onSelected}
							{...register('duty', {
								required: {
									value: true,
									message: '군대 여부를 선택해주세요',
								},
							})}
						/>
						<S.NarrowInput
							type="radio"
							name="duty"
							value="false"
							onClick={onSelected}
							{...register('duty')}
						/>
					</S.BasicInfoWrapper>
					<S.BasicInfoWrapper>
						{formState.errors?.smoking ? (
							<S.ErrorMessage>{formState.errors?.smoking?.message}</S.ErrorMessage>
						) : (
							<S.Label htmlFor="smoking">흡연 여부</S.Label>
						)}
						<S.NarrowInput
							type="radio"
							name="smoking"
							value="true"
							onClick={onSelected}
							{...register('smoking', {
								required: {
									value: true,
									message: '흡연 여부를 선택해주세요',
								},
							})}
						/>
						<S.NarrowInput
							type="radio"
							name="smoking"
							value="false"
							onClick={onSelected}
							{...register('smoking')}
						/>
					</S.BasicInfoWrapper>
					<S.WideInfoWrapper>
						{formState.errors?.religion ? (
							<S.ErrorMessage>{formState.errors?.religion?.message}</S.ErrorMessage>
						) : (
							<S.Label htmlFor="religion">종교</S.Label>
						)}
						<S.NarrowInput
							type="radio"
							name="religion"
							value="기독교"
							onClick={onSelected}
							{...register('religion', {
								required: {
									value: true,
									message: '종교를 선택해주세요',
								},
							})}
						/>
						<S.NarrowInput
							type="radio"
							name="religion"
							value="천주교"
							onClick={onSelected}
							{...register('religion')}
						/>
						<S.NarrowInput
							type="radio"
							name="religion"
							value="불교"
							onClick={onSelected}
							{...register('religion')}
						/>

						<S.NarrowInput
							type="radio"
							name="religion"
							value="기타"
							onClick={onSelected}
							{...register('religion')}
						/>

						<S.WideInput
							type="radio"
							name="religion"
							value="무교"
							onClick={onSelected}
							{...register('religion')}
						/>
					</S.WideInfoWrapper>
					<S.BasicInfoWrapper>
						{submit && value.drinking === '0' ? (
							<S.ErrorMessage>음주 빈도를 선택해주세요</S.ErrorMessage>
						) : (
							<S.LongLabel htmlFor="drinking">
								음주 빈도 <S.DegreeMessage>{msg.drinking[value.drinking]}</S.DegreeMessage>
							</S.LongLabel>
						)}
						<S.Slider
							type="range"
							name="drinking"
							min="1"
							max="5"
							// value="1"
							step="1"
							degree={(parseInt(value.drinking) - 1) * 25}
							onChange={onChangeSlide}
						/>
					</S.BasicInfoWrapper>
					<S.BasicInfoWrapper>
						{formState.errors?.height ? (
							<S.ErrorMessage>{formState.errors?.height?.message}</S.ErrorMessage>
						) : (
							<S.Label htmlFor="Height">키</S.Label>
						)}
						<S.BasicInput
							{...register('height', {
								required: {
									value: true,
									message: '키를 입력해주세요',
								},
							})}
						/>
					</S.BasicInfoWrapper>
					<S.BasicInfoWrapper>
						{submit && value.bodyType === '0' ? (
							<S.ErrorMessage>체형을 선택해주세요</S.ErrorMessage>
						) : (
							<S.LongLabel htmlFor="bodyType">
								체형 <S.DegreeMessage>{msg.bodyType[value.bodyType]}</S.DegreeMessage>
							</S.LongLabel>
						)}
						<S.Slider
							type="range"
							name="bodyType"
							min="1"
							max="5"
							// value="1"
							step="1"
							degree={(parseInt(value.bodyType) - 1) * 25}
							onChange={onChangeSlide}
						/>
					</S.BasicInfoWrapper>
					<S.WideInfoWrapper />
					<S.WideInfoWrapper />
					<S.WideInfoWrapper />
					<S.WideInfoWrapper />
				</S.Content>
				<S.BtnWrapper>
					<S.BeforeBtn type="radio" onClick={onMoveBefore}>
						이전
					</S.BeforeBtn>
					<S.NextBtn type="submit">다음</S.NextBtn>
				</S.BtnWrapper>
			</S.Form>
		</S.Wrapper>
	);
}

export default MoreInfo;
