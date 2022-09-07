import { BrowserRouter as Routers, Routes, Route } from 'react-router-dom';
import BasicInfoPage from '../pages/BasicInfo';
import LocationPage from '../pages/LocationPage';
import MoreInfoPage from '../pages/MoreInfo';

function Router() {
	return (
		<Routers>
			<Routes>
				<Route exact path="/" element={<BasicInfoPage />} />
				<Route path="/location" element={<LocationPage />} />
				<Route path="/moreInfo" element={<MoreInfoPage />} />
			</Routes>
		</Routers>
	);
}

export default Router;
