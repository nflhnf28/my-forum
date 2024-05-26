import { useState } from 'react';
import PropTypes from 'prop-types';

function LoginInput({ login }) {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	return (
		<form className='login-input'>
			<input
				type='text'
				value={email}
				onChange={(e) => setEmail(e.target.value)}
				placeholder='Email'
			/>
			<input
				type='password'
				value={password}
				onChange={(e) => setPassword(e.target.value)}
				placeholder='Password'
			/>
			<button
				type='button'
				onClick={() => login({ email, password })}
			>
				Login
			</button>
		</form>
	);
}

LoginInput.propTypes = {
	login: PropTypes.func.isRequired,
};

export default LoginInput;
