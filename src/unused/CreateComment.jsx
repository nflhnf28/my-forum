// CreateCommentForm.js
import React, { useState } from 'react';

const CreateCommentForm = ({ onCreateComment }) => {
	const [content, setContent] = useState('');

	const handleCreateComment = () => {
		// Kirim data komentar baru ke server
		onCreateComment({ content });
	};

	return (
		<div>
			<h2>Create Comment</h2>
			<textarea
				placeholder='Write your comment here'
				value={content}
				onChange={(e) => setContent(e.target.value)}
			/>
			<button onClick={handleCreateComment}>Post Comment</button>
		</div>
	);
};

export default CreateCommentForm;
