import Router from './routes/Router';
import GlobalStyle from './styles/GlobalStyle';
import { RecoilRoot } from 'recoil';
import React from 'react';

function App() {
	return (
		<RecoilRoot>
			<GlobalStyle />
			<Router />
		</RecoilRoot>
	);
}

export default App;
