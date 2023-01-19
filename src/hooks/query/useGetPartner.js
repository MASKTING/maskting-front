import { useQuery } from 'react-query';
import { useState } from 'react';
import api from './../../api/api';

export const useGetPartner = () => {
	const [partnerInfo, setPartnerInfo] = useState(null);
	const query = useQuery(
		'getPartner',
		async () => {
			const res = await api.get('/api/partner');
			return res;
		},
		{
			refetchOnWindowFocus: false, // react-query는 사용자가 사용하는 윈도우가 다른 곳을 갔다가 다시 화면으로 돌아오면 이 함수를 재실행합니다. 그 재실행 여부 옵션 입니다.
			retry: 0, // 실패시 재호출 몇번 할지
			onSuccess: res => {
				setPartnerInfo(res?.data);
			},
			onError: e => {
				console.log(e);
			},
		},
	);
	return { ...query, partnerInfo };
};
