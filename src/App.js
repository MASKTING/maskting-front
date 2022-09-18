import Router from './routes/Router';
import GlobalStyle from './styles/GlobalStyle';
import { RecoilRoot, atom, selector, useRecoilState, useRecoilValue } from 'recoil';

function App() {
	return (
		<RecoilRoot>
			<GlobalStyle />
			<Router />
		</RecoilRoot>
	);
}

export default App;
