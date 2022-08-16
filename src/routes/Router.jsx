import { BrowserRouter as Routers, Routes, Route } from 'react-router-dom';
import BasicInfoPage from '../pages/BasicInfo';

function Router() {
	return (
		<Routers>
			<Routes>
				<Route path="/" element={<BasicInfoPage />} />
			</Routes>
		</Routers>
	);
}

export default Router;
