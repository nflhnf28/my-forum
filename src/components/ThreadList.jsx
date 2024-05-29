import ThreadItem from './ThreadItem';
import PropTypes from 'prop-types';

function ThreadList({ threads }) {
	return (
		<div className="thread-overview">
			<h2>Thread List</h2>
			<div className="threads-list">
				{
					threads?.map((thread, index) => (
						<ThreadItem key={index} {...thread} />
					))}
			</div>
		</div>
	);
}

ThreadList.propTypes = {
	threads: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string.isRequired,
			title: PropTypes.string,
			body: PropTypes.string,
			category: PropTypes.string,
			upVotesBy: PropTypes.array,
			downVotesBy: PropTypes.array,
			totalComments: PropTypes.number,
			createdAt: PropTypes.string.isRequired,
			user: PropTypes.shape({
				name: PropTypes.string.isRequired,
			}).isRequired,
		})
	).isRequired,
};

export default ThreadList;
