import { useQuery } from 'react-query';
import { useState } from 'react';
import { getMatchedPartnerProfile } from '../../api/getMatchedPartnerProfile';
import React from 'react';

const useGetMatchedPartner = roomId => {
	const [matchedInfo, setMatchedInfo] = useState({});

	const api = async () => {
		return await getMatchedPartnerProfile(roomId);
	};

	const success = res => {
		setMatchedInfo(res);
	};

	const error = e => {
		alert(e);
	};

	const query = useQuery('getMatchedParter', api, {
		refetchOnWindowFocus: false,
		retry: false,
		onSuccess: success,
		onError: error,
	});

	return [query, matchedInfo, setMatchedInfo];
};

export default useGetMatchedPartner;
