import React from 'react';
import Wrapper from '../../Wrapper';
import * as S from './LoginBtn.style';
import kakaoLogin from '../../../assets/kakaoLogin.png';
import googleLogin from '../../../assets/googleLogin.png';
import naverLogin from '../../../assets/naverLogin.png';

const HOME = `http://ec2-3-34-75-204.ap-northeast-2.compute.amazonaws.com:8080`;
const REDIRECT_URI = 'http://localhost:3000/oauth2/redirect';
const Naver = `${HOME}/api/oauth2/naver?redirect_uri=${REDIRECT_URI}`;
const Google = `${HOME}/api/oauth2/google?redirect_uri=${REDIRECT_URI}`;
const Kakao = `${HOME}/api/oauth2/kakao?redirect_uri=${REDIRECT_URI}`;

const LoginBtn = () => {
	return (
		<Wrapper>
			<S.Logo />
			<S.Title>가면 속 운명의 상대를 만나보세요, 마스크팅!</S.Title>
			<S.LoginWrapper>
				<a href={Kakao}>
					<S.LoginImg alt="카카오톡 로그인" src={kakaoLogin} />
				</a>
				<a href={Naver}>
					<S.LoginImg alt="네이버 로그인" src={naverLogin} />
				</a>
				<a href={Google}>
					<S.LoginImg alt="구글 로그인" src={googleLogin} />
				</a>
			</S.LoginWrapper>
		</Wrapper>
	);
};

export default LoginBtn;
