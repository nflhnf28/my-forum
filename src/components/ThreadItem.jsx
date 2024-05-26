import { Link } from 'react-router-dom';
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import { AiOutlineComment } from "react-icons/ai";
import { postedAt } from '../utils';
import PropTypes from 'prop-types';

const ThreadItem = ({ id, title, body, category, upVotesBy, totalComments, createdAt, ownerId }) => {
	return (
		<div className='thread-item'>
			<div className='thread-item__header'>
				<span className="thread-item__category">{category}</span>
				<h3 className='thread-item__title'>
					<Link to={`/threads/${id}`}>{title}</Link>
				</h3>
			</div>

			<div className="thread-item__body">
				<div
					dangerouslySetInnerHTML={{ __html: body }}
					className='thread-item__body'
				/>
			</div>

			<div className="thread-item__footer">
				<button className="thread-upvote__button">
					<AiOutlineLike />
					<span className="thread-upvote__count">{upVotesBy.length}</span>
				</button>
				<button className="thread-downvote__button">
					<AiOutlineDislike />
					<span className="thread-downvote__count">{upVotesBy.length}</span>
				</button>
				<span className="thread-item__total-comments"><AiOutlineComment />{totalComments}</span>
				<p>{postedAt(createdAt)}</p>
				<p className="thread-item__owner">Dibuat oleh <strong>{ownerId}</strong></p>
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
	category: PropTypes.string.isRequired,
	upVotesBy: PropTypes.array.isRequired,
	totalComments: PropTypes.number.isRequired,
	ownerId: PropTypes.string.isRequired,
	createdAt: PropTypes.string.isRequired,
	owner: PropTypes.string,
};

export default ThreadItem;
