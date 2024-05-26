// CreateThreadForm.js
import React, { useState } from 'react';

const CreateThreadForm = ({ onCreateThread }) => {
	const [title, setTitle] = useState('');
	const [body, setBody] = useState('');

	const handleCreateThread = () => {
		// Kirim data thread baru ke server
		onCreateThread({ title, body });
	};

	return (
		<div>
			<h2>Create Thread</h2>
			<input
				type='text'
				placeholder='Title'
				value={title}
				onChange={(e) => setTitle(e.target.value)}
			/>
			<textarea
				placeholder='Body'
				value={body}
				onChange={(e) => setBody(e.target.value)}
			/>
			<button onClick={handleCreateThread}>Create Thread</button>
		</div>
	);
};

export default CreateThreadForm;
