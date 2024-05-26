// ThreadDetail.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ThreadDetail = () => {
	const { threadId } = useParams();
	const [thread, setThread] = useState(null);

	useEffect(() => {
		const fetchThread = async () => {
			try {
				const response = await axios.get(
					`https://forum-api.dicoding.dev/v1/threads/${threadId}`
				);
				setThread(response.data.data.detailThread);
			} catch (error) {
				console.error('Error fetching thread detail:', error);
			}
		};

		fetchThread();
	}, [threadId]);

	return (
		<div>
			{thread ? (
				<div>
					<h2>{thread.title}</h2>
					<p>{thread.body}</p>
					<p>Category: {thread.category}</p>
					<p>Created at: {new Date(thread.createdAt).toLocaleString()}</p>
					<p>Created by: {thread.owner.name}</p>
					<h3>Comments</h3>
					<ul>
						{thread.comments.map((comment) => (
							<li key={comment.id}>
								<p>{comment.content}</p>
								<p>
									Created at: {new Date(comment.createdAt).toLocaleString()}
								</p>
								<p>Created by: {comment.owner.name}</p>
							</li>
						))}
					</ul>
				</div>
			) : (
				<p>Loading...</p>
			)}
		</div>
	);
};

export default ThreadDetail;
