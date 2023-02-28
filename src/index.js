import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { CookiesProvider } from 'react-cookie';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			retry: 0,
			useErrorBoundary: true,
		},
		mutations: { retry: 0, useErrorBoundary: true },
	},
});
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<CookiesProvider>
			<QueryClientProvider client={queryClient}>
				<App />
			</QueryClientProvider>
		</CookiesProvider>
	</React.StrictMode>,
);
