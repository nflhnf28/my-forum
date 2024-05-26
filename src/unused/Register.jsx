// RegistrationForm.js
import React, { useState } from 'react';

const RegistrationForm = ({ onRegister }) => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const handleRegister = () => {
		// Kirim data registrasi ke server
		onRegister({ username, password });
	};

	return (
		<div>
			<h2>Register</h2>
			<input
				type='text'
				placeholder='Username'
				value={username}
				onChange={(e) => setUsername(e.target.value)}
			/>
			<input
				type='password'
				placeholder='Password'
				value={password}
				onChange={(e) => setPassword(e.target.value)}
			/>
			<button onClick={handleRegister}>Register</button>
		</div>
	);
};

export default RegistrationForm;
