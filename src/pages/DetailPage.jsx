import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ThreadDetail from '../components/ThreadDetail';
import { asyncReceiveThreadDetail, asyncAddComment } from '../states/threadDetail/action';
import CommentItem from '../components/CommentItem';
import CommentInput from '../components/CommentInput';

function DetailPage() {
	const { id } = useParams();
	const dispatch = useDispatch();

	const { threadDetail, authUser } = useSelector((state) => ({
		threadDetail: state.threadDetail,
		authUser: state.authUser
	}));

	useEffect(() => {
		dispatch(asyncReceiveThreadDetail(id));
	}, [id, dispatch]);

	const onAddComment = async ({ content }) => {
		const newComment = { content, owner: authUser, threadId: id };
		await dispatch(asyncAddComment(newComment));
	};

	if (!threadDetail) {
		return null;
	}

	return (
		<section className='detail-page'>
			<ThreadDetail authUser={authUser.id} {...threadDetail} />
			<div className='thread-comment'>
				<CommentInput addComment={onAddComment} />
				<h2 className='thread-comment__title'>Comments ({threadDetail.comments.length})</h2>
				{threadDetail.comments.map((comment, index) => (
					<CommentItem key={index} comment={comment} />
				))}
			</div>
		</section>
	);
}

export default DetailPage;
