import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RecoilRoot } from 'recoil';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { BrowserRouter } from 'react-router-dom';

const queryClient = new QueryClient();
const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement,
);
async function enableMocking() {
	if (process.env.NODE_ENV !== 'development') {
		return;
	}

	const { worker } = await import('./mocks/browsers');
	return worker.start();
}
enableMocking().then(() => {
	root.render(
		<React.StrictMode>
			<QueryClientProvider client={queryClient}>
				<RecoilRoot>
					<BrowserRouter>
						<App />
					</BrowserRouter>
				</RecoilRoot>
				<ReactQueryDevtools />
			</QueryClientProvider>
		</React.StrictMode>,
	);

	// If you want to start measuring performance in your app, pass a function
	// to log results (for example: reportWebVitals(console.log))
	// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
	reportWebVitals();
});
