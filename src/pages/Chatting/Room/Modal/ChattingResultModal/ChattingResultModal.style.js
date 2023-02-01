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

const ModalTotalWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 0px;
	gap: 8px;

	position: absolute;
	width: 342px;
	height: 686px;
	left: 24px;
	top: 133px;
`;

const ModalWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 0px;
	gap: 16px;
	position: relative;
	width: 342px;
	height: 390px;
	z-index: 2;
	background: #eeeeee;
	border-radius: 24px;
`;

const ModalInner = styled.div`
	position: relative;
	bottom: 10px;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 0px;
	gap: 20px;
	width: 294px;
	height: 342px;
`;

const ModalFirstText = styled.div`
	position: relative;
	width: fit-content;
	height: 40px;

	/* Title 2 */

	font-family: 'Pretendard-Regular';
	font-style: normal;
	font-weight: 700;
	font-size: 26px;
	line-height: 40px;
	/* identical to box height, or 154% */

	text-align: center;
	letter-spacing: 1px;

	/* Black/900 */

	color: #212121;
`;

const ModalSecondText = styled.div`
	position: relative;
	width: fit-content;
	height: 20px;

	/* Body 2 */

	font-family: 'Pretendard-Regular';
	font-style: normal;
	font-weight: 1000;
	font-size: 12px;
	line-height: 20px;

	bottom: 10px;
	/* identical to box height, or 154% */

	letter-spacing: 0.5px;

	/* Black/900 */

	color: #212121;
`;

const ModalPhotoFrame = styled.div`
	position: relative;
	display: flex;
	flex-direction: row;
	align-items: flex-start;
	padding: 0px;
	gap: 21px;
	bottom: 15px;
	width: 293px;
	height: 136px;

	/* Inside auto layout */
`;

const ModalPhoto = styled.div`
	width: 140px;
	height: 140px;
	background-image: url(${props =>
		props.src ? props.src : 'https://cdn.ize.co.kr/news/photo/202208/53204_63942_515.jpg'});
	border-radius: 24px;
	background-size: cover;

	/* Inside auto layout */
`;

const ModalPhoneButton = styled.button`
	position: relative;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	padding: 10px 16px;
	gap: 10px;

	width: fit-content;
	height: 40px;

	font-family: 'Pretendard-Regular';
	font-style: normal;
	font-weight: 500;
	font-size: 13px;

	/* identical to box height, or 154% */

	letter-spacing: 0.5px;

	/* Black/50 */

	color: #fafafa;

	/* Pink/600 */

	background: #f45e5f;
	border-radius: 8px;
	border: 0px;
`;

const ModalAlertText = styled.div`
	position: relative;
	width: 205px;
	height: 36px;

	/* Caption */

	font-family: 'Pretendard-Regular';
	font-style: normal;
	font-weight: 500;
	font-size: 11px;
	line-height: 18px;
	/* or 164% */

	text-align: center;
	letter-spacing: 0.2px;

	/* Black/600 */

	color: #757575;

	/* Inside auto layout */

	flex: none;
	flex-grow: 0;
`;

const ModalNoticeWrapper = styled.div`
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 342px;
	height: 226px;

	/* Black/200 */

	background: #eeeeee;
	border-radius: 24px;
	z-index: 1;
`;

const ModalNoticeInner = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 0px;
	gap: 6px;

	position: relative;
	width: 294px;
	height: 178px;
`;

const ModalNoticeFirstText = styled.div`
	width: fit-content;
	height: 28px;

	/* Body 1 - Bold */

	font-family: 'Pretendard-Regular';
	font-style: normal;
	font-weight: 700;
	font-size: 17px;
	line-height: 28px;
	/* identical to box height, or 165% */

	/* Black/900 */

	color: #212121;
`;

const ModalNoticeSecondText = styled.div`
	position: relative;
	width: 294px;
	height: 60px;

	/* Body 2 */

	font-family: 'Pretendard-Regular';
	font-style: normal;
	font-weight: 500;
	font-size: 13px;
	line-height: 20px;
	/* or 154% */

	letter-spacing: 0.5px;

	/* Black/900 */

	color: #212121;

	/* Inside auto layout */

	flex: none;
	flex-grow: 0;
`;

const ModalLastTextFrame = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	font-family: 'Pretendard-Regular';
	align-items: flex-start;
	padding: 12px 16px;

	width: 292px;
	height: 78px;

	/* Black/300 */

	background: #e0e0e0;
	border-radius: 16px;
	font-style: normal;
	font-weight: 400;
	font-size: 11px;
	line-height: 18px;
	/* or 164% */

	letter-spacing: 0.2px;

	/* Black/600 */

	color: #757575;

	/* Inside auto layout */

	flex: none;
	order: 0;
	flex-grow: 0;
`;

const ModalFailedWrapper = styled.div`
	position: realative;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 342px;
	height: 134px;
	left: 0px;
	top: 45px;

	/* Black/200 */
	z-index: 2;
	background: #eeeeee;
	border-radius: 24px;
`;

const ModalFailedFirstText = styled.div`
	position: relative;
	width: fit-content;
	height: 40px;

	/* Title 2 */

	font-family: 'Pretendard-Regular';
	font-style: normal;
	font-weight: 700;
	font-size: 26px;
	line-height: 40px;
	/* identical to box height, or 154% */
	right: 10px;
	bottom: 10px;
	letter-spacing: 1px;

	/* Black/900 */

	color: #212121;
`;

const ModalFailedSecondText = styled.div`
	position: relative;
	width: 230px;
	height: 40px;

	/* Body 2 */

	font-family: 'Pretendard-Regular';
	font-style: normal;
	font-weight: 500;
	font-size: 14px;
	line-height: 20px;
	/* or 154% */

	letter-spacing: 0.5px;

	/* Black/900 */

	color: #212121;
`;

export {
	ModalFailedSecondText,
	ModalFailedFirstText,
	ModalFailedWrapper,
	ModalLastTextFrame,
	ModalNoticeSecondText,
	ModalNoticeFirstText,
	ModalNoticeInner,
	ModalNoticeWrapper,
	ModalAlertText,
	ModalPhoneButton,
	ModalPhoto,
	ModalPhotoFrame,
	ModalSecondText,
	ModalFirstText,
	ModalInner,
	ModalWrapper,
	ModalTotalWrapper,
	ModalBackground,
};
