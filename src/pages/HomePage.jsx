import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AiOutlinePlusCircle } from "react-icons/ai";
import { Link } from 'react-router-dom';
import ThreadList from '../components/ThreadList';
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

	const threadList = threads?.map((thread) => {
		return {
			...thread,
			id: thread?.id,
			user: users.find((user) => user.id === thread?.ownerId) || { name: 'Unknown User' },
			authUser: authUser?.id,
			createdAt: thread?.createdAt
		};
	});


	return (
		<section className='home-page'>
			<ThreadList threads={threadList} />
			<Link className="add-thread__button" to="/new-thread"><AiOutlinePlusCircle /></Link>
		</section>
	);
}

export default HomePage;
