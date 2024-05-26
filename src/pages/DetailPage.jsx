import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ThreadDetail from '../components/ThreadDetail';
import { asyncReceiveThreadDetail } from '../states/threadDetail/action';
// import {
// asyncReceiveTalkDetail,
// asyncToogleLikeTalkDetail,
// } from '../states/talkDetail/action';
// import { asyncAddTalk } from '../states/talks/action';

function DetailPage() {
	const { threadId } = useParams();
	const { threadDetail = null, authUser } = useSelector((states) => states); // @TODO: get talkDetail and authUser state from store
	const dispatch = useDispatch(); // @TODO: get dispatch function from store

	useEffect(() => {
		// @TODO: dispatch async action to get talk detail by id
		dispatch(asyncReceiveThreadDetail(threadId));
	}, [threadId, dispatch]);

	// const onLikeTalk = () => {
	// 	// @TODO: dispatch async action to toggle like talk detail
	// 	dispatch(asyncToogleLikeTalkDetail());
	// };

	// const onReplyTalk = (text) => {
	// 	// @TODO: dispatch async action to add reply talk
	// 	dispatch(asyncAddTalk({ text, replyTo: id }));
	// };

	// if (!threadDetail) {
	// 	return null;
	// }

	return (
		<section className='detail-page'>
			{/* {threadDetail.parent && (
				<div className='detail-page__parent'>
					<h3>Replying To</h3>
					<ThreadItem
						{...threadDetail.parent}
						authUser={authUser.id}
					/>
				</div>
			)} */}
			<ThreadDetail
				authUser={authUser.id}
			/>
		</section>
	);
}

export default DetailPage;
