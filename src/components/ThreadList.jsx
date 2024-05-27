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
	threads: PropTypes.array
}

export default ThreadList;
