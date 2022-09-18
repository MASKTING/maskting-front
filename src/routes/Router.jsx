import { BrowserRouter as Routers, Routes, Route } from 'react-router-dom';
import BasicInfoPage from '../pages/BasicInfo';
// import LocationPage from '../pages/LocationPage';
import MoreInfoPage from '../pages/MoreInfo';
import ProfilePhotoPage from '../pages/ProfilePhoto';
import ProfileSettingPage from '../pages/ProfileSetting';
import ProfileMaskPage from '../pages/ProfileMask';

function Router() {
	return (
		<Routers>
			<Routes>
				<Route exact path="/" element={<BasicInfoPage />} />
				{/* <Route path="/location" element={<LocationPage />} /> */}
				<Route path="/moreInfo" element={<MoreInfoPage />} />
				<Route path="/profileSetting" element={<ProfileSettingPage />} />
				<Route path="/profilePhoto" element={<ProfilePhotoPage />} />
				<Route path="/profileMask" element={<ProfileMaskPage />} />
			</Routes>
		</Routers>
	);
}

export default Router;
