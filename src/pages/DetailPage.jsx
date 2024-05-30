import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ThreadDetail from '../components/ThreadDetail';
import { asyncReceiveThreadDetail } from '../states/threadDetail/action';
import CommentItem from '../components/CommentItem';
import CommentInput from '../components/CommentInput';
import { asyncAddComment } from '../states/comment/action';

function DetailPage() {
	const { id } = useParams();
	const dispatch = useDispatch();

	const { threadDetail, authUser } = useSelector((state) => ({
		threadDetail: state.threadDetail,
		authUser: state.authUser
	}));

	const [comments, setComments] = useState([]);

	useEffect(() => {
		dispatch(asyncReceiveThreadDetail(id));
	}, [id, dispatch]);

	useEffect(() => {
		if (threadDetail) {
			setComments(threadDetail.comments);
		}
	}, [threadDetail]);

	const onAddComment = async ({ content }) => {
		const newComment = { content, owner: authUser, threadId: id };
		await dispatch(asyncAddComment(newComment));
		setComments([newComment, ...comments]);
	};

	if (!threadDetail) {
		return null;
	}

	return (
		<section className='detail-page'>
			<ThreadDetail authUser={authUser.id} {...threadDetail} />
			<div className='thread-comment'>
				<CommentInput addComment={onAddComment} />
				<h2 className='thread-comment__title'>Comments ({comments.length})</h2>
				{comments.map((comment, index) => (
					<CommentItem key={index} comment={comment} />
				))}
			</div>
		</section>
	);
}

export default DetailPage;
