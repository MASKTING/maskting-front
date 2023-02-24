import React from 'react';
import Wrapper from '../../Wrapper';
import * as S from './LoginBtn.style';
import kakaoLogin from '../../../assets/svg/login_kakao.svg';
import googleLogin from '../../../assets/svg/login_google.svg';
import naverLogin from '../../../assets/svg/login_naver.svg';

const REDIRECT_URI = 'http://localhost:3000/oauth2/redirect';

const Naver = `${process.env.REACT_APP_SERVER_HOST}/api/oauth2/naver?redirect_uri=${REDIRECT_URI}`;
const Google = `${process.env.REACT_APP_SERVER_HOST}/api/oauth2/google?redirect_uri=${REDIRECT_URI}`;
const Kakao = `${process.env.REACT_APP_SERVER_HOST}/api/oauth2/kakao?redirect_uri=${REDIRECT_URI}`;

const LoginBtn = () => {
	return (
		<Wrapper>
			<S.Logo />
			<S.Title>가면 속 운명의 상대를 만나보세요, 마스크팅!</S.Title>
			<S.LoginWrapper>
				<S.LoginButton href={Kakao}>
					<S.LoginImg alt="카카오톡 로그인" src={kakaoLogin} />
				</S.LoginButton>
				<S.LoginButton href={Naver}>
					<S.LoginImg alt="네이버 로그인" src={naverLogin} />
				</S.LoginButton>
				<S.LoginButton href={Google}>
					<S.LoginImg alt="구글 로그인" src={googleLogin} />
				</S.LoginButton>
			</S.LoginWrapper>
		</Wrapper>
	);
};

export default LoginBtn;
