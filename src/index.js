import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { CookiesProvider } from 'react-cookie';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<CookiesProvider>
			<QueryClientProvider client={queryClient}>
				<ReactQueryDevtools initialIsOpen={true} />
				<App />
			</QueryClientProvider>
		</CookiesProvider>
	</React.StrictMode>,
);
