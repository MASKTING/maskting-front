import * as S from './MainButton.style';

const BUTTONSIZE = {
	small: ['10.6rem', '4rem', '0.8rem'],
	big: ['34.2rem', '5.8rem', '1.6rem', 'bottom'],
};
// 순서대로 width, height, border-radius

const MainButton = props => {
	return (
		<S.MainButton
			size={BUTTONSIZE[props.size]}
			type="button"
			onClick={props.onClick}
			color={props.color}
		>
			{props.children}
		</S.MainButton>
	);
};
export default MainButton;
