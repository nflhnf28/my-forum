// import React from 'react';
// import PropTypes from 'prop-types';
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

// const authUserShape = {
// 	id: PropTypes.string.isRequired,
// };

// Navigation.propTypes = {
// 	authUser: PropTypes.shape(authUserShape).isRequired,
// 	signOut: PropTypes.func.isRequired,
// };

export default Navigation;
