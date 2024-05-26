import ThreadList from '../components/ThreadList';
// import { useDispatch } from 'react-redux';

function HomePage() {
	// const { /* talks = [], users = [],*/ authUser } = useSelector((states) => states); // @TODO: get talks, users, and authUser state from store

	// const dispatch = useDispatch(); // @TODO: get dispatch function from store

	// useEffect(() => {
	// 	// @TODO: dispatch async action to populate talks and users data
	// 	dispatch(asyncPopulateUsersAndTalks());
	// }, [dispatch]);

	// const onAddTalk = (text) => {
	// 	// @TODO: dispatch async action to add talk
	// 	dispatch(asyncAddTalk({ text }));
	// };

	// const onLike = (id) => {
	// 	// @TODO: dispatch async action to toggle like talk
	// 	dispatch(asyncToogleLikeTalk(id));
	// };

	// const talkList = talks.map((talk) => ({
	// 	...talk,
	// 	user: users.find((user) => user.id === talk.user),
	// 	authUser: authUser.id,
	// }));

	return (
		<section className='home-page'>
			<ThreadList />
		</section>
	);
}

export default HomePage;
