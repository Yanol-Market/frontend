import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RecoilRoot } from 'recoil';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { BrowserRouter } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';

const queryClient = new QueryClient();
const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement,
);

root.render(
	<React.StrictMode>
		<CookiesProvider>
			<QueryClientProvider client={queryClient}>
				<RecoilRoot>
					<BrowserRouter>
						<App />
					</BrowserRouter>
				</RecoilRoot>
				<ReactQueryDevtools />
			</QueryClientProvider>
		</CookiesProvider>
	</React.StrictMode>,
);
