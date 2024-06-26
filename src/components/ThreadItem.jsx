import { Link } from 'react-router-dom';
import { AiOutlineLike, AiOutlineComment, AiOutlineDislike } from "react-icons/ai";
import { postedAt } from '../utils';
import PropTypes from 'prop-types';

const ThreadItem = ({ id, title, body, upVotesBy = [], downVotesBy = [], totalComments = 0, createdAt, user }) => {
	return (
		<div className='thread-item'>
			<div className='thread-item__header'>
				<h3 className='thread-item__title'>
					<Link to={`/threads/${id}`}>{title}</Link>
				</h3>
			</div>

			<div className="thread-item__body">
				<div
					dangerouslySetInnerHTML={{ __html: body }}
					className='thread-item__body-content'
				/>
			</div>

			<div className="thread-item__footer">
				<div className='button-actions'>

					<button className="thread-upvote__button">
						<AiOutlineLike />
						<span className="thread-upvote__count">{upVotesBy?.length}</span>
					</button>

					<button className="thread-downvote__button">
						<AiOutlineDislike />
						<span className="thread-downvote__count">{downVotesBy?.length}</span>
					</button>

					<button className="thread-item__total-comments">
						<AiOutlineComment />
						<span className="thread-comment__count">{totalComments}</span>
					</button>

					<p>{postedAt(createdAt)},</p>
					<p className="thread-item__owner">Posted by: <strong>{user?.name}</strong></p>

				</div>
			</div>

		</div>
	);
};

/*
 *  dangerouslySetInnerHTML attribute untuk
 *  menyisipkan render HTML content langsung di React
 */

ThreadItem.propTypes = {
	id: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	body: PropTypes.string.isRequired,
	upVotesBy: PropTypes.array,
	downVotesBy: PropTypes.array,
	totalComments: PropTypes.number,
	createdAt: PropTypes.string.isRequired,
	user: PropTypes.shape({
		name: PropTypes.string,
	}),
};

export default ThreadItem;
