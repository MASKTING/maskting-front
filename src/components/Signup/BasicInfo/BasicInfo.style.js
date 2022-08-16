import styled from 'styled-components';

const Wrapper = styled.div`
	width: 39rem;
	height: 77.7rem;
`;

const TitleWrapper = styled.div`
	top: 0rem;
	left: 0rem;
	position: absolute;
	width: 39rem;
	height: 12rem;
`;
const Title = styled.h1`
	top: 2rem;
	left: 2.4rem;
	position: absolute;
	width: 20rem;
	height: 8rem;
	color: #212121;
	font-family: 'Pretendard';
	font-style: normal;
	font-weight: 700;
	font-size: 2.6rem;
	line-height: 4rem;
	letter-spacing: 0.1rem;
`;

const Content = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	padding: 2rem 0rem;
	gap: 3rem;
	position: absolute;
	width: 39rem;
	height: 69.3rem;
	left: 0rem;
	top: 12rem;
	overflow-y: scroll;
	overflow-x: hidden;
	::-webkit-scrollbar {
		display: none;
	}
`;

const BasicInfoWrapper = styled.div`
	width: 39rem;
	height: 8.8rem;
	flex: none;
	order: 0;
	flex-grow: 0;
	margin-bottom: 0.5rem;
`;

const WideInfoWrapper = styled.div`
	width: 39rem;
	height: 15.3rem;
	flex: none;
	order: 0;
	flex-grow: 0;
`;
const Label = styled.label`
	position: relative;
	display: flex;
	width: 10rem;
	height: 2.8rem;
	left: 2.4rem;
	font-family: 'Pretendard';
	font-style: normal;
	font-weight: bolder;
	font-size: 1.7rem;
	line-height: 2.8rem;
	letter-spacing: 0.08rem;
	color: #212121;
	//color: ${error => `${error ? `#000000` : `#212121`}`};
`;

const BasicInput = styled.input`
	position: relative;
	width: 34.2rem;
	height: 4.8rem;
	left: 2.4rem;
	top: 1.2rem;
	background: #eeeeee;
	border: none;
	border-radius: 0.8rem;
	&::placeholder {
		//
	}
`;

const NarrowDiv = styled.div`
	position: relative;
	width: 16rem;
	height: 4.8rem;
	left: 2.4rem;
	top: 1.2rem;
	border: none;
	background: #eeeeee;
	border-radius: 0.8rem;
`;

const NarrowInput = styled.button`
	position: relative;
	width: 16rem;
	height: 4.8rem;
	left: 2.4rem;
	margin-right: 2.2rem;
	margin-bottom: 1.8rem;
	top: 1.2rem;
	border: none;
	background: #eeeeee;
	border-radius: 0.8rem;
`;

const Form = styled.form``;

const BtnWrapper = styled.div`
	position: fixed;
	display: flex;
	justify-content: center;
	position: absolute;
	width: 39rem;
	height: 8.8rem;
	top: 71rem;
`;

const NoticeWrapper = styled.div`
	width: 39rem;
	height: 8.8rem;

	flex: none;
	order: 5;
	flex-grow: 0;
	margin-bottom: 16.8rem;
`;
const NoticeText = styled.h1`
	position: absolute;
	width: 12rem;
	height: 2.8rem;
	left: 2.4rem;

	font-family: 'Pretendard';
	font-style: normal;
	font-weight: 700;
	font-size: 1.7rem;
	line-height: 2.8rem;
	letter-spacing: 0.08rem;
	color: #f45e5f;
`;

const NoticeIcon = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
	width: 4rem;
	height: 4rem;
	left: 2.4rem;
	top: 4rem;
	cursor: pointer;
	background: ${checked => (checked ? `rgba(238, 238, 238, 1)` : `rgba(244, 94, 95, 1)`)};
	border-radius: 0.8rem;

	.logo {
		color: #e0e0e0;
		width: 2rem;
		height: 2rem;
	}
`;

const NoticeDetailText = styled.h1`
	position: relative;
	width: 29rem;
	height: 4.8rem;
	left: 8rem;

	/* Caption */

	font-family: 'Pretendard';
	font-style: normal;
	font-weight: bolder;
	font-size: 1rem;
	line-height: 1.8rem;
	/* or 164% */

	display: flex;
	align-items: flex-end;
	letter-spacing: 0.02rem;

	color: #000000;
`;

const ErrorMessage = styled.span`
	position: relative;
	width: 14.4rem;
	height: 2.8rem;
	left: 2.4rem;
	top: 0rem;

	font-family: 'Pretendard';
	font-style: normal;
	font-weight: bolder;
	font-size: 1.7rem;
	line-height: 2.8rem;
	letter-spacing: 0.08rem;

	color: #f45e5f;
`;
const NextBtn = styled.button`
	width: 34.2rem;
	height: 5.8rem;
	left: 2.4rem;
	top: 0rem;

	// 적용 x
	background-color: ${next =>
		next === true ? `rgba(244, 94, 95, 1);` : `rgba(244, 94, 95, 0.65);`};

	font-family: 'Inter';
	font-style: normal;
	font-weight: 700;
	font-size: 1.7rem;
	line-height: 3.6rem;
	text-align: center;
	letter-spacing: 0.1rem;
	color: rgba(250, 250, 250, 1);
	border: none;
	border-radius: 1.6rem;
	//pointer-events: ${next => (next === true ? `auto` : `none`)};
	&:hover {
		color: #000000;
	}
`;

export {
	Wrapper,
	TitleWrapper,
	Title,
	BasicInfoWrapper,
	WideInfoWrapper,
	Content,
	Label,
	BasicInput,
	NarrowDiv,
	NarrowInput,
	Form,
	BtnWrapper,
	NoticeWrapper,
	NoticeText,
	NoticeIcon,
	NoticeDetailText,
	ErrorMessage,
	NextBtn,
};
