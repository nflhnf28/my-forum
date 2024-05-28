import { Link, useNavigate } from 'react-router-dom';
import RegisterInput from '../components/RegisterInput';
import { useDispatch } from 'react-redux';
import { asyncRegisterUser } from '../states/users/action';

function RegisterPage() {
	const navigate = useNavigate();
	const dispatch = useDispatch(); // @TODO: get dispatch function from store

	const onRegister = ({ name, email, password }) => {
		// @TODO: dispatch async action to register
		dispatch(asyncRegisterUser({ name, email, password }));
		navigate('/');
	};

	return (
		<section className='register-page'>
			<article className='register-page__main'>
				<h2 className='login-page__title'>Create your account</h2>
				<RegisterInput register={onRegister} />

				<p className='login-page__switch'>
					Already have an account? <Link to='/'>Login</Link>
				</p>
			</article>
		</section>
	);
}

export default RegisterPage;
