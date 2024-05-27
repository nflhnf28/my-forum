import { useEffect } from 'react';
import ThreadList from '../components/ThreadList';
import { useDispatch, useSelector } from 'react-redux';
// import { asyncReceiveThreads } from '../states/threads/action';
import { AiOutlinePlusCircle } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { asyncGetUsersAndThreads } from '../states/shared/action';

function HomePage() {
	const threads = useSelector((state) => state.threads);
	const users = useSelector((state) => state.users);
	const authUser = useSelector((state) => state.authUser);

	const dispatch = useDispatch();

	useEffect(() => {
		// @TODO: dispatch async action to receive threads
		dispatch(asyncGetUsersAndThreads());
	}, [dispatch]);

	const threadList = threads.map((thread) => ({
		...thread,
		user: users.find((user) => user.id === thread.ownerId),
		authUser: authUser?.id,
	}));

	return (
		<section className='home-page'>
			<ThreadList threads={threadList} />
			<Link className="home-page__add-button" to="/new-thread"><AiOutlinePlusCircle /></Link>
		</section>
	);
}

export default HomePage;
