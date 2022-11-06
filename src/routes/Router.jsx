import { BrowserRouter as Routers, Routes, Route } from 'react-router-dom';
import BasicInfoPage from '../pages/SignUp/BasicInfo';
import HobbyPage from '../pages/SignUp/Hobby';
import MoreInfoPage from '../pages/SignUp/MoreInfo';
import LocationPage from '../pages/SignUp/Location';
import ProfilePhotoPage from '../pages/SignUp/ProfilePhoto';
import ProfileSettingPage from '../pages/SignUp/ProfileSetting';
import ProfileMaskPage from '../pages/SignUp/ProfileMask';
import PartnerLocationPage from '../pages/SignUp/PartnerLocation';
import PartnerMoreInfoPage from '../pages/SignUp/PartnerMoreInfo';
import LoginPage from '../pages/Login';
import LoginAuth from '../components/Login/LoginAuth/LoginAuth';
import WaitingPage from '../pages/SignUp/Waiting';
import HomeMainPage from '../pages/Home/Main/HomeMainPage';


function Router() {
	return (
		<Routers>
			<Routes>
				<Route exact path="/" element={<LoginPage />} />
				<Route path="/oauth2/redirect" element={<LoginAuth />} />
				<Route exact path="/basicInfo" element={<BasicInfoPage />} />
				<Route path="/location" element={<LocationPage />} />
				<Route path="/hobby" element={<HobbyPage />} />
				<Route path="/moreInfo" element={<MoreInfoPage />} />
				<Route path="/profileSetting" element={<ProfileSettingPage />} />
				<Route path="/profilePhoto" element={<ProfilePhotoPage />} />
				<Route path="/profileMask" element={<ProfileMaskPage />} />
				<Route path="/partnerLocation" element={<PartnerLocationPage />} />
				<Route path="/partnerMoreInfo" element={<PartnerMoreInfoPage />} />
				<Route path="/wait" element={<WaitingPage />} />
				<Route path="/homeMain" element={<HomeMainPage />} />
			</Routes>
		</Routers>
	);
}

export default Router;
