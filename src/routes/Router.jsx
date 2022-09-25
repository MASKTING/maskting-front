import { BrowserRouter as Routers, Routes, Route } from 'react-router-dom';
import BasicInfoPage from '../pages/SignUp/BasicInfo';
// import LocationPage from '../pages/LocationPage';
import MoreInfoPage from '../pages/SignUp/MoreInfo';
import ProfilePhotoPage from '../pages/SignUp/ProfilePhoto';
import ProfileSettingPage from '../pages/SignUp/ProfileSetting';
import ProfileMaskPage from '../pages/SignUp/ProfileMask';

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
