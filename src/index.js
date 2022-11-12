import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { CookiesProvider } from 'react-cookie';
import { QueryClient, QueryClientProvider } from 'react-query';
// import { ReactQueryDevtools } from 'react-query/devtools';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		{/* <QueryClientProvider client={QueryClient}> */}
		<CookiesProvider>
			{/* <ReactQueryDevtools initialIsOpen={true} /> */}
			<App />
		</CookiesProvider>
		{/* </QueryClientProvider> */}
	</React.StrictMode>,
);
