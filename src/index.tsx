/* eslint-disable react/react-in-jsx-scope */
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './context/AuthProvider';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<BrowserRouter>
		<QueryClientProvider client={queryClient}>
			{/* <AuthProvider> */}
				<App />
			{/* </AuthProvider> */}
		</QueryClientProvider>
	</BrowserRouter>
);
