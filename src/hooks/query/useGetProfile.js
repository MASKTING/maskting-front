import { useQuery } from 'react-query';
import { getProfile } from '../../api/getProfile';
import { useState } from 'react';

export const useGetProfile = () => {
	const [userInfo, setUserInfo] = useState(null);
	const query = useQuery('getProfile', getProfile, {
		refetchOnWindowFocus: false, // react-query는 사용자가 사용하는 윈도우가 다른 곳을 갔다가 다시 화면으로 돌아오면 이 함수를 재실행합니다. 그 재실행 여부 옵션 입니다.
		retry: 0, // 실패시 재호출 몇번 할지
		onSuccess: res => {
			setUserInfo(res?.data);
		},
		onError: e => {
			console.log(e);
		},
	});
	return { ...query, userInfo, setUserInfo };
};
