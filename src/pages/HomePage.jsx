import { useEffect } from 'react';
import ThreadList from '../components/ThreadList';
import { useDispatch, useSelector } from 'react-redux';
import { asyncReceiveThreads } from '../states/threads/action';
import { AiOutlinePlusCircle } from "react-icons/ai";
import { Link } from 'react-router-dom';

function HomePage() {
	const threads = useSelector((states) => states?.threads)
	const dispatch = useDispatch(); // @TODO: get dispatch function from store

	useEffect(() => {
		// @TODO: dispatch async action to receive threads
		dispatch(asyncReceiveThreads());
	}, [dispatch]);

	return (
		<section className='home-page'>
			<ThreadList threads={threads} />
			<Link className="home-page__add-button" to="/new-thread"><AiOutlinePlusCircle /></Link>
		</section>
	);
}

export default HomePage;
