import React, { useState } from 'react';
import { NavigateButton, SelectSquareButton } from '../../Button/Button';
import { useForm } from 'react-hook-form';
import Wrapper from '../../Wrapper';
import * as S from './Location.style';

const Location = () => {
	const handlePrevBtn = () => {};
	const handleNextBtn = () => {};
	const [radio, setRadio] = useState({ city: null });
	const { register, handleSubmit, formState } = useForm();
	const cityChange = e => {
		setRadio({
			...radio,
			[e.target.name]: e.target.value,
		});
	};
	console.log(radio);

	return (
		<Wrapper titleMessage={'거주 지역이 어디인가요?'}>
			<S.CitySelectWrapper>
				<S.CitySelectInput type="radio" id="Seoul" name="city" value="Seoul" onClick={cityChange} />
				<S.CitySelectLabel htmlFor="Seoul" focused={radio.city === 'Seoul'}>
					서울
				</S.CitySelectLabel>
				<S.CitySelectInput
					type="radio"
					id="SeoulArea"
					name="city"
					value="SeoulArea"
					onClick={cityChange}
					// focused={radio.city === 'SeoulArea' && 'focused'}
				/>
				<S.CitySelectLabel htmlFor="SeoulArea" focused={radio.city === 'SeoulArea'}>
					경기/인천
				</S.CitySelectLabel>
			</S.CitySelectWrapper>
			<S.TownSelectWrapper>
				<S.TownButton></S.TownButton>
			</S.TownSelectWrapper>
			<NavigateButton handlePrevBtn={handlePrevBtn} handleNextBtn={handleNextBtn}></NavigateButton>
		</Wrapper>
	);
};

export default Location;
