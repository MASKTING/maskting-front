import styled from 'styled-components';

const ModalBackground = styled.div`
	position: absolute;
	width: 390px;
	height: 754px;
	left: 0px;
	top: 97px;
	z-index: 1;
	background: rgba(0, 0, 0, 0.75);
`;

const ModalWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 0px;
	gap: 16px;

	position: absolute;
	width: 342px;
	height: 560px;
	left: 24px;
	top: 177px;
`;

const ModalTopText = styled.div`
	width: 180px;
	height: 20px;

	/* Body 2 */

	font-family: 'Pretendard';
	font-style: normal;
	font-weight: 500;
	font-size: 13px;
	line-height: 20px;
	/* identical to box height, or 154% */

	letter-spacing: 0.5px;

	/* Black/50 */

	color: #fafafa;

	/* Inside auto layout */

	flex: none;
	order: 0;
	flex-grow: 0;
	z-index: 1;
`;

const ModalMiddleBox = styled.div`
	display: flex;
	flex-direction: row;
	align-items: flex-start;
	padding: 16px 24px;
	gap: 16px;

	position: absolute;
	width: 341px;
	height: 88px;
	left: 0.5px;
	top: 36px;

	/* Black/200 */
	z-index: 1;
	background: #eeeeee;
	border-radius: 24px;
`;

const ModalMiddleBoxText = styled.div`
	width: 293px;
	height: 56px;

	/* Body 1 */

	font-family: 'Pretendard';
	font-style: normal;
	font-weight: 700;
	font-size: 14px;
	line-height: 28px;
	/* or 165% */

	text-align: center;
	letter-spacing: 0.8px;

	/* Black/900 */

	color: #212121;

	/* Inside auto layout */
	z-index: 1;
	flex: none;
	order: 0;
	flex-grow: 0;
`;

const ModalBottomBox = styled.div`
	position: relative;
	width: 342px;
	height: 420px;
	left: 0px;
	top: 105px;

	/* Black/200 */
	z-index: 1;
	background: #eeeeee;
	border-radius: 24px;
`;

const ModalBottomBoxInner = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 0px;
	gap: 37px;
	top: 15px;
	position: absolute;
	width: 294px;
	height: 363px;
	left: 24px;
`;

const ModalBottomBoxTopText = styled.div`
	position: relative;
	height: 28px;
	/* Body 1 - Bold */

	font-family: 'Pretendard';
	font-style: normal;
	font-weight: 700;
	font-size: 17px;
	line-height: 28px;
	/* identical to box height, or 165% */

	text-align: center;
	letter-spacing: 0.8px;

	/* Black/900 */

	color: #212121;

	/* Inside auto layout */

	flex: none;
	order: 0;
	flex-grow: 0;
`;

const ModalBottomBoxPhotoFrame = styled.div`
	position: relative;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	gap: 21px;
	width: 342px;
	height: 136px;

	/* Inside auto layout */

	flex: none;
	flex-grow: 0;
`;

const ModalBottomBoxPhoto = styled.div`
	width: 136px;
	height: 136px;
	background-image: url(${props =>
		props.src ? props.src : 'https://cdn.ize.co.kr/news/photo/202208/53204_63942_515.jpg'});
	border-radius: 24px;
	background-size: cover;
	border: ${props => props.size} solid #f45e5f;
	/* Inside auto layout */
`;

const ModalBottomPhoneText = styled.div`
	position: relative;
	width: 294px;
	height: 48px;
	/* Black/300 */
	font-family: 'Pretendard';
	font-style: normal;
	font-weight: 700;
	font-size: 17px;
	line-height: 28px;
	background: #e0e0e0;
	text-align: center;
	letter-spacing: 0.8px;
	border-radius: 16px;
	color: #212121;
	display: flex;
	flex-direction: column;
	justify-content: center;
`;

const ModalBottomDecideText = styled.div`
	display: flex;
	flex-direction: row;
	align-items: flex-start;
	padding: 10px 16px;
	gap: 10px;
	cursor: pointer;
	width: 100px;
	height: 40px;

	/* Body 2 */

	font-family: 'Pretendard';
	font-style: normal;
	font-weight: 500;
	font-size: 13px;
	line-height: 20px;
	/* identical to box height, or 154% */

	letter-spacing: 0.5px;

	/* Black/50 */

	color: #fafafa;

	/* Inside auto layout */

	/* Pink/600 */

	background: #f45e5f;
	border-radius: 8px;

	/* Inside auto layout */

	flex: none;
	flex-grow: 0;
`;

const RadioInput = styled.input`
	visibility: hidden;
`;

const Label = styled.label``;

export {
	Label,
	RadioInput,
	ModalBottomDecideText,
	ModalBottomPhoneText,
	ModalBottomBoxPhoto,
	ModalBottomBoxPhotoFrame,
	ModalBottomBoxInner,
	ModalBottomBoxTopText,
	ModalBottomBox,
	ModalMiddleBox,
	ModalMiddleBoxText,
	ModalTopText,
	ModalWrapper,
	ModalBackground,
};
