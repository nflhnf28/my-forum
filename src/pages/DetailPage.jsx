import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ThreadDetail from '../components/ThreadDetail';
import { asyncReceiveThreadDetail } from '../states/threadDetail/action';
import CommentItem from '../components/CommentItem';
import CommentInput from '../components/CommentInput';
import { asyncAddComment } from '../states/comment/action';

function DetailPage() {
	const { id } = useParams();
	const dispatch = useDispatch(); // @TODO: get dispatch function from store
	const { threadDetail, authUser } = useSelector((states) => states); // @TODO: get talkDetail and authUser state from store

	useEffect(() => {
		// @TODO: dispatch async action to get thread detail by id
		dispatch(asyncReceiveThreadDetail(id));
	}, [id, dispatch]);

	// @TODO: add comment useEffect

	const onAddComment = ({ content }) => {
		// @TODO: dispatch async action to add talk
		console.log({ content, threadId: id });
		dispatch(asyncAddComment({ content, threadId: id }));
	};

	if (!threadDetail) {
		return null;
	}

	return (
		<section className='detail-page'>
			<ThreadDetail
				authUser={authUser.id}
				{...threadDetail}
			/>
			<div className='thread-comment'>
				<CommentInput addComment={onAddComment} />
				{
					threadDetail.comments.map((comment, index) => (
						<CommentItem key={index} comment={comment} />
					))
				}
			</div>
		</section>
	);
}

export default DetailPage;
