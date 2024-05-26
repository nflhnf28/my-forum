import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Navigation({ signOut }) {
	return (
		<div className='navigation'>
			<nav>
				<Link to='/'>Forum App</Link>
				<Link to='/leaderboards'>Leaderboards</Link>
			</nav>
			<button
				type='button'
				onClick={signOut}
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
