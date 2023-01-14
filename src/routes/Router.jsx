import { BrowserRouter as Routers, Route, Routes } from 'react-router-dom';

import LoginAuth from '../components/Login/LoginAuth/LoginAuth';
import ChattingMainPage from '../pages/Chatting/Main/ChattingMainPage';
import ChattingRequestPage from '../pages/Chatting/Request/ChattingRequestPage';
import ChattingRoomPage from '../pages/Chatting/Room/ChattingRoomPage';
import HomeFeedPage from '../pages/Home/Feed/HomeFeedPage';
import HomeMainPage from '../pages/Home/Main/HomeMainPage';
import HomeNotification from '../pages/Home/Notification/HomeNotification';
import HomePictureAdd from '../pages/Home/Picture/Add/HomePictureAdd';
import HomePictureInfo from '../pages/Home/Picture/Info/HomePictureInfo';
import HomePictureResize from '../pages/Home/Picture/Resize/HomePictureResize';
import LoginPage from '../pages/Login';
import MyPageMainPage from '../pages/MyPage/Main/MyPageMainPage';
import BasicInfoPage from '../pages/SignUp/BasicInfo';
import HobbyPage from '../pages/SignUp/Hobby';
import LocationPage from '../pages/SignUp/Location';
import MoreInfoPage from '../pages/SignUp/MoreInfo';
import PartnerLocationPage from '../pages/SignUp/PartnerLocation';
import PartnerMoreInfoPage from '../pages/SignUp/PartnerMoreInfo/PartnerMoreInfoPage';
import ProfileMaskPage from '../pages/SignUp/ProfileMask';
import ProfilePhotoPage from '../pages/SignUp/ProfilePhoto/ProfilePhotoPage';
import ProfileSettingPage from '../pages/SignUp/ProfileSetting';
import TicketAnswer from '../pages/Ticket/Answer/TicketAnswer';
import TicketMainPage from '../pages/Ticket/Main/TicketMainPage';
import TicketSuggest from '../pages/Ticket/Suggest/TicketSuggest';
import Wait from '../pages/Wait';
import WaitFail from '../pages/WaitFail';
import WaitSuccess from '../pages/WaitSuccess';

function Router() {
	return (
		<Routers>
			<Routes>
				<Route exact path="/" element={<LoginPage />} />
				<Route path="/oauth2/redirect" element={<LoginAuth />} />
				<Route exact path="/signup/basicInfo" element={<BasicInfoPage />} />
				<Route path="/signup/location" element={<LocationPage />} />
				<Route path="/signup/hobby" element={<HobbyPage />} />
				<Route path="/signup/moreInfo" element={<MoreInfoPage />} />
				<Route path="/signup/partnerLocation" element={<PartnerLocationPage />} />
				<Route path="/signup/partnerMoreInfo" element={<PartnerMoreInfoPage />} />
				<Route path="/signup/profilePhoto" element={<ProfilePhotoPage />} />
				<Route path="/signup/profileMask" element={<ProfileMaskPage />} />
				<Route path="/signup/profileSetting" element={<ProfileSettingPage />} />

				<Route path="/home" element={<HomeMainPage />} />
				<Route path="/home/notification" element={<HomeNotification />} />
				<Route path="/home/picture" element={<HomePictureInfo />} />
				<Route path="/home/picture/add" element={<HomePictureAdd />} />
				<Route path="/home/picture/resize" element={<HomePictureResize />} />
				<Route path="/home/feed" element={<HomeFeedPage />} />

				<Route path="/ticket" element={<TicketMainPage />} />
				<Route path="/ticket/answer" element={<TicketAnswer />} />
				<Route path="/ticket/suggest" element={<TicketSuggest />} />

				<Route path="/chatting" element={<ChattingMainPage />} />
				<Route path="/chatting/request" element={<ChattingRequestPage />} />
				<Route path="/chatting/room/:roomId" element={<ChattingRoomPage />} />

				<Route path="/myPage" element={<MyPageMainPage />} />
				<Route path="/homeMain" element={<HomeMainPage />} />
				<Route path="/wait" element={<Wait />} />
				<Route path="/wait/fail" element={<WaitFail />} />
				<Route path="/wait/success" element={<WaitSuccess />} />
			</Routes>
		</Routers>
	);
}

export default Router;
