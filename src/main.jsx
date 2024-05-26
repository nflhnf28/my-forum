import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import './App.css';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import { Provider } from 'react-redux';
import store from './states';

ReactDOM.createRoot(document.getElementById('root')).render(
	<Provider store={store}>
		<BrowserRouter>
			<React.StrictMode>
				<App />
				{/* <Navigation /> */}
				{/* <ThreadList /> */}
			</React.StrictMode>
		</BrowserRouter>
	</Provider>
);
