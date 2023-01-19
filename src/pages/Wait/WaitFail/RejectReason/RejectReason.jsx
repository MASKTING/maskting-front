import * as S from './RejectReason.style';
import React from 'react';

const RejectReason = reason => {
	console.log(reason.reason);
	return (
		<>
			{reason?.reason?.includes('프로필 사진') && (
				<S.List>
					<S.Line1>
						<S.Red>* 기준에 적합하지 않는 프로필 사진</S.Red>
					</S.Line1>
					<S.Line2>
						* 이렇게 등록해주세요: 얼굴이 선명하게 보이는 사진, 얼굴이 정면으로 나온 사진
					</S.Line2>
					<S.Line2>
						* 이런 사진은 안돼요: 단체사진이나 친구가 같이 나온 사진, 얼굴 일부가 가려진
						사진(선글라스 등)
					</S.Line2>
				</S.List>
			)}
			{reason?.reason?.includes('닉네임') && (
				<S.List>
					<S.Line1>
						<S.Red>* 사용할 수 없는 닉네임</S.Red>
					</S.Line1>
					<S.Line2>* 욕설이나 비하, 비속어 및 선정적인 표현은 안돼요</S.Line2>
					<S.Line2>* 상대방도 기분이 좋아지는 닉네임을 작성해주세요!</S.Line2>
				</S.List>
			)}
			{reason?.reason?.includes('이름') && (
				<S.List>
					<S.Line1>
						<S.Red>* 이름</S.Red>
					</S.Line1>
					<S.Line2>
						* 오타 및 부적합한 단어가 포함되어 있는 것 같습니다. 다시 한 번 본인의 이름을
						입력해주세요
					</S.Line2>
					<S.Line2>
						* (이름은 상대방에게 공개되지 않으며, 회원님의 소중한 데이터 관리를 위해 사용됩니다)
					</S.Line2>
				</S.List>
			)}
			{reason?.reason?.includes('생년월일') && (
				<S.List>
					<S.Line1>
						<S.Red>* 생년월일</S.Red>
					</S.Line1>
					<S.Line2>형식에 알맞는 생년월일을 입력해주세요</S.Line2>
				</S.List>
			)}
		</>
	);
};
export default RejectReason;
