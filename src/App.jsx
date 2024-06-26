import { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Loading from './components/Loading';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import RegisterPage from './pages/RegisterPage';
import LeaderboardPage from './pages/LeaderboardPage';
import Navigation from './components/Navigation';
import { useDispatch, useSelector } from 'react-redux';
import { asyncPreloadProcess } from './states/isPreload/action';
import { asyncUnsetAuthUser } from './states/authUser/action';
import DetailPage from './pages/DetailPage';
import CreateThreadPage from './pages/CreateThreadPage';

function App() {
	const authUser = useSelector((state) => state.authUser);
	const isPreload = useSelector((state) => state.isPreload);

	const navigate = useNavigate();

	const dispatch = useDispatch(); // @TODO: get dispatch function from store

	useEffect(() => {
		// @TODO: dispatch async action to preload app
		dispatch(asyncPreloadProcess());
	}, [dispatch]);

	const onSignOut = () => {
		// @TODO: dispatch async action to sign out
		dispatch(asyncUnsetAuthUser());
		navigate('/');
	};

	if (isPreload) {
		return null;
	}

	if (authUser === null) {
		return (
			<>
				<Loading />
				<main>
					<Routes>
						<Route
							path='/*'
							element={<LoginPage />}
						/>
						<Route
							path='/register'
							element={<RegisterPage />}
						/>
					</Routes>
				</main>
			</>
		);
	}

	return (
		<>
			<Loading />
			<header>
				<Navigation
					authUser={authUser}
					signOut={onSignOut}
				/>
			</header>
			<div className='app-container'>
				<main>
					<Routes>
						<Route
							path='/'
							element={<HomePage />}
						/>
						<Route
							path='/leaderboards'
							element={<LeaderboardPage />}
						/>
						<Route
							path="/threads/:id"
							element={<DetailPage />}
						/>
						<Route
							path="/new-thread"
							element={<CreateThreadPage />}
						/>
					</Routes>
				</main>
			</div>
		</>
	);
}

export default App;
