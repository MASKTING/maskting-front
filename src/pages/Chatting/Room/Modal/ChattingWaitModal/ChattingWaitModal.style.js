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
	left: 50%;
	transform: translateX(-50%);
	width: 342px;
	height: 560px;
	top: 250px;
	z-index: 2;
`;

const ModalTopText = styled.div`
	width: fit-content;
	height: 20px;

	/* Body 2 */

	font-family: 'Pretendard-Regular';
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

	font-family: 'Pretendard-Regular';
	font-style: normal;
	font-weight: 700;
	font-size: 16px;
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

export { ModalMiddleBox, ModalMiddleBoxText, ModalTopText, ModalWrapper, ModalBackground };
