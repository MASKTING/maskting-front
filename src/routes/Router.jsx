import { BrowserRouter as Routers, Routes, Route } from 'react-router-dom';
import BasicInfoPage from '../pages/SignUp/BasicInfo';
import HobbyPage from '../pages/SignUp/Hobby';
import MoreInfoPage from '../pages/SignUp/MoreInfo';
import LocationPage from '../pages/SignUp/Location';
import ProfilePhotoPage from '../pages/SignUp/ProfilePhoto';
import ProfileSettingPage from '../pages/SignUp/ProfileSetting';
import ProfileMaskPage from '../pages/SignUp/ProfileMask';
import WantLocationPage from '../pages/SignUp/WantLocation/WantLocationPage';

function Router() {
	return (
		<Routers>
			<Routes>
				<Route exact path="/" element={<BasicInfoPage />} />
				<Route path="/location" element={<LocationPage />} />
				<Route path="/hobby" element={<HobbyPage />} />
				<Route path="/moreInfo" element={<MoreInfoPage />} />
				<Route path="/profileSetting" element={<ProfileSettingPage />} />
				<Route path="/profilePhoto" element={<ProfilePhotoPage />} />
				<Route path="/profileMask" element={<ProfileMaskPage />} />
				<Route path="/wantLocation" element={<WantLocationPage />} />
			</Routes>
		</Routers>
	);
}

export default Router;
