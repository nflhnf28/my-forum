import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Navigation({ signOut }) {
	return (
		<div className='navigation'>
			<nav>
				<Link to='/'>Forum Apps</Link>
				<Link to='/leaderboards'>Leaderboards</Link>
			</nav>
			<button
				type='button'
				onClick={signOut}
				className='sign-out-button'
			>
				Sign out
			</button>
		</div>
	);
}

Navigation.propTypes = {
	signOut: PropTypes.func.isRequired,
};

export default Navigation;
