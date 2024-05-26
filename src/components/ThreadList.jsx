import { useState, useEffect } from 'react';
import axios from 'axios';
import ThreadItem from './ThreadItem';

const ThreadList = () => {
	const [threads, setThreads] = useState([]);

	useEffect(() => {
		const fetchThreads = async () => {
			try {
				const response = await axios.get(
					'https://forum-api.dicoding.dev/v1/threads'
				);
				setThreads(response.data.data.threads);
			} catch (error) {
				console.error('Error fetching threads:', error);
			}
		};

		fetchThreads();
	}, []);

	return (
		<div className="thread-overview">
			<h2>Thread List</h2>
			<div className="threads-list">
				{threads.map(({ id, title, body, category, upVotesBy, totalComments, createdAt, ownerId }) => (
					<ThreadItem
						key={id}
						id={id}
						title={title}
						body={body}
						category={category}
						upVotesBy={upVotesBy}
						totalComments={totalComments}
						createdAt={createdAt}
						ownerId={ownerId}
					/>
				))}
			</div>
		</div>
	);
};

export default ThreadList;
