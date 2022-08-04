import { BrowserRouter as Routers, Routes, Route } from 'react-router-dom';
import ExamplePage from '../pages/ExamplePage';

function Router() {
	return (
		<Routers>
			<Routes>
				<Route path="/" element={<ExamplePage />} />
			</Routes>
		</Routers>
	);
}

export default Router;
